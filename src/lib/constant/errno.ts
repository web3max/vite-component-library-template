const errno = {
  // MetaMask
  metaMaskUserDeniedMessageSignature: 4001,
  metaMaskWalletRequestPermissions: -32002,
  metaMaskUserRejectedAccountAccess: -32603,
  metaMaskReplacementTransactionUnderpriced: 'replacement transaction underpriced',
  metaMaskTransactionHasBeenAborted: 'the transaction has been aborted',
  // WalletConnect
  walletConnectUserRejectedTheTransaction: 'User rejected the transaction',
  walletConnectInsufficientFundsForTransfer: 'insufficient funds for transfer',
  // TronLink
  tronLinkConfirmationDeclinedByUser: 'Confirmation declined by user',
  tronLinkInsufficientBalance:
    'class org.tron.core.exception.ContractValidateException : Validate TransferContract error, no OwnerAccount.',
  tronLinkTypeErrorAddUpdateDataNotFunction: 'transactionBuilder.addUpdateData',
  tronLinkAuthorizationRequestsAreBeingProcessed: 4000,
  // imToken
  imTokenUserCanceled: 'user_canceled',
  // coinbase wallet
  coinbaseWalletUsingMultipleWallet: 'Request method eth_chainId is not supported',
  // Portal Wallet
  portalWalletInsufficientBalance: 'input capacity not enough',
  portalWalletValidationFailure: 'ValidationFailure(-31)',
  // torus
  torusUserCancelledLogin: 'User cancelled login',
  torusUserClosedPopup: 'user closed popup',
}

export enum TronLinkRequestAccountsResponseCode {
  ok = 200,
  inQueue = 4000,
  userRejected = 4001,
}

export default errno
