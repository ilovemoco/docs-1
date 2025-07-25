---
title: Connect Wallet
sidebar_label: "Connect Wallet"
sidebar_position: 1
slug: /evm/connect
---
# EVM Connect Wallet

## Connection Example

```typescript
import { Web3Kit, ChainType } from "@tokenup/web3kit";

type IConnectRes = string[];

async function connect() {
  const web3Kit = new Web3Kit();
  const serRes: IConnectRes = await web3Kit.request({
    chainType: ChainType.EVM,
    methodName: "eth_requestAccounts",
    params: [
      {
        chainId: "0x1", // Specify the chainId of the connection
      },
    ],
  });
}
```

## Request Parameters

```typescript
{
  chainType: ChainType.EVM,
  methodName: "eth_requestAccounts",
  params: [
    {
      chainId: "0x1", // Specify the chainId of the connection
    },
  ],
};
```

## Return Value

```typescript{4}
['adc....xyz', '...'], // Authorized user wallet addresses
```

## @tokenup/walletkit

A powerful multi-chain, multi-wallet connection component supporting EVM, Solana, Tron, and BTC blockchains.

## Features

- Supports multiple blockchain networks: EVM, Solana, Tron, BTC
- Supports mainstream wallet connectors
- Unified API interface
- Theme switching and multilingual (i18n) support
- Built-in multi-chain transaction and contract interaction
- Supports batch contract calls (multicall)
- Responsive design for both mobile and desktop

## Installation

```bash
npm install @tokenup/walletkit
# or
yarn add @tokenup/walletkit
# or
pnpm add @tokenup/walletkit
```

## Quick Start

### Basic Usage

```tsx
import { WalletKitProvider, ConnectButton, useWalletKit } from '@tokenup/walletkit';

function App() {
  return (
    <WalletKitProvider>
      <YourApp />
    </WalletKitProvider>
  );
}

function YourApp() {
  const { connect, walletAddress, currentChainType } = useWalletKit();

  return (
    <div>
      <ConnectButton />
      {walletAddress ? (
        <div>Wallet connected: {walletAddress}</div>
      ) : (
        <button onClick={connect}>Connect Wallet</button>
      )}
      <div>Current chain type: {currentChainType}</div>
    </div>
  );
}
```

> ⚠️ If you encounter module import errors, make sure `esModuleInterop` and `allowSyntheticDefaultImports` are set to `true` in your tsconfig.json, or use dynamic import as a workaround.

## API Documentation

### Components

#### WalletKitProvider

Provides wallet connection context. Must wrap your app at the top level.

```tsx
<WalletKitProvider
  language="en" // Language: supports zh, en, ja, ko, ms, th, vi, zhTW
  theme="darkMode" // Theme: supports darkMode, lightMode
  defaultChainType={ChainType.EVM}
  defaultChainId={1}
  reconnect={true}
  connectButtonSlots={[]}
  supportWallets={[]}
  customEvmNetworks={[]}
  showNetwork={true}
  allowSwitchWallet={true}
>
  <YourApp />
</WalletKitProvider>
```

##### Props

| Name                | Type                                              | Default         | Description                  |
|---------------------|---------------------------------------------------|-----------------|------------------------------|
| language            | 'zh'\|'en'\|'ja'\|'ko'\|'ms'\|'th'\|'vi'\|'zhTW' | 'zh'            | UI language                  |
| theme               | 'darkMode'\|'lightMode'                           | 'lightMode'     | Theme                        |
| defaultChainType    | ChainType                                         | ChainType.EVM   | Default chain type           |
| defaultChainId      | number                                            | 1               | Default chain ID             |
| reconnect           | boolean                                           | true            | Auto reconnect last wallet   |
| connectButtonSlots  | ReactNode[]                                       | []              | Custom slots for connect btn |
| supportWallets      | SupportWallet[]                                   | all supported   | Supported wallet types       |
| customEvmNetworks   | NetworkInfo[]                                     | []              | Custom EVM network list      |
| showNetwork         | boolean                                           | false           | Show network switch          |
| allowSwitchWallet   | boolean                                           | false           | Allow switching wallet       |

- See below for `ChainType`, `SupportWallet`, and `NetworkInfo` type definitions.

#### ConnectButton

Built-in wallet connect button component.

```tsx
<ConnectButton />
```

### Hooks

#### useWalletKit

Provides all wallet connection state and methods.

