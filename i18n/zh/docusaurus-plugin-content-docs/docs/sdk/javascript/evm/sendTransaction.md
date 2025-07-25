---
title: Send Transaction
sidebar_label: "Send Transaction"
sidebar_position: 4
slug: /evm/sendTransaction
---
# EVM Send Transaction

## Send Transaction Example

```typescript
import { Web3Kit, ChainType } from "@tokenup/web3kit";

type IConnectRes = string[];

async function connect() {
  const web3Kit = new Web3Kit();
  const serRes: IConnectRes = await web3Kit.request({
    chainType: ChainType.EVM,
    methodName: "eth_sendTransaction",
    params: [
        {
          // The user's active address.
          from: accounts[0],
          // Required except during contract publications.
          to: <recipient address>,
          // Only required to send ether to the recipient from the initiating external account.
          value: <value in wei to send>,
          // Customizable by the user during MetaMask confirmation.
          gasLimit: '0x5028',
          // Customizable by the user during MetaMask confirmation.
          maxPriorityFeePerGas: '0x3b9aca00',
          // Customizable by the user during MetaMask confirmation.
          maxFeePerGas: '0x2540be400',
        },
    ]
  });
}
```

## Request Parameters

```typescript
{
    chainType: ChainType.EVM,
    methodName: "eth_sendTransaction",
    params: [
        {
            // The user's active address.
            from: accounts[0],
            // Required except during contract publications.
            to: <recipient address>,
            // Only required to send ether to the recipient from the initiating external account.
            value: <value in wei to send>,
            // Customizable by the user during MetaMask confirmation.
            gasLimit: '0x5028',
            // Customizable by the user during MetaMask confirmation.
            maxPriorityFeePerGas: '0x3b9aca00',
            // Customizable by the user during MetaMask confirmation.
            maxFeePerGas: '0x2540be400',
        },
    ]
};
```

## Return Value

```typescript{4}
'0x....', // transaction hash
```
