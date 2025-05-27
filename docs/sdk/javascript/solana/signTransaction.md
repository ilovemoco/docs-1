---
title: SignTransaction
sidebar_label: "SignTransaction"
sidebar_position: 4
slug: /solana/signTransaction
---
# Solana Sign Transaction

## Sign Transaction Example

```typescript
import { Web3Kit, ChainType } from "@tokenup/web3kit";

interface ISignTransactionRes {
  signature: string;
}

function signTransaction(transaction: string) {
  const web3Kit = new Web3Kit();
  const serRes = (await web3Kit.request({
    chainType: ChainType.Solana,
    methodName: "signTransaction",
    params: {
      transaction,
    },
  })) as ISignTransactionRes;
}
```

## Request Parameters

```typescript
{
    chainType: ChainType.Solana,
    methodName: "signTransaction",
    params: {
        transaction, // Transaction content, in base58 format
    },
}
```

## Return Value

```typescript
{
    transaction: '', // Signed transaction, in base58 format
}
```
