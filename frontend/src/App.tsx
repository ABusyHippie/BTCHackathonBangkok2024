import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SatsWagmiConfig } from "@gobob/sats-wagmi";
import { GlobalStateProvider } from './xstate';
import WalletConnectButton from './WalletConnectButton';
import GatewayModule from './GatewayModule';
import YieldModule from './YieldModule';
import ReactiveBackground from './ReactiveBackground';

import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  const [showGateway, setShowGateway] = useState(true);

  return (
    <GlobalStateProvider>
      <ReactiveBackground />
      <div className="logo-container">
        <a href="https://bitcoin.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Magnus Lending</h1>
      <h3>Universal Bitcoin L2 DeFi for BOB, RSK, and more</h3>
      <div>
        <QueryClientProvider client={queryClient}>
          <SatsWagmiConfig network="testnet" queryClient={queryClient}>
            <WalletConnectButton />
            {showGateway ? (
              <GatewayModule onClose={() => setShowGateway(false)} />
            ) : (
              <YieldModule />
            )}
          </SatsWagmiConfig>
        </QueryClientProvider>
      </div>
    </GlobalStateProvider>
  );
}

export default App;
