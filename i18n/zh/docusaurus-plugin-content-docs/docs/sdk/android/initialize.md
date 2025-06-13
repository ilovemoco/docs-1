---
title: Guide
sidebar_label: "Guide"
sidebar_position: 1
slug: /android/initialize
---

# Guide

## What is TokenUp Wallet SDK

The TokenUp Wallet SDK provides a streamlined gateway for users to adopt Web3 effortlessly. It eliminates the complexities of wallet management and user relationships, abstracts away low-level blockchain communication, and enables rapid wallet integration – empowering developers to build with ease.

## Quickstart

### integrate the aar

1、Install TokenUpWalletSdk.aar

2、Configure Dependencies
```
implementation(files("aar/TokenUpWalletSdk.aar"))
implementation("com.tencent:mmkv:1.3.9")
implementation("com.squareup.retrofit2:retrofit:2.11.0")
implementation("com.squareup.retrofit2:converter-gson:2.11.0")
implementation("com.google.code.gson:gson:2.11.0")
implementation("com.google.android.gms:play-services-auth:21.2.0")
implementation("com.google.apis:google-api-services-drive:v3-rev20220815-2.0.0")
implementation("com.google.api-client:google-api-client:2.0.0")
implementation("com.google.oauth-client:google-oauth-client-jetty:1.34.1")
implementation("com.google.auth:google-auth-library-oauth2-http:1.11.0")
```

### Error codes
```
const val WEB_MANAGER_ERROR_ID = 401  //Unknown error
const val WEB_MANAGER_SUCCESS_ID = 0  //Request succeeded
const val WEB_MANAGER_NO_PASSWORD = -86750 //Password not set
const val WEB_MANAGER_PASSWORD_ERROR = -86751 //Invalid password
const val WEB_MANAGER_ACCOUNT_IS_ADD = -86752 //Account already added
const val WEB_MANAGER_NOT_INIT = -1111 //Not initialized
```

### Conversion rate mapping
```
val AUDUSD: String,val CADCNY: String,val CHFCNY: String,val CNYAED: String,val CNYALL: String,
val CNYAOA: String,val CNYARS: String,val CNYBAM: String,val CNYBGN: String,val CNYBHD: String,
val CNYBND: String,val CNYBOB: String,val CNYBRL: String,val CNYBWP: String,val CNYBYN: String,
val CNYCLP: String,val CNYCOP: String,val CNYCZK: String,val CNYDKK: String,val CNYDZD: String,
val CNYEGP: String,val CNYGHS: String,val CNYGYD: String,val CNYHRK: String,val CNYHUF: String,
val CNYILS: String,val CNYINR: String,val CNYIQD: String,val CNYIRR: String,val CNYISK: String,
val CNYJOD: String,val CNYKES: String,val CNYKRW: String,val CNYKWD: String,val CNYLAK: String,
val CNYLBP: String,val CNYLKR: String,val CNYLYD: String,val CNYMAD: String,val CNYMDL: String,
val CNYMKD: String,val CNYMMK: String,val CNYMOP: String,val CNYMUR: String,val CNYMVR: String,
val CNYMWK: String,val CNYMXN: String,val CNYMYR: String,val CNYNGN: String,val CNYNOK: String,
val CNYNPR: String,val CNYOMR: String,val CNYPEN: String,val CNYPHP: String,val CNYPKR: String,
val CNYPLN: String,val CNYPYG: String,val CNYQAR: String,val CNYRON: String,val CNYRSD: String,
val CNYRUB: String,val CNYSAR: String,val CNYSDG: String,val CNYSDR: String,val CNYSEK: String,
val CNYSLL: String,val CNYSRD: String,val CNYSSP: String,val CNYSYP: String,val CNYTHB: String,
val CNYTND: String,val CNYTRY: String,val CNYTWD: String,val CNYTZS: String,val CNYUAH: String,
val CNYUGX: String,val CNYUYU: String,val CNYUZS: String,val CNYVEF: String,val CNYVND: String,
val CNYXAF: String,val CNYYER: String,val CNYZAR: String,val CNYZMW: String,val EURCNY: String,
val EURUSD: String,val GBPCNY: String,val GBPUSD: String,val HKDCNY: String,val JPYCNY: String,
val NZDCNY: String,val NZDUSD: String,val SGDCNY: String,val USDAED: String,val USDARS: String,
val USDBGN: String,val USDBHD: String,val USDBND: String,val USDBRL: String,val USDBWP: String,
val USDBYN: String,val USDCAD: String,val USDCHF: String,val USDCLP: String,val USDCNH: String,
val USDCNY: String,val USDCOP: String,val USDCRC: String,val USDCZK: String,val USDDKK: String,
val USDDZD: String,val USDEGP: String,val USDHKD: String,val USDHRK: String,val USDHUF: String,
val USDIDR: String,val USDILS: String,val USDINR: String,val USDIQD: String,val USDIRR: String,
val USDISK: String,val USDJOD: String,val USDJPY: String,val USDKES: String,val USDKHR: String,
val USDKRW: String,val USDKWD: String,val USDKZT: String,val USDLAK: String,val USDLBP: String,
val USDLKR: String,val USDMAD: String,val USDMMK: String,val USDMOP: String,val USDMXN: String,
val USDMYR: String,val USDNGN: String,val USDNOK: String,val USDOMR: String,val USDPEN: String,
val USDPHP: String,val USDPLN: String,val USDQAR: String,val USDRON: String,val USDRSD: String,
val USDRUB: String,val USDSAR: String,val USDSEK: String,val USDSGD: String,val USDSYP: String,
val USDTHB: String,val USDTRY: String,val USDTUSD: String,val USDTWD: String,val USDTZS: String,
val USDUGX: String,val USDVES: String,val USDVND: String,val USDX: String,val USDYER: String,
val USDZAR: String,val USDZMW: String,val XAGUSD: String,val XAUUSD: String,val XPDUSD: String,
val XPTUSD: String
```