```tsx
const {
  connect,                // Connect wallet
  disconnect,             // Disconnect wallet
  currentChainType,       // Current chain type
  setChainType,           // Set chain type
  currentConnector,       // Current connector instance
  theme,                  // Current theme
  toggleTheme,            // Switch theme
  language,               // Current language
  setLanguage,            // Set language
  walletAddress,          // Wallet address
  currentNetwork,         // Current network info
  setCurrentNetwork,      // Set current network
  getProvider,            // Get provider
  provider,               // Provider instance
  showWalletInfo,         // Show wallet info modal
  signMessage,            // Sign message
  signTransaction,        // Sign transaction
  sendTransaction,        // Send transaction
  readContract,           // Read contract
  writeContract,          // Write contract
  multicall,              // Batch contract calls
  switchNetwork,          // Switch network
  waitForTransactionReceipt, // Wait for transaction receipt
  getSupportNets          // Get supported network list
} = useWalletKit();
```

### Main API

#### Connect & Disconnect

- `connect()`: Connect wallet, returns Promise`<Connector>`
- `disconnect()`: Disconnect wallet
- `getProvider()`: Get current provider instance

#### Chain & Network Management

- `currentChainType`: Current chain type (EVM, SOL, Tron, BTC)
- `setChainType(chainType)`: Set chain type
- `currentNetwork`: Current network info
- `setCurrentNetwork(networkId)`: Set current network
- `switchNetwork(chainId)`: Switch network
- `getSupportNets()`: Get supported network list

#### Transaction & Contract

- `signMessage(message)`: Sign message
- `signTransaction(tx)`: Sign transaction
- `sendTransaction(tx)`: Send transaction
- `readContract(params)`: Read contract data
- `writeContract(params)`: Write contract data
- `multicall(calls, option)`: Batch contract calls
- `waitForTransactionReceipt(hash, timeout?)`: Wait for transaction receipt

#### UI Related

- `theme`: Current theme
- `toggleTheme()`: Switch theme
- `language`: Current language
- `setLanguage(lang)`: Set language
- `showWalletInfo()`: Show wallet info modal

#### Advanced Usage

- `readContractRpc(params)`: Read contract directly via RPC (no wallet connection required)
- `multicallRpc(calls, option)`: Batch read contracts via RPC
- `evmSilentConnect(walletType, chainId)`: EVM silent connect
- `getWalletKit()`: Get global walletKit instance (for non-React usage)

## Type Definitions

### Theme Type

- `Theme`: 'darkMode' | 'lightMode'

### Language Type

- `Locals`: 'zh' | 'en' | 'ja' | 'ko' | 'ms' | 'th' | 'vi' | 'zhTW'

### Chain Type

```ts
import { ChainType } from '@tokenup/walletkit';
// ChainType.EVM    // EVM-compatible chains
// ChainType.SOL    // Solana chain
// ChainType.Tron   // Tron chain
// ChainType.BTC    // Bitcoin chain
```

### Wallet Type

```ts
import { SupportWallet } from '@tokenup/walletkit';
// e.g. SupportWallet.METAMASK, SupportWallet.OKX_WALLET, etc.
```

### Network Type

```ts
import type { NetworkInfo } from '@tokenup/walletkit';
// chainId, chainName, rpcUrls, nativeCurrency, blockExplorerUrls, etc.
```

## Examples

### Switch Chain Type

```tsx
import { ChainType, useWalletKit } from '@tokenup/walletkit';

function ChainSwitcher() {
  const { setChainType, currentChainType } = useWalletKit();
  return (
    <div>
      <button onClick={() => setChainType(ChainType.EVM)}>Switch to EVM</button>
      <button onClick={() => setChainType(ChainType.SOL)}>Switch to Solana</button>
      <button onClick={() => setChainType(ChainType.Tron)}>Switch to Tron</button>
      <button onClick={() => setChainType(ChainType.BTC)}>Switch to BTC</button>
      <div>Current chain type: {currentChainType}</div>
    </div>
  );
}
```

### Switch Network

```tsx
import { useWalletKit } from '@tokenup/walletkit';

function NetworkSwitcher() {
  const { getSupportNets, switchNetwork, setCurrentNetwork, provider, currentNetwork } = useWalletKit();
  return (
    <div>
      <h3>Switch Network</h3>
      <div>
        {getSupportNets().map((net) => (
          <button
            key={net.chainId}
            onClick={async () => {
              if (provider) {
                await switchNetwork(net.chainId);
              } else {
                setCurrentNetwork(net.chainId);
              }
            }}
          >
            Switch to {net.chainName}
          </button>
        ))}
      </div>
      <div>Current network: {currentNetwork?.chainName}</div>
    </div>
  );
}
```

