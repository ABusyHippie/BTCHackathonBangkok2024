import { FormEvent, useState } from "react";
import { type Hex } from "viem";

function Gateway({ selectedToken }: { selectedToken?: string }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [hash, setHash] = useState<string>("");
  const [isPending, setIsPending] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);
    
    // Wait for 3 seconds
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Generate random transaction hash
    const randomHash = "0x" + Array.from({length: 64}, () => 
      Math.floor(Math.random() * 16).toString(16)).join("");
    
    setHash(randomHash);
    setIsSuccess(true);
    setIsPending(false);
  }

  if (isSuccess) {
    return (
      <div style={{
        padding: "2em",
        background: "linear-gradient(45deg, #00ff87, #60efff)",
        borderRadius: "12px",
        color: "black",
        textAlign: "center",
        animation: "fadeIn 0.5s ease-out"
      }}>
        <h2 style={{
          fontSize: "2em",
          marginBottom: "0.5em",
          fontWeight: "bold"
        }}>Success!</h2>
        <p style={{
          fontSize: "0.9em",
          opacity: 0.8,
          wordBreak: "break-all",
          fontWeight: "bold"
        }}>
          Transaction Hash: {hash}
        </p>
        <p style={{
          fontSize: "0.85em",
          marginTop: "1em",
          opacity: 0.9,
          fontWeight: "bold"
        }}>
          Your Bitcoin is on BOB! You're ready to start earning yield
        </p>
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div>
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
    </div>
  );
}

export default Gateway;
