import React from 'react';
import './YieldModule.css';

// Type definitions
type Network = {
  name: string;
  imageUrl: string;
  alt: string;
};

type NetworkData = {
  [key: string]: {
    apy: string;
    tvl: string;
  };
};

const YieldModule: React.FC = () => {
  // States
  const [riskLevel, setRiskLevel] = React.useState('low');
  const [stakeAmount, setStakeAmount] = React.useState('');
  const [isStaking, setIsStaking] = React.useState(false);
  const [stakeSuccess, setStakeSuccess] = React.useState(false);

  // Memoized values
  const supplyBalance = React.useMemo(() => 
    (Math.random() * 10000).toFixed(2),
    []
  );

  // Constants
  const NETWORKS: Network[] = [
    { name: 'bob', imageUrl: 'https://www.bitcoinlayers.org/_next/image?url=%2Flogos%2Fbob.png&w=48&q=75', alt: 'BOB' },
    { name: 'fractal', imageUrl: 'https://www.bitcoinlayers.org/_next/image?url=%2Flogos%2Ffractal.png&w=48&q=75', alt: 'Fractal' },
    { name: 'rootstock', imageUrl: 'https://www.bitcoinlayers.org/_next/image?url=%2Flogos%2Frootstock.png&w=48&q=75', alt: 'Rootstock' },
    { name: 'rooch', imageUrl: 'https://pbs.twimg.com/profile_images/1846897640677822470/8g6-quYE_400x400.jpg', alt: 'Rooch' },
    { name: 'goat', imageUrl: 'https://www.bitcoinlayers.org/_next/image?url=%2Flogos%2Fgoat.png&w=48&q=75', alt: 'GOAT' },
    { name: 'citrea', imageUrl: 'https://www.bitcoinlayers.org/_next/image?url=%2Flogos%2Fcitrea.png&w=48&q=75', alt: 'Citrea' },
    { name: 'glittr', imageUrl: 'https://framerusercontent.com/images/RYTrlnuFGO3hRklzJFLRy5PpSB4.png?scale-down-to=1024', alt: 'Glittr' },
    { name: 'starkware', imageUrl: 'https://cryptocurrencyjobs.co/startups/assets/logos/starkware.jpg', alt: 'Starkware' },
    { name: 'threshold', imageUrl: 'https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/publication/logo/ae108083-ce95-406a-8df1-fabff83b90f3/avatar-threshold-purple.png', alt: 'Threshold' },
  ];

  const RISK_LEVELS = [
    { value: 'low', label: 'Low Risk 😍', apy: '3.2' },
    { value: 'medium', label: 'Medium Risk 🙃', apy: '6.5' },
    { value: 'high', label: 'High Risk 😖', apy: '12.8' },
  ];

  // Simplified network APYs generation
  const networkAPYs = React.useMemo<NetworkData>(() => 
    Object.fromEntries(
      NETWORKS.map(({ name }) => [
        name,
        {
          apy: (Math.random() * 5 + 2).toFixed(2),
          tvl: (Math.random() * 1000 + 100).toFixed(2)
        }
      ])
    ),
    []
  );

  const getAPY = () => RISK_LEVELS.find(r => r.value === riskLevel)?.apy || '3.2';

  const handleStake = () => {
    setIsStaking(true);
    setTimeout(() => {
      setIsStaking(false);
      setStakeSuccess(true);
    }, 1000);
  };

  // Reusable components
  const NetworkItem = ({ network }: { network: Network }) => (
    <div className="network-item">
      <img src={network.imageUrl} alt={network.alt} />
      <span className="network-name">{network.alt}</span>
      <span className="network-stats">
        <span className="network-tvl">{networkAPYs[network.name].tvl} BTC</span>
        <span className="network-apy">{networkAPYs[network.name].apy}% APY</span>
      </span>
    </div>
  );

  const StatItem = ({ title, value }: { title: string; value: string }) => (
    <div className="stat-item">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );

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
            <StatItem title="Supply Balance" value={`${supplyBalance}`} />
            <StatItem title="Net APY" value={`${getAPY()}%`} />
            <div className="stat-item">
              <h3>Rewards</h3>
              <p>10 DIAMONDS 💎</p>
            </div>
          </div>
          
          <div className="staking-module">
            {!stakeSuccess ? (
              <>
                <div className="staking-input">
                  <input
                    type="number"
                    placeholder="Enter BTC amount"
                    value={stakeAmount}
                    onChange={(e) => setStakeAmount(e.target.value)}
                    disabled={isStaking}
                  />
                  <button 
                    onClick={handleStake}
                    disabled={!stakeAmount || isStaking}
                  >
                    {isStaking ? 'Staking...' : 'Stake'}
                  </button>
                </div>
              </>
            ) : (
              <div className="staking-success">
                <span>✅ Successfully staked {stakeAmount} BTC!</span>
              </div>
            )}
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
              {NETWORKS.map(network => (
                <NetworkItem key={network.name} network={network} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YieldModule;