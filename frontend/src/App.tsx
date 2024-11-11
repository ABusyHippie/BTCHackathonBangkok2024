import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SatsWagmiConfig, useConnect } from "@gobob/sats-wagmi";
import { createMachine } from 'xstate';
import { useMachine } from '@xstate/react';
import DropdownMenu from './DropdownMenu';
import Gateway from './Gateway';

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const queryClient = new QueryClient();

function WalletOptions() {
  const { connectors, connect } = useConnect();

  return connectors.map((connector) => (
    <button key={connector.name} onClick={() => connect({ connector })}>
      {connector.name}
    </button>
  ));
}

const toggleMachine = createMachine({
  id: 'toggle',
  initial: 'Inactive',
  states: {
    Inactive: {
      on: { toggle: 'Active' },
    },
    Active: {
      on: { toggle: 'Inactive' },
    },
  },
});

function App() {
  const [count, setCount] = useState<number>(0);
  const [state, send] = useMachine(toggleMachine);
  const [selectedToken, setSelectedToken] = useState<string | null>(null);

  return (
    <>
              <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Universal BTC Wallet</h1>
      <div>
        <QueryClientProvider client={queryClient}>
          <SatsWagmiConfig network="testnet" queryClient={queryClient}>
            <WalletOptions />
            <div />
          </SatsWagmiConfig>
          <div />
          <DropdownMenu setSelectedToken={setSelectedToken} />
          <Gateway selectedToken={selectedToken} />
        </QueryClientProvider>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => {
          send({ type: 'toggle' });
          console.log('Current state:', state.value);
        }}>
          Toggle State: {state.value}
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
