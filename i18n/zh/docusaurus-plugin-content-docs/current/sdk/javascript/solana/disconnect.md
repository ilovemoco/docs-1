---
title: Disconnect
sidebar_label: "Disconnect"
sidebar_position: 8
slug: /solana/disconnect
---
# Solana Disconnect

## Disconnect Example

```typescript
import { Web3Kit, ChainType } from "@tokenup/web3kit";

async function connect() {
  const web3Kit = new Web3Kit();
  const serRes: boolean = await web3Kit.request({
    chainType: ChainType.Solana,
    methodName: "disconnect",
  });
}
```

## Request Parameters

```typescript
{
  chainType: ChainType.Solana,
  methodName: "disconnect",
};
```
