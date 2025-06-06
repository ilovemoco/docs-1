---
title: Decentralized Wallet?
sidebar_label: "Decentralized Wallet"
sidebar_position: 2

---
# What is a decentralized wallet?
Decentralized Wallet is a core tool in the blockchain ecosystem. Users can fully control their private keys and assets through it without relying on third-party institutions.

## Classification
### Classification by storage method
**Hot wallet**

    Features: Use online, convenient but less secure
    Applicable scenarios: daily transactions, small storage
    Common forms:
    Web wallet (such as MetaMask browser plug-in)
    Mobile wallet (such as Trust Wallet, imToken)
    Desktop wallet (such as Electrum)
**Cold wallet**

    Features: Offline storage of private keys, high security
    Applicable scenarios: Long-term storage of large assets
    Common forms:
    Hardware wallet (such as Ledger, Trezor)
    Paper wallet (print private keys on paper)
    Mnemonic steel plate (such as Cryptosteel)
### Classification by technical architecture
**Hierarchical deterministic wallet**

    Features: Unlimited sub-addresses derived from mnemonics
    Advantages: Back up once to manage all addresses
    Representative products: MetaMask, Ledger (support BIP39/BIP44 protocol)

**Multi-signature wallet**

    Features: Multiple private keys are required to jointly authorize transactions
    Advantages: prevent single point failure, suitable for team asset management
    Representative solutions:
    Gnosis Safe
    Bitcoin's 2-of-3 multi-signature

**Smart contract wallet**

    Features: manage assets through on-chain contracts
    Advantages: support advanced features such as social recovery and transaction restrictions
    Representative projects:
    Ethereum's Argent
    StarkNet's Braavos

### Classification by chain support range

| Type | Features | Representative products |
|:---------------|:--------------|:--------------|
| Single-chain wallet | Only supports one blockchain | Bitcoin Core |
| Multi-chain wallet | Supports multiple chains but needs to be managed separately | Exodus |
| Full-chain wallet | Manage multi-chain assets through a unified interface | Rabby, OKX Wallet |

## Selection suggestions

**Ordinary users:** MetaMask (hot wallet) + Ledger (cold wallet) combination

**High-frequency traders:** Rabby and other full-chain wallets + Hardware wallet authorization

**Institutional users:** Gnosis Safe multi-signature + MPC solution

## Safety precautions

    Always back up your mnemonics (offline storage)

    Buy official hardware wallets

    Be wary of phishing websites (verify contract addresses)

    Test small amounts before transferring large amounts

The core value of decentralized wallets is "Not your keys, not your coins". When choosing, you need to weigh convenience and security.