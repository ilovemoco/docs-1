---
title: Sign Transaction
sidebar_label: "Sign Transaction"
sidebar_position: 5
slug: /evm/signTransaction
---
# EVM Sign Transaction

## Sign Transaction Example

Sign transaction need to distinguish between two types of transactions: `EIP-1559` has `Legacy`.

```typescript
import { Web3Kit, ChainType } from "@tokenup/web3kit";

type IConnectRes = string[];

// EIP-1559 Sign Transaction Example
async function connect() {
  const web3Kit = new Web3Kit();
  const serRes: IConnectRes = await web3Kit.request({
    chainType: ChainType.EVM,
    methodName: "eht_signTransaction",
    params: [
      {
        type: "0x2",
        nonce: "0x1",
        to: "0x0c54fccd2e384b4bb6f2e405bf5cbc15a017aafb",
        from: "0x660265edc169bab511a40c0e049cc1e33774443d",
        value: "0x0",
        data: "0x",
        gasLimit: "0x5208",
        maxPriorityFeePerGas: "0x3b9aca00",
        maxFeePerGas: "0x2540be400",
        accessList: [],
        chainId: "0xaa36a7",
      },
    ],
  });
}

// Legacy Sign Transaction Example
async function connect() {
  const web3Kit = new Web3Kit();
  const serRes: IConnectRes = await web3Kit.request({
    chainType: ChainType.EVM,
    methodName: "eht_signTransaction",
    params: [
      {
        type: "0x0",
        nonce: "0x0",
        to: "0x0c54fccd2e384b4bb6f2e405bf5cbc15a017aafb",
        from: "0x660265edc169bab511a40c0e049cc1e33774443d",
        value: "0x0",
        data: "0x",
        gasLimit: "0x5208",
        gasPrice: "0x2540be400",
        chainId: "0xaa36a7",
      },
    ],
  });
}
```

## Request Parameters

```typescript
{
  chainType: ChainType.EVM,
  methodName: "eht_signTransaction",
  params: [
    {
        type: string // Transaction type. 0x2 is EIP-1559, 0x0 is Legacy
        nonce: string // Anti-replay parameter.
        to: string // Recipient address, or null if this is a contract creation transaction.
        from: string // Sender address.
        value: string // Value to be transferred, in wei.
        data: string // Compiled code of a contract OR hash of the invoked method signature and encoded parameters.
        gasLimit: string // Gas provided by the sender.
        gasPrice: string // (Optional) Gas price, in wei, provided by the sender.
        maxPriorityFeePerGas: string // (Optional) Maximum fee, in wei, the sender is willing to pay per gas above the base fee.
        maxFeePerGas:string // (Optional) Maximum total fee (base fee + priority fee), in wei, the sender is willing to pay per gas.
        accessList: object[] // (Optional) List of addresses and storage keys the transaction plans to access.
        chainId: string // Chain ID.
    }
  ]
};
```

## Return Value

```typescript{4}
{
  "v": "0x1",
  "r": "0x51991c5099327d3c7eaa745de60c52a93555e5cbc418eb9b405fe92d986dee08",
  "s": "0x65b1d20a39360c31de69f872244e23a3549b702e11bc7d8eb3586812ac62be8d"
}
```
