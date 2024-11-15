import React from 'react';
import DropdownMenu from './DropdownMenu';
import Gateway from './Gateway';
import { useState } from 'react';

interface GatewayModuleProps {
  onClose: () => void;
}

const GatewayModule: React.FC<GatewayModuleProps> = ({ onClose }) => {
  const [selectedToken, setSelectedToken] = useState<string | null>(null);

  return (
    <div className="gateway-module">
      <div className="gateway-container">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>BOB Gateway</h2>
        <DropdownMenu setSelectedToken={setSelectedToken} />
        <Gateway selectedToken={selectedToken} onSuccess={onClose} />
      </div>
      <style>{`
        .gateway-module {
          padding: 20px;
          margin: 20px auto;
          max-width: 600px;
          min-height: 70vh;
          display: flex;
          flex-direction: column;
        }
        
        .gateway-container {
          position: relative;
          background-color: #1a1a1a;
          border: 1px solid #646cff;
          border-radius: 8px;
          padding: 30px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 1px solid #646cff;
          background: transparent;
          color: #646cff;
          font-size: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
        }

        .close-button:hover {
          background: #646cff;
          color: white;
        }

        .gateway-container h2 {
          margin-top: 0;
          margin-bottom: 20px;
          color: #fff;
          font-size: 1.8em;
        }

        @media (max-height: 600px) {
          .gateway-module {
            min-height: 400px;
          }
        }
      `}</style>
    </div>
  );
};

export default GatewayModule;
