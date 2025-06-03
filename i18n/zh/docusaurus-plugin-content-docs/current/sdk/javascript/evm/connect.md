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
