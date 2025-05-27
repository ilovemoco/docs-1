---
title: Guide
sidebar_label: "Guide"
sidebar_position: 1
slug: /ios/initialize
---

# Guide

## What is TokenUp Wallet SDK

The TokenUp Wallet SDK provides a streamlined gateway for users to adopt Web3 effortlessly. It eliminates the complexities of wallet management and user relationships, abstracts away low-level blockchain communication, and enables rapid wallet integration – empowering developers to build with ease.

## Prerequisites
- Use Xcode 15.4 or later
- Target iOS 15.0 or later

## Importing TokenUp Wallet SDK
- Add ``` TokenUpWalletSdk.framework ``` to your Xcode project and set it to ``` Embed & Sign ```

## Initialization
Before building the wallet, call the ``` initSDK ``` method of ``` WalletSDKManager.manager ``` to initialize the SDK. This operation only needs to be performed once, preferably at app launch.

The following example demonstrates how to call the ``` initSDK ``` method in AppDelegate:

```
import TokenUp Wallet SDK

@main
class AppDelegate: UIResponder, UIApplicationDelegate {

  func application(_ application: UIApplication,
      didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {

   WalletSDKManager.manager.initSDK()

   return true
  }

}
```
  
## Login

- Call the ```login``` method of ```WalletSDKManager.manager``` to log in, which allows you to store your wallet-related information in iCloud. The ``` cache ``` parameter indicates whether to cache the current login state. 
``` 
import WalletSDK

class ViewController: UIViewController {
   override func viewDidLoad() {
      super.viewDidLoad()
      login()
   }

   func login() {
      WalletSDKManager.manager.login(cache: false) { result in
      switch result {
      case .success:
      //Handle post-login logic
      case .failure(let error):
      //Handle failure
      }
    }
   }
} 
 ```
- Call the ```checkIsLogin``` interface of ```WalletSDKManager.manager``` to verify the login status
```
func checkIsLogin
```
- Call the ```logout``` interface of ```WalletSDKManager.manager``` to log out
```
func logout(callback: @escaping () -> Void)
```

## Account

- Call the ```getAllAccount``` interface of ```WalletSDKManager.manager``` to retrieve all wallet account information you have created. ``` sync ``` defaults to false, meaning it fetches all account information from the local cache. If you need to synchronize account information from iCloud, set it to true
```
import WalletSDK

class ViewController: UIViewController {
  override func viewDidLoad() {
     super.viewDidLoad()
     getAllAccountList()
  }

  func getAllAccountList() {
     WalletSDKManager.manager.getAllAccount(sync: false)  { result in
     switch result {
     case .success:
     //Handle success
     case .failure(let error):
     //Handle failure
     }
   }
  }
} 
```

- Call the ```getCurrentAccount``` interface of ```WalletSDKManager.manager``` to retrieve the current account information 
```
import WalletSDK

class ViewController: UIViewController {
  override func viewDidLoad() {
     super.viewDidLoad()
     getCurrentAccount()
  }

  func getCurrentAccount() {
     WalletSDKManager.manager.getCurrentAccount { result in
     switch result {
     case .success:
     //Handle success
     case .failure(let error):
     //Handle failure
     }
   }
  }
}
```

- Call the ```addAccount``` interface of ```WalletSDKManager.manager``` to add an account. ``` password ``` is set to empty, and ``` supportedChainTypes ``` will default to creating a wallet on the HC, Tron, Ethereum, Solana, TON, and TONTESTNET networks. You can also modify this based on your needs. The ```mnemonic``` parameter is used when you need to import a wallet using a mnemonic phrase. The ```privateKey``` parameter is used when you need to import a wallet using a private key
``` 
import WalletSDK

class ViewController: UIViewController {
  override func viewDidLoad() {
     super.viewDidLoad()
     addAccount()
  }

  func addAccount() {
     WalletSDKManager.manager.addAccount(password: "") { result in
     switch result {
     case .success:
     //Handle success
     case .failure(let error):
     //Handle failure
     }
   }
  }
}
``` 

