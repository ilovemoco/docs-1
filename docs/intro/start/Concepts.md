---
title: Wallet Concepts
sidebar_label: "Wallet Concepts"
sidebar_position: 3
slug: /Concepts
---
# Basic Concepts

## Wallet Address
It is an account in the blockchain ledger, usually a set of alphanumeric characters, or its corresponding QRCode. With this address or QRCode, others can send digital currency to you. Digital assets, virtual currency addresses, are like email addresses. With it, anyone can send you a letter.

## Private Key
Private key is an important encryption tool that allows users to effectively manage funds in the cryptocurrency world. As a virtual key, it can unlock digital wallets and control crypto assets. Each cryptocurrency held in the wallet is essentially associated with a corresponding private key, making it an integral part of the security paradigm.
**Owning a private key gives you full control over the assets of the corresponding account, and never disclose it**

## Mnemonic phrases
Mnemonic phrases are important tools related to private keys, designed to enhance the security and recovery capabilities of cryptocurrency wallets. Usually composed of 12, 18 or 24 words, mnemonic phrases serve as backup passwords or decryption keys when private keys are lost or wallets are set up on new devices. Mnemonic phrases provide a simple and effective backup solution. If the original device is lost or the wallet password is forgotten, the user can use the phrase to restore the wallet on a new device.
**Owning the mnemonic phrase gives you full control over the assets of the corresponding account, never disclose it**

## Tokens
Tokens are an application of blockchain technology. They do not have their own blockchain, but run on blockchains such as Ethereum that support smart contract functions. Smart contracts are computer programs that can be automatically executed when preset criteria are met. Token transactions transfer tokens from one physical location to another.

## Wallet Password
When creating a wallet on TokenUp, you need to set a password. The wallet password is mainly used to manage the wallet, such as when transferring money, you need to enter the password; when importing a wallet with a private key/mnemonic phrase, you must enter the wallet password. The password can be modified or reset. If the original password is forgotten, you can import the wallet with a private key or mnemonic phrase and set a new password at the same time.

## gas fee
The gas fee is the fee paid by users when executing transactions or operating smart contracts on the blockchain network. It is used to reward miners (or validators) for processing transactions and maintaining the normal operation of the network. Different blockchain networks have different fee structures. The following are examples of the mining fee mechanism based on the BTC public chain, EVM-compatible public chain, TRON public chain, and xone public chain.

### Bitcoin public chain mining fee
Bitcoin (BTC), as the earliest blockchain network, uses the Proof of Work (PoW) consensus mechanism. Miners package transactions by calculating a large number of mathematical problems, so the mining fee is also called the transaction fee, which is used to reward miners for transaction verification. Bitcoin's mining fee is usually based on the byte size of the transaction, not the transaction amount.

* Mining fee calculation: Mining fee = transaction size (bytes) * Per byte rate (satoshis/byte)

* Transaction speed: Users can increase the transaction confirmation speed by paying higher mining fees; miners prioritize transactions that pay higher fees.

* Network status: Bitcoin's mining fee fluctuates greatly, especially when the network is congested.

For example:

* BTC transfer: When the network is not busy, the transfer fee is about 1 to 2 US dollars; when the network is congested, it may rise to more. The transaction fee is related to the data size of the transaction. If multiple inputs are involved (such as multiple small transactions merged), the mining fee may be higher.

### Mining fee of EVM compatible public chain

EVM (Ethereum Virtual Machine) compatible public chains usually use "Gas" as the unit of transaction fee. The price of Gas is determined by the congestion of the network. Users can set the Gas price to affect the priority of the transaction. Typical EVM compatible public chains include Ethereum, BNB Chain, etc.

* Price (unit price) and the consumed Gas Limit (quantity), where the calculation formula is: Mining fee = Gas Limit * Gas ​​Price

* Transaction speed: Users can pay a higher Gas price to speed up transaction processing.

For example:

* The Gas of Ethereum (ETH) is ETH

* The Gas of BNB Chain (BSC) is BNB

* The Gas of Polygon (Pol) is Pol

### TRON mining fee

The transaction fee of the TRON network is calculated by "energy" and "bandwidth". Users can obtain free energy and bandwidth by locking TRX, or pay a certain amount of TRX to complete the transaction. TRX transfers can use the daily updated bandwidth to complete one transfer. If the bandwidth is insufficient, TRX is still required to pay for the chain.

* Bandwidth: used for ordinary TRX transfers, usually free, users can get a certain amount of free bandwidth every day.

* Energy: used to execute smart contracts and consume energy. If the user does not have enough energy, the system will automatically pay with TRX.

For example:

* The Gas of the TRON public chain can be TRX, or energy and bandwidth. TokenPocket innovatively integrates energy payment into the system. When performing transfers or DApp interactions, you can check the energy payment option, which greatly saves TRX costs.

* TokenPocket also supports the use of USDT payment. During transactions, you can complete activation, energy or bandwidth rental and other operations, which will be a very convenient user experience for users who do not have TRX or energy.

### Xone public chain mining fee

The Xone Chain Gas fee calculation follows a similar structure to Ethereum, consisting of three main parts: Gas Used, Base Fee and Priority Fee. The detailed calculation formula for the total Gas fee is as follows:

* Minimum Gas Price: min_gas_price = 0.01 Gwei

* Total Gas Fee: Gas Fee = Gas Used × (Base Fee + Priority Fee)

* Base Fee: This dynamic fee is automatically adjusted by the network to reflect the current congestion level of the blockchain. If the demand for a block is high, the base fee will increase; if the demand is low, the base fee will decrease. This adjustment mechanism ensures fair pricing and helps maintain network stability by managing congestion.

* Priority fee (prompt): The priority fee is an optional additional fee that users can add to incentivize miners to prioritize their transactions. By paying a higher priority fee, users can speed up transaction confirmation, which is particularly useful during peak network activity.

## Block Explorer
Blockchain Explorer is a search tool and a website that provides users with browsing and querying information on the blockchain.

Commonly used block explorers:

* BTC: https://mempool.space
* ETH: https://etherscan.io
* Solana: https://solscan.io
* xone:https://xscscan.com/
* Aptos: https://explorer.aptoslabs.com
* Base: https://basescan.org
* BSC: https://bscscan.com
* Cosmos: https://atomscan.com
* Near: https://nearblocks.io
* Starknet: https://starkscan.co
* Sui: https://suiscan.xyz
* Ton: https://tonscan.org
* TRON: https://tronscan.org
* xone:https://xscscan.com/