### Initialize
```
initcallback: Initialize the callback; the SDK methods can only be used after successful initialization

fun init(context:Application,initCallback:(Boolean)->Unit)
```
## Account

### Login
```
token: The Server Client ID for Google Sign-In in your product application
appName: Your project's appName
launcher: Receiving and processing the login callback

fun login(activity: FragmentActivity,token:String,appName:String,isDebug:Boolean,launcher: ActivityResultLauncher<Intent>)

This method processes the login callback response.
block: Login success callback，true false

fun handleLoginResult(result: ActivityResult, activity: FragmentActivity, block: (Boolean) -> Unit)
```

### Switch Account
```
id: The accountId, which allows switching to a specific account.

fun switchAccount(id:String):SubAccountBean?
```

### Delete Account
```
password: Wallet passward
accountId: The ID of the deleted account.
callback:  Callback that returns an Int (refer to status codes).

fun delAccount(password: String? = "",accountId: String,callback:(Int)->Unit)
```

### Add Account
```
password: Wallet passward
callback：Success Callback for Account Creation，AccountBean，contains a status code and the account object
This method will create wallets for all currently supported blockchains in a single operation.

fun createNewAccount(password: String? = "",callback: (AccountBean?)->Unit)

```

### Import account via private key
```
password: Wallet passward
privateKey:  The private key to be added
chains: The blockchain networks associated with this private key  
callback：Success callback for addition，AccountBean，contains a status code and the account object

importPrivateKeyAccount(password: String? = "",privateKey:String?,chains:MutableList<String>,callback: (AccountBean?)->Unit)
```

### Import account via Seed phrase
```
password: Wallet passward
mnemonics: Seed phrase
callback：Success callback for addition，AccountBean，contains a status code and the account object

importMnemonicAccount(password: String? = "",mnemonics:String,callback: (AccountBean?)->Unit)
```

### Sync Remote Account List
```
callback: Return the current account listing

fun syncAllAccount(callback:(MutableList<SubAccountBean>?)->Unit)
```

### Retrieve the account list
```
fun getAllAccount(): MutableList<SubAccountBean>?
```

### Get Current Account
```
fun getCurrentAccount():SubAccountBean?
```

### Get Seed Phrase
```
password: Wallet password
accountId: Account ID
callback: MnemonicBean containing status code and 12/24-word mnemonic phrase

fun getMnemonic(password: String?="",accountId:String,callback:(MnemonicBean?)->Unit)
```

### Get Private Key
```
accountId: Account ID
chainType: Blockchain type
password: Wallet password
PrivateKeyBean: containing status code and private key

fun getPrivateKey(accountId:String,chainType: String,password: String? = "",callback: (PrivateKeyBean) -> Unit)
```

### Get Account's Private Key List
```
accountId: Account ID
password: Wallet password
callback: PrivateKeyListBean containing status code and list of private keys

fun getPrivateKeyList(accountId:String,password: String? = "",callback:(PrivateKeyListBean?)->Unit)
```