- Call the ```delAccount``` interface of ```WalletSDKManager.manager``` to delete an account. ```accountId``` is the id of the Accou```AccountModel```ntModel object you want to delete, and ```password``` is set to empty
```
import WalletSDK

class ViewController: UIViewController {
  override func viewDidLoad() {
     super.viewDidLoad()
     delAccount()
  }

  func delAccount() {
     WalletSDKManager.manager.delAccount((accountId: "targetAccountId", password: "")) { result in
     switch result {
     case .success:
     //Handle success
     case .failure(let error):
     //Handle failure
     }
   }
  }
}
```

- Call the ```switchAccount``` interface of ```WalletSDKManager.manager``` to switch accounts. ```accountId``` is the id of the target ```AccountModel``` object you want to switch to
```
import WalletSDK

class ViewController: UIViewController {
  override func viewDidLoad() {
     super.viewDidLoad()
     switchAccount()
  }

  func delAccount() {
     WalletSDKManager.manager.switchAccount((accountId: "targetAccountId")) { result in
     switch result {
     case .success:
     //Handle success
     case .failure(let error):
     //Handle failure
     }
   }
  }
}
```

- Call the ```getMnemonic``` interface of ```WalletSDKManager.manager``` to retrieve the mnemonic phrase information. ```chainType``` should be obtained from the current network, ```accountId``` is the ```id``` of the target account's ```AccountModel``` object, and the ```password``` parameter is set to empty by default.
```
import WalletSDK

class ViewController: UIViewController {
  override func viewDidLoad() {
     super.viewDidLoad()
     getMnemonic()
  }

  func getMnemonic() {
     WalletSDKManager.manager.getMnemonic(chainType: "chainType", accountId: "targetAccountId", password: "") { result in
     switch result {
     case .success:
     //Handle success
     case .failure(let error):
     //Handle failure
     }
   }
  }
}
```

- Call the ```getPrivateKey``` interface of ```WalletSDKManager.manager``` to retrieve the private key information. ```accountId``` is the ```id``` of the target account's ```AccountModel``` object, and the ```password``` parameter is set to empty by default.  
```
import WalletSDK

class ViewController: UIViewController {
  override func viewDidLoad() {
     super.viewDidLoad()
     getMnemonic()
  }

  func getMnemonic() {
     WalletSDKManager.manager.getMnemonic(chainType: "chainType", accountId: "targetAccountId", password: "") { result in
     switch result {
     case .success:
     //Handle success
     case .failure(let error):
     //Handle failure
     }
   }
  }
}
```

- Call the ```changePassword``` interface of ```WalletSDKManager.manager``` to change your password. ```password``` is your current password, and ```newPassword``` is the new password you create.
```
import WalletSDK

class ViewController: UIViewController {
  override func viewDidLoad() {
     super.viewDidLoad()
     changePassword()
  }

  func changePassword() {
     WalletSDKManager.manager.changePassword(password: "Current password", newPassword: "New password") { result in
     switch result {
     case .success:
     //Handle success
     case .failure(let error):
     //Handle failure
     }
   }
  }
}
```

- Call the ```checkPassword``` interface of ```WalletSDKManager.manager``` to verify if your current password is correct. ```currentPassword``` is your current password.
```
import WalletSDK

class ViewController: UIViewController {
  override func viewDidLoad() {
     super.viewDidLoad()
     checkPassword()
  }

  func checkPassword() {
     WalletSDKManager.manager.checkPassword(password: "Current password") { result in
     switch result {
     case .success:
     //Handle success
     case .failure(let error):
     //Handle failure
     }
   }
  }
}
```

## Network

- Call the ```getCurrentNetwork``` interface of ```WalletSDKManager.manager``` to retrieve the current network information.
 ``` 
import WalletSDK

class ViewController: UIViewController {
  override func viewDidLoad() {
     super.viewDidLoad()
     getCurrentNetwork()
  }

  func getCurrentNetwork() {
     WalletSDKManager.manager.getCurrentNetwork(chainType: "ChainType") { result in
     switch result {
     case .success(let currentNetwork):
     //Handle success
     case .failure(let error):
     //Handle failure
     }
   }
  }
}
 ```

