var PaymentContract = web3.eth.contract([
  {
    "constant": false,
    "inputs": [
      {
        "name": "s_key",
        "type": "string"
      },
      {
        "name": "resource_owner",
        "type": "address"
      }
    ],
    "name": "validationAndPayment",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "refundClient",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "deposit",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "h",
        "type": "bytes32"
      },
      {
        "name": "rest_of_payment",
        "type": "bytes32"
      }
    ],
    "name": "setHashLock",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "result",
        "type": "bool"
      }
    ],
    "name": "SetHashLockEvent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "result",
        "type": "bool"
      }
    ],
    "name": "DepositEvent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "validationResult",
        "type": "bool"
      },
      {
        "indexed": false,
        "name": "key",
        "type": "string"
      }
    ],
    "name": "ValidationAndPaymentEvent",
    "type": "event"
  }
]);

var Payment = PaymentContract.at('0x7c31443ca3d847e1e26449ca98629500bd9981b9');