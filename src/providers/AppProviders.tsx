import { createAppKit } from '@reown/appkit/react'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { abstractTestnet } from '@reown/appkit/networks'
import { abstractWalletConnector } from '@abstract-foundation/agw-react/connectors'

const projectId = import.meta.env.VITE_REOWN_PROJECT_ID || 'YOUR_PROJECT_ID'

const metadata = {
  name: 'VaultX',
  description: 'VaultX Web3 platform',
  url: 'https://dq9xrw8ftg-lab.github.io/vaultx.com/',
  icons: ['https://dq9xrw8ftg-lab.github.io/vaultx.com/favicon.svg']
}

const connectors = [abstractWalletConnector()]

export const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks: [abstractTestnet],
  connectors
})

export const wagmiConfig = wagmiAdapter.wagmiConfig

createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [abstractTestnet],
  metadata
})

export function AppProviders({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient()

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}
