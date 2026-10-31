import { useAppKit, useAppKitAccount } from '@reown/appkit/react'

export default function App() {
  const { open } = useAppKit()
  const { address, isConnected } = useAppKitAccount()

  return (
    <main className="app-shell">
      <div className="hero-card">
        <p className="eyebrow">VaultX</p>
        <h1>Web3 Investment Platform</h1>
        <p className="subtitle">
          Connect your wallet to manage your VaultX dashboard and explore the next
action-ready Abstract network experience.
        </p>

        <button className="primary-button" onClick={() => open()}>
          {isConnected ? 'Open Wallet' : 'Connect Wallet'}
        </button>

        {isConnected && address && (
          <div className="wallet-box">
            <span>Connected</span>
            <strong>{address}</strong>
          </div>
        )}
      </div>
    </main>
  )
}