### Contract Interaction

```tsx
import { useWalletKit } from '@tokenup/walletkit';

function ContractInteraction() {
  const { readContract, writeContract, multicall } = useWalletKit();

  const handleReadContract = async () => {
    const result = await readContract({
      address: '0x...', // Contract address
      abi: [...], // Contract ABI
      functionName: 'balanceOf',
      args: ['0x...'] // Arguments
    });
    console.log('Read result:', result);
  };

  const handleWriteContract = async () => {
    const result = await writeContract({
      address: '0x...', // Contract address
      abi: [...], // Contract ABI
      functionName: 'transfer',
      args: ['0x...', 1000000] // Arguments
    });
    console.log('Write result:', result);
  };

  const handleMulticall = async () => {
    const result = await multicall(
      [
        {
          address: '0x...',
          abi: [...],
          functionName: 'balanceOf',
          args: ['0x...']
        },
        {
          address: '0x...',
          abi: [...],
          functionName: 'totalSupply'
        }
      ],
      {
        multicallAddress: '0x...',
        multicallAbi: [...]
      }
    );
    console.log('Batch call result:', result);
  };

  return (
    <div>
      <button onClick={handleReadContract}>Read Contract</button>
      <button onClick={handleWriteContract}>Write Contract</button>
      <button onClick={handleMulticall}>Batch Call</button>
    </div>
  );
}
```

### Direct RPC Contract Calls

```tsx
import { readContractRpc, multicallRpc } from '@tokenup/walletkit';

// Single contract read
const res = await readContractRpc({
  abi: [...],
  address: '0x...',
  functionName: 'balanceOf',
  args: ['0x...'],
  rpcUrl: 'https://rpc.xone.org/'
});

// Batch contract read
const res2 = await multicallRpc(
  [
    {
      address: '0x...',
      abi: [...],
      functionName: 'totalSupply'
    },
    {
      address: '0x...',
      abi: [...],
      functionName: 'balanceOf',
      args: ['0x...']
    }
  ],
  {
    multicallAddress: '0x...',
    multicallAbi: [...],
    rpcUrl: 'https://rpc.xone.org/'
  }
);
```

### Theme & Language (i18n)

```tsx
import { useWalletKit, supportedLanguages } from '@tokenup/walletkit';
import type { Locals } from '@tokenup/walletkit';

function ThemeAndLanguage() {
  const { theme, toggleTheme, language, setLanguage } = useWalletKit();
  return (
    <div>
      <div>Current theme: {theme}, current language: {language}</div>
      <div>
        <button onClick={() => toggleTheme()}>Switch Theme</button>
        <select
          value={language}
          onChange={e => setLanguage(e.target.value as Locals)}
        >
          {supportedLanguages.map(lng => (
            <option key={lng} value={lng}>
              {lng}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
```

> `supportedLanguages` is the built-in language list, suitable for rendering language selection options dynamically.

### Event Listening

```tsx
import { useEffect } from 'react';
import { useWalletKit } from '@tokenup/walletkit';

function EventListener() {
  const { currentConnector } = useWalletKit();
  useEffect(() => {
    const handleConnect = (address) => {
      console.log('Wallet connected:', address);
    };
    const handleChainChanged = (chainId) => {
      console.log('Chain changed:', chainId);
    };
    const handleAccountChanged = (address) => {
      console.log('Account changed:', address);
    };
    const handleDisconnect = () => {
      console.log('Wallet disconnected');
    };
    if (currentConnector) {
      currentConnector.on('connect', handleConnect);
      currentConnector.on('chainChanged', handleChainChanged);
      currentConnector.on('accountsChanged', handleAccountChanged);
      currentConnector.on('disconnect', handleDisconnect);
    }
    return () => {
      if (currentConnector) {
        currentConnector.off('connect', handleConnect);
        currentConnector.off('chainChanged', handleChainChanged);
        currentConnector.off('accountsChanged', handleAccountChanged);
        currentConnector.off('disconnect', handleDisconnect);
      }
    };
  }, [currentConnector]);
  return <div>Event listener example</div>;
}
```

## License

MIT
