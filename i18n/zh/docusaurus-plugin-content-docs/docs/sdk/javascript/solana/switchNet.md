---
title: Switch Net
sidebar_label: "Switch Net"
sidebar_position: 7
slug: /solana/switchNet
---
# Sol SwitchNet

## SwitchNet Example

```typescript
import { Web3Kit, ChainType, SolNetType } from "@tokenup/web3kit";

interface IConnectRes {
  address: string;
}

async function connect() {
  const web3Kit = new Web3Kit();
  const serRes: IConnectRes = await web3Kit.request({
    chainType: ChainType.SOL,
    methodName: "switchNet",
    params: {
      type: SolNetType.MAIN,
    },
  });
}
```

## Request Parameters

```typescript
{
  chainType: ChainType.SOL,
  methodName: "switchNet",
  params: {
    type: SolNetType.MAIN,
  },
};
```

## Return Value

```typescript{4}
null
```
