---
title: SignAllTransaction
sidebar_label: "SignAllTransaction"
sidebar_position: 5
slug: /solana/signAllTransactions
---
# Solana Sign All Transaction

## Sign All Transaction Example

```typescript
import { Web3Kit, ChainType } from "@tokenup/web3kit";

interface ISignTransactionRes {
  signature: string;
}

function signTransaction(transactions: string[]) {
  const web3Kit = new Web3Kit();
  const serRes = (await web3Kit.request({
    chainType: ChainType.Solana,
    methodName: "signAllTransactions",
    params: {
      transactions,
    },
  })) as ISignTransactionRes;
}
```

## Request Parameters

```typescript
{
    chainType: ChainType.Solana,
    methodName: "signAllTransactions",
    params: {
        transactions, // Transaction contents, in base58 format
    },
}
```

## Return Value

```typescript
{
    transaction: '', // Signed transaction, in base58 format
}
```
