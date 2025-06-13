---
title: Getting Started
sidebar_label: "Getting Started"
sidebar_position: 3
slug: /api-doc
---

# Getting Started

## Access Way

Provides **<u>ESM</u>** access mode

**ESM**

```typescript{4}
import { Web3Kit } from '@tokenup/web3kit'

Web3Kit.config();
// Initialized Web3Kit, used singletons, new Web3Kit() multiple times does not waste memory
const web3Kit = new Web3Kit()
```

## Custom configuration

Web3Kit has a set of default configurations. When you need to customize the DID or loading, you can call `Web3Kit.config`.

**ESM**

```typescript{4}
import { Web3Kit } from '@tokenup/web3kit'
Web3Kit.config({
  hideEvokingButton: boolean, // if hide evoke button, default: false,
  did: {
    // Optional configurations
    container: Element, // Optional. DID container DOM, supports id and class attributes, Element type
    open: () => {}, // Optional. Callback function for opening
    close: () => {}, // Optional. Callback function for closing
  },
  loading: {
    // Optional configurations
    container: Element; // Optional. Element type
    element: Element; // Optional. Element type
    finished: () => void; // Optional. finish callback
  },
  takeover: {
    // takeover window property
    hc: boolean,
    solana: boolean,
    ethereum: boolean,
    tronLink: boolean,
    aptos: boolean,
    endless: boolean,
  }
})

```

## Manually Open TokenUp

**ESM**

```typescript{4}
import { Web3Kit } from '@tokenup/web3kit'

Web3Kit.config();

const web3Kit = new Web3Kit()
web3Kit.open()

```
