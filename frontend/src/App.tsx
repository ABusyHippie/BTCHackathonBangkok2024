import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SatsWagmiConfig } from "@gobob/sats-wagmi";
import { GlobalStateProvider, useGlobalState } from './xstate';
import WalletConnectButton from './WalletConnectButton';
import GatewayModule from './GatewayModule';
import ReactiveBackground from './ReactiveBackground';

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState<number>(0);
  const { state, send } = useGlobalState();

  return (
    <GlobalStateProvider>
      <ReactiveBackground />
      <div className="logo-container">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Universal BTC Wallet</h1>
      <div>
        <QueryClientProvider client={queryClient}>
          <SatsWagmiConfig network="testnet" queryClient={queryClient}>
            <WalletConnectButton />
            <GatewayModule />
          </SatsWagmiConfig>
        </QueryClientProvider>
      </div>
      {/* <div className="card"> */}
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => send({ type: 'TOGGLE' })}>
          Current State: {state.value}
        </button> */}
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </GlobalStateProvider>
  );
}

export default App;
