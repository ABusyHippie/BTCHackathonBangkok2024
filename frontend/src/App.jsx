import React from 'react'
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SatsWagmiConfig, useConnect } from "@gobob/sats-wagmi";


import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const queryClient = new QueryClient();

function WalletOptions() {
  const { connectors, connect } = useConnect()

  return connectors.map((connector) => (
    <button key={connector.name} onClick={() => connect({ connector })}>
      {connector.name}
    </button>
  ))
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <QueryClientProvider client={queryClient}>
          <SatsWagmiConfig network="testnet" queryClient={queryClient}>
            <WalletOptions />
          </SatsWagmiConfig>
        </QueryClientProvider>

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React (Should be vue)</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
