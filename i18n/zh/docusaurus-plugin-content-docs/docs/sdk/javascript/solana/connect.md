---
title: Connect Wallet
sidebar_label: "Connect Wallet"
sidebar_position: 1
slug: /solana/connect
---
# Solana Connect

## Connection Example

```typescript
import { Web3Kit, ChainType } from "@tokenup/web3kit";
import { web3 } from "@web3jskit/coin-solana";

interface IConnectRes {
  publicKey: web3.PublicKey;
}

async function connect() {
  const web3Kit = new Web3Kit();
  const serRes: IConnectRes = await web3Kit.request({
    chainType: ChainType.Solana,
    methodName: "connect",
  });
}
```

## Request Parameters

```typescript
{
  chainType: ChainType.Solana,
  methodName: "connect",
};
```

## Return Value

```typescript{4}
{
  publicKey, // Authorized user wallet
}
```