### Change Password
```
oldPwd: Old password
newPwd: New password
callback: Returns status code

fun changePassword(oldPwd:String = "",newPwd:String,callback:(Int)->Unit)
```

###  Check If Password Was Changed
```
fun isChangePassword():Boolean
```

### Get Current Login Email
```
fun getCurrentLoginEmail():String?
```

## Network

### Get All Supported Networks
```
fun getAllNetWork(callback: (MutableList<ChainListBean>?) -> Unit)
```

### Get Current Network
```
fun getCurrentNet(callBack: (ChainListBean?) -> Unit)
```

### Switch Network
```
chainId: Switch Network ID
callback: Returns whether switch was successful

fun switchNetWork(chainId: Long,callback: (Boolean)->Unit)
```

## Blockchain

### Get Supported Chains
```
fun getSupportChains():MutableList<String>
```

## Tokens

### Get Current Network's Token List
```
fun getCurrentNetTokenList(callBack: (MutableList<TokenListBean>?) -> Unit)
```

### Get Popular Tokens for Specific Network
```
chainId: Network ID
chainType: Network type

fun getTokenListByChainId(chainId:Long,chainType: String,callBack: (MutableList<TokenListBean>?) -> Unit)
```

### Get Token's Latest Price (USDT)
```
params: [{"chainType_chainId":"contract_address"}] //For native tokens use symbol instead

callback:[{"contract_address",ChainPriceBean}]
ChainPriceBean: Field 'c' contains latest price

fun getChainPrice(params:List<HashMap<String,String>>, callback:(MutableList<HashMap<String, ChainPriceBean>>?)->Unit)
```

### Get Exchange Rates
```
fun getExchangeRate(callback: (HashMap<String,String>?) -> Unit)
```

### Query Token Metadata (Custom Tokens)
```
appkey:Required for TON chain

fun getTokenMetaData(rpc: String?,chainType:String?,contract :String?,appKey:String?,callback: (TokenListBean?)->Unit)
```

## Transaction History

### Register Wallet as Transaction Observer
```
Call this method when creating new wallets to add them to observation list

fun uploadHistory(subAccountBean: SubAccountBean)
```

### Query Transaction History
```
fun getHistoryList(chainId:Long,chainType: String,address: String,page:Int,limit:Int = 50,callback: (HistoryListBean?)->Unit)
```

## Transactions

### Get TRON Network Bandwidth
```
fun getTronAccountResources(rpc:String?,address:String?,callback:(TronAccountResponseBean?)->Unit)
```

### Get Current Network's TRON Bandwidth
```
fun getCurrentTronAccount(callback:(TronAccountResponseBean?)->Unit)
```

### Get Token Balance
```
params:BalanceRequestBean
data class BalanceRequestBean(var rpc:String? = "",var chainType:String? = "",var address:String? = "",
var contract:String? = "",var appKey:String? = "" //Required for TON chain)

callback: Returns raw balance amount (needs division by token's decimal places), -1 indicates error 

fun getBalance(params:BalanceRequestBean,callback: ((String?) -> Unit))
```

### Get Current Network's Token Balance
```
contract:Token contract address

fun getCurrentNetBalance(contract:String,callback: (String?) -> Unit)
```

### Validate Wallet Address
```
Validates if address format is correct for specified chain

fun checkAddress(chainType:String,address:String,callback:(Boolean)->Unit)
```

