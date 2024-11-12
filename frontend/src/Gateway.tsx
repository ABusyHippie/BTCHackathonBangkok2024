import { FormEvent, useEffect, useState } from "react";

import { useSendGatewayTransaction } from "@gobob/sats-wagmi";
import { type Hex, parseUnits } from "viem";
import { GatewayQuoteParams, GatewaySDK, GatewayQuote } from "@gobob/bob-sdk";
import { base64 } from "@scure/base";
import { Transaction } from "@scure/btc-signer";

console.groupCollapsed("fckin logs");
const gatewaySDK = new GatewaySDK("bob-sepolia");

function Gateway({ selectedToken }: { selectedToken?: string }) {
  const {
    data: hash,
    error,
    isPending,
    sendGatewayTransaction,
  } = useSendGatewayTransaction({ toChain: "bob-sepolia" });

  const [quote, setQuote] = useState<GatewayQuote | null>(null);
  const [orderStatus, setOrderStatus] = useState<string>("");

  const quoteParams = {
    fromToken: selectedToken || "BTC",
    fromChain: "Bitcoin",
    fromUserAddress: "bc1qafk4yhqvj4wep57m62dgrmutldusqde8adh20d",
    toChain: "bob-sepolia",
    toUserAddress: "0x2D2E86236a5bC1c8a5e5499C517E17Fb88Dbc18c",
    toToken: "tBTC",
    amount: 10000000, // 0.1 BTC
    gasRefill: 10000, // 0.0001 BTC
    feeRate: 5,
  };

  async function fetchQuote() {
    if (selectedToken) {
      const fetchedQuote = await gatewaySDK.getQuote(quoteParams);
      setQuote(fetchedQuote);
    }
  }

  useEffect(() => {
    fetchQuote();
  }, [selectedToken]);

  async function handleSwap(evmAddress: Hex, amount: number) {
    try {
      setOrderStatus("Creating order...");
      const { uuid, psbtBase64 } = await gatewaySDK.startOrder(
        quote!,
        quoteParams
      );

      setOrderStatus("Signing transaction...");
      const tx = Transaction.fromPSBT(base64.decode(psbtBase64!));

      setOrderStatus("Finalizing order...");
      await gatewaySDK.finalizeOrder(uuid, tx.hex);

      setOrderStatus("Order completed!");
      console.log({ uuid, psbtBase64, tx });
    } catch (error) {
      setOrderStatus(`Error: ${(error as Error).message}`);
    }
  }

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const evmAddress = formData.get("address") as Hex;
    const value = formData.get("value") as string;

    // Convert BTC amount to satoshis
    const amountSats = parseFloat(value) * 100000000;
    await handleSwap(evmAddress, amountSats);
    console.log({ formData, evmAddress, value, amountSats });
    console.groupEnd();
  }

  return (
    <div>
      <h2>BOB Gateway</h2>
      <form onSubmit={submit}>
        <input required name="address" placeholder="EVM Address" />
        <input
          required
          name="value"
          placeholder="Amount (BTC)"
          step="0.00000001"
          type="number"
        />
        <button disabled={isPending} type="submit">
          {isPending ? "Confirming..." : "Send"}
        </button>
      </form>
      {quote && (
        <div>
          <div>Quote Fee: {quote.fee}</div>
          {/* Render other quote fields as needed */}
        </div>
      )}
      {hash && <div>Transaction Hash: {hash}</div>}
      {error && <div>Error: {error.message}</div>}
      {orderStatus && <div>Status: {orderStatus}</div>}
    </div>
  );
}

export default Gateway;