- Call the ```getAllNetwork``` interface of ```WalletSDKManager.manager``` to retrieve the list of network information.
 ``` 
import WalletSDK

class ViewController: UIViewController {
  override func viewDidLoad() {
     super.viewDidLoad()
     getAllNetwork()
  }

  func getAllNetwork() {
     WalletSDKManager.manager.getAllNetwork { result in
     switch result {
     case .success(let networkList):
     //Handle success
     case .failure(let error):
     //Handle failure
     }
   }
  }
}
 ```

- Call the ```switchNetwork``` interface of ```WalletSDKManager.manager``` to switch networks. ```chainType``` is the chainType of your current network, and ```network``` is the target ```NetworkModel``` object you want to switch to.
 ``` 
import WalletSDK

class ViewController: UIViewController {
  override func viewDidLoad() {
     super.viewDidLoad()
     switchNetwork()
  }

  func switchNetwork() {
     WalletSDKManager.manager.switchNetwork(chainType:"Current network chainType", network:"targetNetwork") { result in
     switch result {
     case .success(let tokenList):
     //Handle success
     case .failure(let error):
     //Handle failure
     }
   }
  }
}
 ```

- Call the ```getSupportedChains``` interface of ```WalletSDKManager.manager``` to retrieve the list of currently supported networks.
 ``` 
import WalletSDK

class ViewController: UIViewController {
  override func viewDidLoad() {
     super.viewDidLoad()
     getSupportedChains()
  }

  func getSupportedChains() {
     WalletSDKManager.manager.getSupportedChains { result in
     switch result {
     case .success(let supportList):
     //Handle success
     case .failure(let error):
     //Handle failure
     }
   }
  }
}
 ```

## Transaction
- Call the ```getTokenList``` interface of ```WalletSDKManager.manager``` to retrieve tokenList information. ```chainType``` is the chainType of your current network, and ```chainid``` is the chainid of your current network.
``` 
import WalletSDK

class ViewController: UIViewController {
  override func viewDidLoad() {
     super.viewDidLoad()
     getTokenList()
  }

  func getTokenList() {
     WalletSDKManager.manager.getTokenList(chainType:"Current ntwork chainType", "chainid":"Current ntwork chainid") { result in
     switch result {
     case .success(let tokenList):
     //Handle success
     case .failure(let error):
     //Handle failure
     }
   }
  }
}
 ```

 
- Call the ```estimateGas``` interface of ```WalletSDKManager.manager``` to retrieve the estimated gas fee. 
 ``` 
// from: Current wallet address
// to: Transfer address
// amount: Transfer amount
// contract: Token contract address (for native tokens, pass the symbol)
// isEIP1559: Only required for EVM
// suggestGas1559Url: Only required for EVM
func estimateGas(from: String, to: String, amount: String, contract: String, isEIP1559: Bool, suggestGas1559Url: String, callback: @escaping (Result<EstimateGasModel?, JsBridgeError>) -> Void)
 ```

- Call the ```getTotalBalance``` interface of ```WalletSDKManager.manager``` to retrieve the total balance. ```address``` is the target wallet address.
 ``` 
func getTotalBalance(address: String, callback: @escaping (Result<BalanceModel?, JsBridgeError>) -> Void)
 ```
 
 - Call the ```estimateGas``` interface of ```WalletSDKManager.manager``` to retrieve the balance information of a specified token. ```address``` is the target wallet address, and ```contract``` is the target token contract address.
 ```
func getSpecificTokenBalance(address: String, contract: String, callback: @escaping (Result<BalanceModel?, JsBridgeError>) -> Void)
 ```

- Call the ```transfer``` interface of ```WalletSDKManager.manager``` to handle transfer transactions.
 ``` 
// from: Source address for the transfer
// to: Destination address for the transfer
// amount: Transfer amount
// contract: Token contract address for the transfer (for native tokens, pass the symbol)
// password: Password
// chainId: Only required for EVM, the chainid of the current network,
// maxPriorityFeePerGas: Only required for EVM
// maxFeePerGas: Only required for EVM
// gasLimit: Only required for EVM
// gasPrice: Only required for EVM

func transfer(
   from: String,
   to: String,
   amount: String,
   contract: String,
   password: String,
   maxPriorityFeePerGas: String,
   maxFeePerGas: String,
   gasLimit: String,
   gasPrice: String,
   callback: @escaping (Result<String?, JsBridgeError>) -> Void)
 ```

