import { useAppKit, useAppKitAccount } from '@reown/appkit/react'
import { useMemo, useState } from 'react'

const stats = [
  { label: 'TVL', value: '$2.8B' },
  { label: 'Active Vaults', value: '42,180' },
  { label: 'Avg. APY', value: '12.4%' },
  { label: 'Security Score', value: '98.7' }
]

const marketCards = [
  {
    title: 'Stable Yield',
    apy: '9.4%',
    risk: 'Low risk',
    description: 'Stablecoin lending and treasury deployment with daily yield distribution.'
  },
  {
    title: 'DeFi Momentum',
    apy: '14.8%',
    risk: 'Medium risk',
    description: 'Automated rotation across liquid staking, lending, and protocol incentives.'
  },
  {
    title: 'AI Strategy',
    apy: '18.6%',
    risk: 'High growth',
    description: 'Adaptive yield harvesting aligned to protocol momentum and market structure.'
  }
]

const plans = [
  { id: 'vault-lite', name: 'Vault Lite', apy: 8.2, min: 100, duration: '7 days' },
  { id: 'vault-plus', name: 'Vault Plus', apy: 12.4, min: 500, duration: '30 days' },
  { id: 'vault-pro', name: 'Vault Pro', apy: 17.9, min: 1500, duration: '90 days' }
]

const features = [
  'Cross-chain execution with wallet-first UX',
  'Live analytics, treasury visibility, and payout control',
  'Institutional-grade automation and security review',
  'Seamless onboarding for both retail and treasury access'
]

const formatAddress = (address: string) => `${address.slice(0, 6)}...${address.slice(-4)}`

export default function App() {
  const { open } = useAppKit()
  const { address, isConnected } = useAppKitAccount()
  const [selectedPlan, setSelectedPlan] = useState('vault-plus')
  const [amount, setAmount] = useState('2500')
  const [days, setDays] = useState('30')
  const [status, setStatus] = useState('Ready to deploy')

  const plan = plans.find((item) => item.id === selectedPlan) ?? plans[1]

  const projectedYield = useMemo(() => {
    const principal = Number(amount) || 0
    const apy = plan.apy
    const durationDays = Number(days) || 1
    const annualized = (principal * apy * durationDays) / 365 / 100
    return annualized.toFixed(2)
  }, [amount, days, plan])

  const handleDeposit = () => {
    if (!Number(amount) || Number(amount) < plan.min) {
      setStatus(`Minimum deposit for ${plan.name} is $${plan.min}`)
      return
    }

    if (!isConnected) {
      open()
      setStatus('Wallet connection required to continue')
      return
    }

    setStatus(`Prepared ${plan.name} deposit of $${amount} for ${days} days`)
  }

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">V</div>
          <span>VaultX</span>
        </div>

        <nav className="nav" aria-label="Main navigation">
          <button type="button">Overview</button>
          <button type="button">Markets</button>
          <button type="button">Strategies</button>
          <button type="button">Security</button>
        </nav>

        <div className="header-actions">
          <button type="button" className="ghost-button">Explore</button>
          <button type="button" className="primary-button" onClick={() => open()}>
            {isConnected ? 'Wallet Open' : 'Connect Wallet'}
          </button>
        </div>
      </header>

      <main>
        <section className="hero-card">
          <div className="hero-copy">
            <p className="eyebrow">Powered by Abstract</p>
            <h1>Yield strategy infrastructure for modern digital capital.</h1>
            <p className="subtitle">
              VaultX brings institutional-grade crypto yield, secure wallet access, and
              transparent portfolio execution into one elegant platform.
            </p>

            <div className="cta-row">
              <button type="button" className="primary-button" onClick={() => open()}>
                {isConnected ? 'Open Wallet' : 'Connect Wallet'}
              </button>
              <button type="button" className="secondary-button">
                View Markets
              </button>
            </div>

            {isConnected && address && (
              <div className="wallet-box">
                <span>Connected wallet</span>
                <strong>{formatAddress(address)}</strong>
              </div>
            )}
          </div>

          <div className="hero-panel">
            <div className="mini-card success-card">
              <span>Portfolio value</span>
              <strong>$428,640</strong>
              <small>+12.8% this month</small>
            </div>

            <div className="mini-card">
              <span>Best strategy</span>
              <strong>Vault Plus</strong>
              <small>12.4% projected APY</small>
            </div>

            <div className="performance-ring">
              <div className="ring-inner">
                <strong>91%</strong>
                <span>Risk aligned</span>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-row" aria-label="VaultX platform statistics">
          {stats.map((item) => (
            <div key={item.label} className="stat-item">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </section>

        <section className="section-block">
          <div className="section-header">
            <p className="eyebrow">Market intelligence</p>
            <h2>Choose a vault strategy</h2>
          </div>

          <div className="market-grid">
            {marketCards.map((card) => (
              <article key={card.title} className="market-card">
                <div className="card-topline">
                  <span className="badge">{card.risk}</span>
                  <strong>{card.apy}</strong>
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <button type="button" className="link-button" onClick={() => setSelectedPlan('vault-plus')}>
                  Select strategy
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block plan-layout">
          <div className="section-header">
            <p className="eyebrow">Vault plans</p>
            <h2>Flexible options for every risk profile</h2>
          </div>

          <div className="plan-grid">
            {plans.map((item) => (
              <button
                type="button"
                key={item.id}
                className={`plan-card ${selectedPlan === item.id ? 'active' : ''}`}
                onClick={() => setSelectedPlan(item.id)}
              >
                <span className="plan-name">{item.name}</span>
                <strong>{item.apy}%</strong>
                <small>{item.duration}</small>
                <em>Min deposit ${item.min}</em>
              </button>
            ))}
          </div>

          <div className="calculator-panel">
            <div className="calculator-header">
              <div>
                <p className="eyebrow">Projection</p>
                <h3>{plan.name}</h3>
              </div>
              <span>{plan.apy}% APY</span>
            </div>

            <div className="calculator-form">
              <label>
                Deposit amount
                <input
                  type="number"
                  min={plan.min}
                  value={amount}
                  onChange={(event) => setAmount(event.target.value)}
                />
              </label>

              <label>
                Duration
                <select value={days} onChange={(event) => setDays(event.target.value)}>
                  <option value="7">7 days</option>
                  <option value="30">30 days</option>
                  <option value="60">60 days</option>
                  <option value="90">90 days</option>
                </select>
              </label>
            </div>

            <div className="yield-row">
              <div>
                <span>Projected yield</span>
                <strong>${projectedYield}</strong>
              </div>
              <button type="button" className="primary-button" onClick={handleDeposit}>
                {isConnected ? 'Deposit Funds' : 'Connect to Deposit'}
              </button>
            </div>

            <p className="status-line">{status}</p>
          </div>
        </section>

        <section className="section-block security-block">
          <div className="section-header">
            <p className="eyebrow">Security + compliance</p>
            <h2>Transparent infrastructure, trusted execution.</h2>
          </div>

          <div className="security-grid">
            <div className="security-panel">
              <ul>
                {features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="metric-panel">
              <div>
                <span>Audit coverage</span>
                <strong>12 protocols</strong>
              </div>
              <div>
                <span>Response SLA</span>
                <strong>6 min</strong>
              </div>
              <div>
                <span>Withdrawals</span>
                <strong>24/7</strong>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
