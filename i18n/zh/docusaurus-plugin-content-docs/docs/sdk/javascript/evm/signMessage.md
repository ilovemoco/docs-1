---
title: Sign Message
sidebar_label: "Sign Message"
sidebar_position: 3
slug: /evm/signMessage
---
# EVM Sign Message

## Sign Message Example

```typescript
import { Web3Kit, ChainType } from "@tokenup/web3kit";

type IConnectRes = string[];

async function connect() {
  const web3Kit = new Web3Kit();
  const serRes: IConnectRes = await web3Kit.request({
    chainType: ChainType.EVM,
    methodName: "personal_sign",
    params: [
      "0x616263", // message in hex format
      "0x4248ecfa549620e4f7f20834c6ef25e4c2ad1578", // wallet address
    ],
  });
}
```

## Request Parameters

```typescript
{
  chainType: ChainType.EVM,
  methodName: "personal_sign",
  params: [
    "", // message in hex format
    "" // wallet address
  ]
};
```

## Return Value

```typescript{4}
'0xadc....xyz', // signature result
```