### Get Gas Fee
```
params:GasFeeRequestBean
data class GasFeeRequestBean(var amount: String? = "", //Optional
var appKey: String? = "",var chainType: String? = "",var contract: String? = "",
var from: String? = "", var to: String? = "" ,//If no address provided,to=from 
var isEIP1559: Boolean = false,var suggestGas1559Url: String? = ""，//Required for EVM chains
var rpc: String? = "")

callback: Returns JSON string
Response format varies between EVM and Other types
Gas fee is in native token amount (needs division by token's decimal places)

other type
{
     "gas": "110",
     // The following parameters are only available for Tron
     "bandwidth": "0",
     "residualBandwidth": "0",
     "energy": "0",
     "residualEnergy": "0",
}

evm type
1559 = true
{
    "low": {
        "gasLimit": "21000",
        "maxFeePerGas": "23813114133",
        "maxPriorityFeePerGas": "10000000",
        "gasFee": "500075396793000",
        "estimatedTime": "≤ 30 seconds"
    },
    "medium": {
        "gasLimit": "23100",
        "maxFeePerGas": "32134204079",
        "maxPriorityFeePerGas": "0",
        "gasFee": "742300114224900",
        "estimatedTime": "≤ 45 seconds"
    },
    "high": {
        "gasLimit": "25200",
        "maxFeePerGas": "40465294026",
        "maxPriorityFeePerGas": "0",
        "gasFee": "1019725409455200",
        "estimatedTime": "≤ 60 seconds"
    },
    "estimatedBaseFee": "23803114133"
}

1559 = false
{
    "low": {
        "gasLimit": "21000",
        "gasPrice": "112112060928",
        "gasFee": "2354353279488000",
        "estimatedTime": "≤ 15 minutes"
    },
    "medium": {
        "gasLimit": "23100",
        "gasPrice": "123323267021",
        "gasFee": "2589788607436800",
        "estimatedTime": "≤ 3 minutes"
    },
    "high": {
        "gasLimit": "25200",
        "gasPrice": "134534473114",
        "gasFee": "2825223935385600",
        "estimatedTime": "≤ 1 minute"
    }
}

fun getGasFee(params: GasFeeRequestBean,callback: (String?) -> Unit)
```

### Get EVM Gas Fee
```
callback:GasFeeEvmResponse
Returns null if query fails

fun getEvmGasFee(isEIP1559:Boolean,toAddress:String,contract: String,amount:String,callback: (GasFeeEvmResponse?)->Unit)
```

### Get Other Chain Types' Gas Fee
```
callback:GasFeeResponseBean
Returns null if query fails

fun getOtherGasFee(toAddress:String,contract: String,amount:String,callback: (GasFeeResponseBean?)->Unit)
```

### EVM Transfer
```
params:TransFerEvmRequestBean
data class TransFerEvmRequestBean(var amount: String?,var chainType: String?,var contract: String?,var from: String?,
var password: String?,var rpc: String?,var to: String?,var chainId: String?,var gasLimit: String?,var gasPrice: String?,
var maxFeePerGas: String?, var maxPriorityFeePerGas: String? Fill based on 1559 response data)

callback:TransFerResponseBean
Contain status code and transaction hash

fun transFerEvm(params:TransFerEvmRequestBean,callback:(TransFerResponseBean?)->Unit)
```

### Current Network EVM Transfer
```
Simplified version that doesn't require network type/rpc or sender address

fun transFerEvmCurrentNet(params: TransFerEvmNoNetRequestBean,callback: (TransFerResponseBean?) -> Unit)

```

### Non-EVM Transfer
```
params:TransFerOtherRequestBean

data class TransFerOtherRequestBean(var amount: String?,var appKey: String?,var chainType: String?,
var contract: String?,var from: String?,var password: String?,var rpc: String?,
var to: String?)

callback:TransFerResponseBean
Contain status code and transaction hash

fun transFerOther(params: TransFerOtherRequestBean,callback: (TransFerResponseBean?) -> Unit)
```

### Current Network Non-EVM Transfer
```
Simplified version that doesn't require network type/rpc or sender address

fun transFerOtherCurrentNet(params: TransFerOtherNoNetRequestBean,callback: (TransFerResponseBean?) -> Unit)
```

# Wallet Events

## Integration

### Inject JS
```
Get JS code to inject when opening DApps to intercept wallet events

fun getJsInfo(context:Context):String?
```

### Register Methods
```
JS calls app：
App must provide send(json:String) method

App calls JS
Call hInjectJsReceive.on(JSON.stringify(${json}))

```

### DApp Response Codes
```
code = 0      Success
code = 4001   User rejected
code = 4100   Wallet not connected
code = 4902   Network not found
code = -32605 Unknown Error
code = -32601 Method Not Found
code = -32602 Invalid Params
code = -32603 Internal Error
code = -32604 Server Error

```


### Get All Connected Objects
```
host: DApp website host

fun getAllConnect(host: String):List<DappConnectBean>?
```

### Get Current Connected Object
```
host: DApp website host
chainType:  Which network's connection to get
chainId: Whether to switch connection to specific network
address: Check if specific wallet address is connected

Returns: null if no matching connection

fun getConnectInfo(host: String,chainType: String?,chainId: Long?,address: String?):DappConnectBean?
```

### Remove Connection (Disconnect)
```
id:Connection object's accountId

address:Wallet address to disconnect
host:Wallet address to disconnect
fun disConnect(id:String)

fun disConnect(address:String,host:String)
```

