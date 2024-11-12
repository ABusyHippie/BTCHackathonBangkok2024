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

  // Add new state for network APYs
  const networkAPYs = React.useMemo(() => ({
    bob: {
      apy: (Math.random() * 5 + 2).toFixed(2),
      tvl: (Math.random() * 1000 + 100).toFixed(2)
    },
    fractal: {
      apy: (Math.random() * 8 + 4).toFixed(2),
      tvl: (Math.random() * 2000 + 500).toFixed(2)
    },
    rootstock: {
      apy: (Math.random() * 10 + 3).toFixed(2),
      tvl: (Math.random() * 3000 + 1000).toFixed(2)
    },
    rooch: {
      apy: (Math.random() * 6 + 3).toFixed(2),
      tvl: (Math.random() * 1500 + 200).toFixed(2)
    },
    goat: {
      apy: (Math.random() * 7 + 2).toFixed(2),
      tvl: (Math.random() * 1200 + 300).toFixed(2)
    },
    citrea: {
      apy: (Math.random() * 9 + 1).toFixed(2),
      tvl: (Math.random() * 2500 + 400).toFixed(2)
    },
    glittr: {
      apy: (Math.random() * 8 + 2).toFixed(2),
      tvl: (Math.random() * 2000 + 300).toFixed(2)
    },
    starkware: {
      apy: (Math.random() * 7 + 3).toFixed(2),
      tvl: (Math.random() * 2500 + 600).toFixed(2)
    },
    threshold: {
      apy: (Math.random() * 9 + 2).toFixed(2),
      tvl: (Math.random() * 1800 + 400).toFixed(2)
    }
  }), []);

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
          
          <div className="networks-list">
            <h3>Available Networks</h3>
            <div className="network-items">
              <div className="network-header">
                <span className="header-logo"></span>
                <span className="header-name">Network</span>
                <span className="header-stats">
                  <span className="header-tvl">TVL</span>
                  <span className="header-apy">Yield</span>
                </span>
              </div>
              <div className="network-item">
                <img src="https://www.bitcoinlayers.org/_next/image?url=%2Flogos%2Fbob.png&w=48&q=75" alt="BOB" />
                <span className="network-name">BOB</span>
                <span className="network-stats">
                  <span className="network-tvl">{networkAPYs.bob.tvl} BTC</span>
                  <span className="network-apy">{networkAPYs.bob.apy}% APY</span>
                </span>
              </div>
              <div className="network-item">
                <img src="https://www.bitcoinlayers.org/_next/image?url=%2Flogos%2Ffractal.png&w=48&q=75" alt="Fractal" />
                <span className="network-name">Fractal</span>
                <span className="network-stats">
                  <span className="network-tvl">{networkAPYs.fractal.tvl} BTC</span>
                  <span className="network-apy">{networkAPYs.fractal.apy}% APY</span>
                </span>
              </div>
              <div className="network-item">
                <img src="https://www.bitcoinlayers.org/_next/image?url=%2Flogos%2Frootstock.png&w=48&q=75" alt="Rootstock" />
                <span className="network-name">Rootstock</span>
                <span className="network-stats">
                  <span className="network-tvl">{networkAPYs.rootstock.tvl} BTC</span>
                  <span className="network-apy">{networkAPYs.rootstock.apy}% APY</span>
                </span>
              </div>
              <div className="network-item">
                <img src="https://pbs.twimg.com/profile_images/1846897640677822470/8g6-quYE_400x400.jpg" alt="Rooch" />
                <span className="network-name">Rooch</span>
                <span className="network-stats">
                  <span className="network-tvl">{networkAPYs.rooch.tvl} BTC</span>
                  <span className="network-apy">{networkAPYs.rooch.apy}% APY</span>
                </span>
              </div>
              <div className="network-item">
                <img src="https://www.bitcoinlayers.org/_next/image?url=%2Flogos%2Fgoat.png&w=48&q=75" alt="GOAT" />
                <span className="network-name">GOAT</span>
                <span className="network-stats">
                  <span className="network-tvl">{networkAPYs.goat.tvl} BTC</span>
                  <span className="network-apy">{networkAPYs.goat.apy}% APY</span>
                </span>
              </div>
              <div className="network-item">
                <img src="https://www.bitcoinlayers.org/_next/image?url=%2Flogos%2Fcitrea.png&w=48&q=75" alt="Citrea" />
                <span className="network-name">Citrea</span>
                <span className="network-stats">
                  <span className="network-tvl">{networkAPYs.citrea.tvl} BTC</span>
                  <span className="network-apy">{networkAPYs.citrea.apy}% APY</span>
                </span>
              </div>
              <div className="network-item">
                <img src="https://framerusercontent.com/images/RYTrlnuFGO3hRklzJFLRy5PpSB4.png?scale-down-to=1024" alt="Glittr" />
                <span className="network-name">Glittr</span>
                <span className="network-stats">
                  <span className="network-tvl">{networkAPYs.glittr.tvl} BTC</span>
                  <span className="network-apy">{networkAPYs.glittr.apy}% APY</span>
                </span>
              </div>
              <div className="network-item">
                <img src="https://cryptocurrencyjobs.co/startups/assets/logos/starkware.jpg" alt="Starkware" />
                <span className="network-name">Starkware</span>
                <span className="network-stats">
                  <span className="network-tvl">{networkAPYs.starkware.tvl} BTC</span>
                  <span className="network-apy">{networkAPYs.starkware.apy}% APY</span>
                </span>
              </div>
              <div className="network-item">
                <img src="https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/publication/logo/ae108083-ce95-406a-8df1-fabff83b90f3/avatar-threshold-purple.png" alt="Threshold" />
                <span className="network-name">Threshold</span>
                <span className="network-stats">
                  <span className="network-tvl">{networkAPYs.threshold.tvl} BTC</span>
                  <span className="network-apy">{networkAPYs.threshold.apy}% APY</span>
                </span>
              </div>
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

        .networks-list {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid rgba(100, 108, 255, 0.2);
        }

        .networks-list h3 {
          color: #646cff;
          margin-bottom: 20px;
        }

        .network-items {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .network-item {
          display: flex;
          align-items: center;
          padding: 15px 20px;
          background: rgba(100, 108, 255, 0.1);
          border-radius: 8px;
          transition: background-color 0.2s;
        }

        .network-item:hover {
          background: rgba(100, 108, 255, 0.15);
        }

        .network-item img {
          width: 32px;
          height: 32px;
          margin-right: 15px;
        }

        .network-name {
          flex: 1;
          font-weight: 500;
          min-width: 100px;
        }

        .network-stats {
          display: flex;
          gap: 20px;
          color: white;
        }

        .network-tvl, .network-apy {
          min-width: 120px;
          text-align: right;
        }

        .network-header {
          display: flex;
          align-items: center;
          padding: 0 20px 10px;
          border-bottom: 1px solid rgba(100, 108, 255, 0.2);
          color: white;
          font-weight: 700;
        }

        .header-logo {
          width: 32px;
          margin-right: 15px;
        }

        .header-name {
          flex: 1;
          min-width: 100px;
        }

        .header-stats {
          display: flex;
          gap: 20px;
        }

        .header-tvl, .header-apy {
          min-width: 120px;
          text-align: right;
        }
      `}</style>
    </div>
  );
};

export default YieldModule;