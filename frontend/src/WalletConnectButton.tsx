import React, { useState } from 'react';
import { useConnect } from "@gobob/sats-wagmi";

function WalletConnectButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { connectors, connect, isSuccess } = useConnect();

  return (
    <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          border: isSuccess ? '2px solid #4CAF50' : '1px solid #646cff',
          transition: 'border 0.3s ease'
        }}
      >
        {isSuccess ? 'Wallet Connected' : 'Connect Wallet'}
      </button>
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          right: '0',
          backgroundColor: '#1a1a1a',
          border: '1px solid #646cff',
          borderRadius: '8px',
          padding: '8px',
          marginTop: '8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          minWidth: '200px'
        }}>
          {connectors.map((connector) => (
            <button
              key={connector.name}
              onClick={() => {
                connect({ connector });
                setIsOpen(false);
              }}
              style={{
                width: '100%',
                textAlign: 'left'
              }}
            >
              {connector.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default WalletConnectButton;