### DApp Event Callback
```
code Response code
params: Data to return to DApp

fun sendToDapp(code:Int,params:HashMap<String,Any?>)
```

## Wallet Event Flow

### Connect Wallet
```
{
    "id": "XXX",
    "chainType": "xxxx",
    "methodName": "connect",
    "params": {
	// Optional network selection
	   "chainId": "XXXX"
    }
}
response:
{
    "address": "XXX"
}

1.Get connection object
2.If exists, return to DApp
3.If not, show user account list for selection
4.After approval, return connection data and save
```

### Disconnect
```
{
    "id": "XXX",
    "chainType": "xxx",
	"methodName": "disconnect"
}

response:
code = 0
params = null

1.Find connection object
2.Remove connection
3.Return result to DApp
```

### Switch Network
```
response:
code = 0
params = null

1.Find connection object
2.Update connection's network
3.Return result to DApp
```

### Add Token
```
response:
code = 0
true or false

1.Get connection object
2.Query token info by contract address
3.Add token to local token list
4.Return result to DApp
```

### Sign Message
```
response:
{
    "signature": "..."
}

1.Get connection object and display data
2.After approval, generate signature
3.Return signature to DApp
```

### Sign Transaction
```
response:
{
    "signature": "..."
}

1.Get connection object
2.Prepare transaction data (xxParseTransaction, xxEstimateGasByRawTx)
3.Show transaction dialog
4.After approval, generate signed transaction (xxSignRawTransaction)
5.Return signed transaction to DApp
```

### Sign and Send Transaction
```
response:
{
    "signature": "..."
}

1.Same as Sign Transaction
2.After signing, send transaction (xxSendSignedTransaction)
3.Return transaction hash to DApp

```

## HC

### Sign Message
```
dapp json
{
    "id": "XXX",
    "chainType": "HC",
    "methodName": "signMessage",
    "params": {
    	// base58 format
        "message": "XXXX",   //Convert message based on display format
        "display": "utf8" | "hex"},
}


callback: Int -> SDK status code
          String -> signature

fun getSignMessage(password:String = "",accountId: String,chainType: String,message: String?,messageType:Int=-1,callback:(Int,String)->Unit)

```

### Sign Transaction
```
dapp json
{
    "id": "XXX",
    "chainType": "HC",
    "methodName": "signTransaction",
    "params": {
        // base58 format
        "transaction": "XXXX"
    },
}

params:
transactions Pass DApp's transaction to parse data

fun hcParseTransaction(transactions: MutableList<String>,rpc:String?,callback: (MutableList<TransactionResultBean>?) -> Unit)

params:
callback:String Returns raw HC gas fee
fun hcEstimateGasByRawTx(transactions: MutableList<String>,rpc:String?,callback: (String?) -> Unit)

params:
transaction Pass DApp's transaction to generate signature
callback : Int -> SDK status code
           String -> signature        

fun hcSignRawTransaction(transaction:String,chainType: String,accountId: String,password: String? = "",callback: (Int,String?) -> Unit)
```

### Sign and Send Transaction
```
dapp json
{
    "id": "XXX",
    "chainType": "HC",
    "methodName": "signTransaction",
    "params": {
        // base58 format
        "transaction": "XXXX"
    },
}
params:
signature Pass signature from hcSignRawTransaction
callback: String ->transaction hash
fun hcSendSignedTransaction(signature:String,rpc: String?,callback: (String?) -> Unit)
```

## Ethereum

### Switch Network
```
{
    "id": "XXX",
    "chainType": "Ethereum",
    "methodName": "wallet_switchEthereumChain",
    "params": {
        "chainId": "XXXX"
    }
}
```

### Sign Message
```
{
    "id": "XXX",
    "chainType": "Ethereum",
    "methodName": "signMessage",
    "params": {
        "address": "",
        "message": "",
        "messageType": 0 | 1 | 4
    }
}

fun getSignMessage(password:String = "",accountId: String,chainType: String,message: String?,messageType:Int=-1,callback:(Int,String)->Unit)
```