- Call the ```checkAddress``` interface of ```WalletSDKManager.manager``` to verify if a wallet address is valid in transfer transactions. ```chainType``` is the chainType of your current network, and ```address``` is the target wallet address.
 ``` 
func checkAddress(chainType: String, address: String, callback: @escaping (Result<CheckAddressModel?, JsBridgeError>) -> Void)
 ```

- Call the ```getFiatcurrencyExchangeRate``` interface of ```WalletSDKManager.manager``` to retrieve the exchange rate information of tokens.
 ``` 
func getFiatcurrencyExchangeRate(callback: @escaping (Result<Any?, JsBridgeError>) -> Void)
 ```

- Call the ```getCheckTokenPrice``` interface of ```WalletSDKManager.manager``` to retrieve the transaction price of tokens.
 ``` 
// params : key is chainid, value is the token contract address (for native tokens, pass the symbol)
func getCheckTokenPrice(params:[[String : String]]?, callback: @escaping (Result<Any?, JsBridgeError>) -> Void) 
 ```

## Dapp Events
Before integrating Dapp events, please inject the js first. The following example demonstrates how to inject js in a webView:
```
class DappWebViewController: UIViewController {

   override func viewDidLoad() {
    super.viewDidLoad()
    addUserScript()
   }

   func addUserScript() {
      let configuration = WKWebViewConfiguration()
      configuration.applicationNameForUserAgent = "Version/8.0.2 Safari/600.2.5"

      if let injectJsFilePath = Bundle.main.path(forResource: "injectJs.iife", ofType: "js") {
      do {
        let injectJsContent = try String(contentsOfFile: injectJsFilePath, encoding: .utf8)
        let injectScript = WKUserScript(source: injectJsContent, injectionTime: .atDocumentEnd, forMainFrameOnly: true)
        
        let contentController = WKUserContentController()
        contentController.addUserScript(injectScript)
        configuration.userContentController = contentController
      } catch {
        print("Failed to load JavaScript file: \(error)")
      }
    }

    let webView = WKWebView(frame: UIScreen.main.bounds, configuration: configuration)
    view.addSubview(webView)
   }
}
```
Event interaction, the following is an example using ```WKWebViewJavascriptBridge```: 

```
func registerHandlers() {
   bridge?.register(handlerName: "hInjectJsSend") { parameters, callback in
      //Event name and related parameters need to be parsed from parameters
   }
}
```

## HC
### Connection
- Retrieve the list of relevant accounts for the target network that the current Dapp needs to connect to, and select the account to connect.

### Sign Message
- Retrieve the target network and account connected by the current Dapp and perform signing.

### Sign Transaction
- Call the ```hcParseTransaction``` method of ```WalletSDKManager.manager``` to retrieve the signature.
```
func hcParseTransaction(transactions:[String], rpc: String, completion: @escaping (Result<HCParseTransaction?, JsBridgeError>) -> Void)
```
- Call the ```hcEstimateGasByRawTx``` method of ```WalletSDKManager.manager``` to retrieve Gas information.
```
func hcEstimateGasByRawTx(transactions:[String], rpc: String, completion: @escaping (Result<HCEstimateGasByRawTx?, JsBridgeError>) -> Void)
```
- Call the ```hcSignRawTransaction``` method of ```WalletSDKManager.manager``` to sign the transaction.
```
func hcSignRawTransaction(transaction:String, accountId: String, chainType: String, password:String, completion: @escaping (Result<HCSignRawTransaction?, JsBridgeError>) -> Void)
```
- Call the ```hcSendSignedTransaction``` method of ```WalletSDKManager.manager``` to sign and send the transaction.
```
func hcSendSignedTransaction(transaction:String, rpc: String, completion: @escaping (Result<HCSendSignedTransaction?, JsBridgeError>) -> Void)
```
- Callback the above results to js.

## EVM
### Connection
- Retrieve the list of relevant accounts for the target network that the current Dapp needs to connect to, and select the account to connect.

### Sign Message

- Retrieve the target network and account connected by the current Dapp and perform signing.

