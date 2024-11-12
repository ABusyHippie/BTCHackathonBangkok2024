import React from 'react';

const YieldModule: React.FC = () => {
  return (
    <div className="yield-module">
      <div className="yield-container">
        <h2>Yield Generation</h2>
        <p>Your Bitcoin is now earning yield on BOB!</p>
        <div className="stats">
          <div className="stat-item">
            <h3>Current APY</h3>
            <p>5.2%</p>
          </div>
          <div className="stat-item">
            <h3>Earned</h3>
            <p>0.00021 BTC</p>
          </div>
        </div>
      </div>
      <style>{`
        .yield-module {
          padding: 20px;
          margin: 20px auto;
          max-width: 600px;
          min-height: 70vh;
          display: flex;
          flex-direction: column;
        }
        
        .yield-container {
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

        .stats {
          display: flex;
          justify-content: space-around;
          margin-top: 20px;
        }

        .stat-item {
          text-align: center;
          padding: 20px;
          background: rgba(100, 108, 255, 0.1);
          border-radius: 8px;
          min-width: 150px;
        }

        .stat-item h3 {
          margin: 0;
          font-size: 1.1em;
          color: #646cff;
        }

        .stat-item p {
          margin: 10px 0 0;
          font-size: 1.2em;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default YieldModule;