import React from 'react';

const YieldModule: React.FC = () => {
  const [riskLevel, setRiskLevel] = React.useState('low');
  const supplyBalance = React.useMemo(() => 
    (Math.random() * 10000).toFixed(2),
    [] // empty dependency array means this will only run once
  );
  
  const getAPY = () => {
    switch(riskLevel) {
      case 'low': return '3.2';
      case 'medium': return '6.5';
      case 'high': return '12.8';
      default: return '3.2';
    }
  };

  return (
    <div className="yield-module">
      <div className="modules-container">
        {/* Risk Selection Module */}
        <div className="risk-module">
          <h3>Choose Your Risk Level</h3>
          <div className="risk-options">
            <label>
              <input
                type="radio"
                name="risk"
                value="low"
                checked={riskLevel === 'low'}
                onChange={(e) => setRiskLevel(e.target.value)}
              />
              Low Risk 😍
            </label>
            <label>
              <input
                type="radio"
                name="risk"
                value="medium"
                checked={riskLevel === 'medium'}
                onChange={(e) => setRiskLevel(e.target.value)}
              />
              Medium Risk 🙃
            </label>
            <label>
              <input
                type="radio"
                name="risk"
                value="high"
                checked={riskLevel === 'high'}
                onChange={(e) => setRiskLevel(e.target.value)}
              />
              High Risk 😖
            </label>
          </div>
        </div>

        {/* Stats Module */}
        <div className="stats-module">
          <div className="stats">
            <div className="stat-item">
              <h3>Supply Balance</h3>
              <p>${supplyBalance}</p>
            </div>
            <div className="stat-item">
              <h3>Net APY</h3>
              <p>{getAPY()}%</p>
            </div>
            <div className="stat-item">
              <h3>Rewards</h3>
              <p>10 DIAMONDS 💎</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .yield-module {
          padding: 20px;
          margin: 20px auto;
          max-width: 1200px;
          min-height: 70vh;
        }
        
        .modules-container {
          display: flex;
          gap: 20px;
        }

        .risk-module {
          flex: 0 0 250px;
          background-color: #1a1a1a;
          border: 1px solid #646cff;
          border-radius: 8px;
          padding: 20px;
          height: fit-content;
        }

        .risk-options {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-top: 20px;
        }

        .risk-options label {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
        }

        .stats-module {
          flex: 1;
          background-color: #1a1a1a;
          border: 1px solid #646cff;
          border-radius: 8px;
          padding: 30px;
        }

        .stats {
          display: flex;
          justify-content: space-around;
          gap: 20px;
        }

        .stat-item {
          text-align: center;
          padding: 20px;
          background: rgba(100, 108, 255, 0.1);
          border-radius: 8px;
          flex: 1;
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