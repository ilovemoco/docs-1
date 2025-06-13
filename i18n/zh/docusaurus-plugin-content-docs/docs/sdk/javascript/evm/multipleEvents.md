---
title: Multiple Events
sidebar_label: "Multiple Events"
sidebar_position: 2
slug: /evm/multipleEvents
---

# EVM Multiple Events

## Connect Wallet And Sign Message Example

```typescript
import { Web3Kit, ChainType } from "@tokenup/web3kit";

function _UTF8ToHex(s) {
  const utf8encoder = new TextEncoder();
  const rb = utf8encoder.encode(s);
  let r = "";
  for (const b of rb) {
    r += ("0" + b.toString(16)).slice(-2);
  }
  return "0x" + r;
}

// Send Connect And SignMessage
function multiple() {
  const web3Kit = new Web3Kit();
  const msg = _UTF8ToHex("Test Message");
  const response = await web3Kit.multipleRequest({
    chainType: ChainType.EVM,
    events: [
      {
        methodName: "eth_requestAccounts",
      },
      {
        methodName: "personal_sign",
        params: [msg, "0xd58...90d"],
      },
    ],
  });
}
```
