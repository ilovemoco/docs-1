---
title: SignMessage
sidebar_label: "SignMessage"
sidebar_position: 3
slug: /solana/signMessage
---
# Solana Sign Message

## Sign Message Example

```typescript
import { Web3Kit, ChainType } from "@tokenup/web3kit";

interface ISignMessageRes {
  signature: string;
}

function signMessage(message: string, display?: "utf8" | "hex") {
  const web3Kit = new Web3Kit();
  const serRes = (await web3Kit.request({
    chainType: ChainType.Solana,
    methodName: "signMessage",
    params: {
      message,
      display,
    },
  })) as ISignMessageRes;
}
```

## Request Parameters

```typescript
{
    chainType: ChainType.Solana,
    methodName: "signMessage",
    params: {
        message, // Message content
        display, // Display format for user, can be "utf8" or "hex"
    },
}
```

## Return Value

```typescript
{
    signature: '', // Signature result
}
```
