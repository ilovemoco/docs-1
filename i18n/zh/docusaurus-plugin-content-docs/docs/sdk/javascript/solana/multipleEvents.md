---
title: MultipleRequests
sidebar_label: "MultipleRequests"
sidebar_position: 2
slug: /solana/multipleEvents
---
# Solana Multiple Events

## Multiple Events Example

```typescript
import { Web3Kit, ChainType } from "@tokenup/web3kit";

// Send Connect And SignMessage
function multiple() {
  const web3Kit = new Web3Kit();
  const response = await web3Kit.multipleRequest({
    chainType: ChainType.Solana,
    events: [
      {
        methodName: "connect",
      },
      {
        methodName: "signMessage",
        params: {
          message: "", // base58
          display: "utf8",
        },
      },
    ],
  });
}
```
