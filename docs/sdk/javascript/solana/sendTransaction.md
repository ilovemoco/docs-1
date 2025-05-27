---
title: SignAndSendTransaction
sidebar_label: "SignAndSendTransaction"
sidebar_position: 6
slug: /solana/sendTransaction
---
# Solana Send Transaction

## Send Transaction Example

```typescript
import { Web3Kit, ChainType } from "@tokenup/web3kit";

interface ISignAndSendTransactionRes {
  signature: string;
}

function signAndSendTransaction(transaction: string) {
  const web3Kit = new Web3Kit();
  const serRes = (await web3Kit.request({
    chainType: ChainType.Solana,
    methodName: "signAndSendTransaction",
    params: {
      transaction,
    },
  })) as ISignAndSendTransactionRes;
}
```

## Request Parameters

```typescript
{
    chainType: ChainType.Solana,
    methodName: "signAndSendTransaction",
    params: {
        transaction, // Serialized transaction content, in base58 format
    },
}
```

## Return Value

```typescript
{
    signature: '', // Result after sending
}
```