### Sign Transaction
```
{
    "id": "XXX",
    "chainType": "Ethereum",
    "methodName": "signTransaction",
    "params": {
    "from": "XXXX",
    "to": "XXXX",
    "value": "XXXX",
    "data": "XXXX",
    "nonce": "XXXX", // optional
    "gas": "XXXX", // optional
    "gasPrice": "XXXX", // optional
    "maxPriorityFeePerGas": "XXXX", // optional
    "maxFeePerGas": "XXXX", // optional
    }
}


fun ethParseTransaction(to: String?,value: String?,data:String? = "",callback: (EthParseResponseBean?)->Unit)

params:
EthParseResponseBean.type = approve
Additional method required
fun ethGenerateApproveData(toAddress: String?,approveAmount:String?,callback: (String?) -> Unit)

params:
GasFeeEvmResponse Returns GasFeeEvmResponse with low/medium/high options
fun ethEstimateGas(rpc: String?,from:String?,to:String?,value:String?,data:String?,isEIP1559:Boolean = false,chainId: Long?,callback: (GasFeeEvmResponse?)->Unit)

params:
callback: Int->  SDK status code
          String -> signed transaction

fun ethSignTransaction(accountId: String?,rpc: String?,password: String? = "",chainType: String?,chainId: String?,to:String?,value: String?,data: String?,
                           nonce:String?,contractAddress:String?,from: String?,maxPriorityFeePerGas:String? = "",maxFeePerGas:String? = "",
                           gasLimit:String? = "",gasPrice:String? = "",callback: (Int,String?) -> Unit)


```

### Sign and Send Transaction
```
{
    "id": "XXX",
    "chainType": "Ethereum",
    "methodName": "signTransaction",
    "params": {
        "from": "XXXX",
        "to": "XXXX",
        "value": "XXXX",
        "data": "XXXX",
        "nonce": "XXXX", // optional
        "gas": "XXXX", // optional
        "gasPrice": "XXXX", // optional
        "maxPriorityFeePerGas": "XXXX", // optional
        "maxFeePerGas": "XXXX", // optional
    }
}

params:
signedTransaction Pass signed transaction from signing
callback : String -> transaction hash
           
fun ethSendSignedTransaction(rpc:String?,signedTransaction:String,callback: (String?) -> Unit)           
```


## Tron

### Sign Message
```
{
    "id": "XXX",
    "chainType": "Tron",
    "methodName": "signMessage",
    "params": {
        // hex code
        "message": "XXXX",
        "address": "XXXX"
    },
}

fun getSignMessage(password:String = "",accountId: String,chainType: String,message: String?,messageType:Int=-1,callback:(Int,String)->Unit)
```

### Sign Transaction
```
{
    "id": "XXX",
    "chainType": "Tron",
    "methodName": "signTransaction",
    "params": {
        "transaction": "XXXX",
        "input": "XXXX",
        "fromAddress": "XXXX",
    },
}

fun tronParseTransaction(rpc: String?,input: String?,callback: (TronParseResponseBean?)->Unit)

fun tronEstimateGasByRawTx(rpc: String?,fromAddress:String?,transaction:String?,input:String?,callback: (TronGasResponseBean?) -> Unit)

fun tronSignRawTransaction(password: String? = "",accountId: String?,chainType: String?,transaction:String?,callback:(Int,String?)->Unit)
```
### Tron does not sign and send transactions

## Solana

### Sign Message
```
{
    "id": "XXX",
    "chainType": "Solana",
    "methodName": "signMessage",
    "params": {
    	"message": "XXXX",
    	"address": "XXXX"
    }
}    

fun getSignMessage(password:String = "",accountId: String,chainType: String,message: String?,messageType:Int=-1,callback:(Int,String)->Unit)
```

### Sign Transaction
```
{
    "id": "XXX",
    "chainType": "Solana",
    "methodName": "signTransaction",
    "params": {
        // base58 format
        "transaction": "XXXX"
    },
}
Same flow as HC
fun solParseTransaction(transactions: MutableList<String>,rpc:String?,signerAddress:String,callback: (MutableList<TransactionResultBean>?) -> Unit)

fun solEstimateGasByRawTx(transactions: MutableList<String>,rpc:String?,callback: (String?) -> Unit)

fun solSignRawTransaction(transaction:String,chainType: String,accountId: String,password: String? = "",callback: (Int,String?) -> Unit)
```

### Sign and Send Transaction
```
dapp json
{
    "id": "XXX",
    "chainType": "Solana",
    "methodName": "signTransaction",
    "params": {
        // base58 format
        "transaction": "XXXX"
    },
}
params:
signature Pass signature from solSignRawTransaction
callback: String -> transaction hash
fun solSendSignedTransaction(signature:String,rpc: String?,callback: (String?) -> Unit)
```