### Sign Transaction & Sign and Send Transaction
- Call the ```ethParseTransaction``` method of ```WalletSDKManager.manager``` to retrieve related events.
```
func ethParseTransaction(to: String, value: String, data: String, completion: @escaping (Result<ETHParseTransaction?, JsBridgeError>) -> Void)
```
- Call the ```ethEstimateGas``` method of ```WalletSDKManager.manager``` to retrieve Gas information.
```
func ethEstimateGas(from: String, to: String, rpc: String, value: String, data: String, isEIP1559: Int, chainId: String, completion: @escaping (Result<EstimateGasModel?, JsBridgeError>) -> Void)
```
- Call the ```getTokenMetadata``` method of ```WalletSDKManager.manager``` to retrieve symbol-related information.
```
func getTokenMetadata(chainType: String, contract:String, callback: @escaping (Result<TokenMetaData?, JsBridgeError>) -> Void)
```
- Call the ```ethSignTransaction``` method of ```WalletSDKManager.manager``` to sign the transaction.
```
func ethSignTransaction(accountId: String, chainType: String, from: String, to: String, rpc: String, password: String, chainId:String, amount: String, data: String, contract:String, nonce: String, maxPriorityFeePerGas: String, maxFeePerGas:String, gasLimit:String, gasPrice:String, completion: @escaping (Result<ETHSignTransaction?, JsBridgeError>) -> Void)
```
- Call the ```ethSendSignedTransaction``` method of ```WalletSDKManager.manager``` to sign and send the transaction.
```
func ethSendSignedTransaction(signedTransaction:String, rpc: String, completion: @escaping (Result<ETHSendSignedTransaction?, JsBridgeError>) -> Void)
```
- Callback the above results to js.

## Tron
### Connection
- Retrieve the list of relevant accounts for the target network that the current Dapp needs to connect to, and select the account to connect.

### Sign Message
- Retrieve the target network and account connected by the current Dapp and perform signing.

### Sign Transaction
- Call the ```tronParseTransaction``` method of ```WalletSDKManager.manager``` to retrieve signature information.
```
func tronParseTransaction(input:String, rpc: String, completion: @escaping (Result<TRONParseTransaction?, JsBridgeError>) -> Void)
```
- Call the ```tronEstimateGasByRawTx``` method of ```WalletSDKManager.manager``` to retrieve Gas information. 
```
func tronEstimateGasByRawTx(transaction:String, rpc: String, from: String, input: String, completion: @escaping (Result<TRONEstimateGasByRawTx?, JsBridgeError>) -> Void
```
- Call the ```tronSignRawTransaction``` method of ```WalletSDKManager.manager``` to sign the transaction.
```
func tronSignRawTransaction(transaction:String, accountId: String, chainType: String, password:String, completion: @escaping (Result<TRONSignRawTransaction?, JsBridgeError>) -> Void)
```
- Callback the above results to js.

## Solana
### Connection
- Retrieve the list of relevant accounts for the target network that the current Dapp needs to connect to, and select the account to connect.

### Sign Message
- Retrieve the target network and account connected by the current Dapp and perform signing.

### Sign Transaction & Sign and Send Transaction
- Call the ```solParseTransaction``` method of ```WalletSDKManager.manager``` to retrieve signature information.
```
func solParseTransaction(transactions:[String], rpc: String, signerAddress:String, completion: @escaping (Result<SOLParseTransaction?, JsBridgeError>) -> Void)
```
- Call the ```solEstimateGasByRawTx``` method of ```WalletSDKManager.manager``` to retrieve Gas information.
```
func solEstimateGasByRawTx(transactions:[String], rpc: String, completion: @escaping (Result<SOLEstimateGasByRawTx?, JsBridgeError>) -> Void)
```
- Call the ```solSignRawTransaction``` method of ```WalletSDKManager.manager``` to sign the transaction.
```
func solSignRawTransaction(transaction:String, accountId: String, chainType: String, password:String, completion: @escaping (Result<SOLSignRawTransaction?, JsBridgeError>) -> Void)
```
- Call the ```solSendSignedTransaction``` method of ```WalletSDKManager.manager``` to sign and send the transaction.
```
func solSendSignedTransaction(transaction:String, rpc: String, completion: @escaping (Result<SOLSendSignedTransaction?, JsBridgeError>) -> Void)
```

- Callback the above results to js.