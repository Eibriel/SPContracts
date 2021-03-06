let config = {};
config.contract = {
  "contractName": "SoapPunkCollectiblesChild",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address payable",
          "name": "relayerAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "functionSignature",
          "type": "bytes"
        }
      ],
      "name": "MetaTransactionExecuted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Paused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "previousAdminRole",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "newAdminRole",
          "type": "bytes32"
        }
      ],
      "name": "RoleAdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleGranted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleRevoked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "values",
          "type": "uint256[]"
        }
      ],
      "name": "TransferBatch",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "TransferSingle",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "value",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "URI",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Unpaused",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "DEFAULT_ADMIN_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "DEPOSITOR_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "ERC712_VERSION",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "MINTER_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "PAUSER_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "accounts",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        }
      ],
      "name": "balanceOfBatch",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "values",
          "type": "uint256[]"
        }
      ],
      "name": "burnBatch",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "functionSignature",
          "type": "bytes"
        },
        {
          "internalType": "bytes32",
          "name": "sigR",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "sigS",
          "type": "bytes32"
        },
        {
          "internalType": "uint8",
          "name": "sigV",
          "type": "uint8"
        }
      ],
      "name": "executeMetaTransaction",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [],
      "name": "getChainId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "getDomainSeperator",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getNonce",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "nonce",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        }
      ],
      "name": "getRoleAdmin",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getRoleMember",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        }
      ],
      "name": "getRoleMemberCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "grantRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "hasRole",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "paused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "renounceRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "revokeRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeBatchTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "uri",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "withdrawnTokens",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "newuri",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "childChainManager",
          "type": "address"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "uri",
          "type": "string"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "newuri",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "setURI",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "mintBatch",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "depositData",
          "type": "bytes"
        }
      ],
      "name": "deposit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "withdrawSingle",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        }
      ],
      "name": "withdrawBatch",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.6.6+commit.6c089d02\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"userAddress\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address payable\",\"name\":\"relayerAddress\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"functionSignature\",\"type\":\"bytes\"}],\"name\":\"MetaTransactionExecuted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Paused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"previousAdminRole\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newAdminRole\",\"type\":\"bytes32\"}],\"name\":\"RoleAdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleGranted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleRevoked\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"TransferBatch\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"value\",\"type\":\"string\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"URI\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Unpaused\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DEFAULT_ADMIN_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"DEPOSITOR_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"ERC712_VERSION\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MINTER_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PAUSER_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"accounts\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"}],\"name\":\"balanceOfBatch\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"burnBatch\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"depositData\",\"type\":\"bytes\"}],\"name\":\"deposit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"userAddress\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"functionSignature\",\"type\":\"bytes\"},{\"internalType\":\"bytes32\",\"name\":\"sigR\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"sigS\",\"type\":\"bytes32\"},{\"internalType\":\"uint8\",\"name\":\"sigV\",\"type\":\"uint8\"}],\"name\":\"executeMetaTransaction\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getChainId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getDomainSeperator\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"getNonce\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"nonce\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"getRoleAdmin\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"getRoleMember\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"getRoleMemberCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"grantRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"hasRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"newuri\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"childChainManager\",\"type\":\"address\"}],\"name\":\"initialize\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"uri\",\"type\":\"string\"}],\"name\":\"initialize\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"amounts\",\"type\":\"uint256[]\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"mintBatch\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"paused\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"renounceRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"revokeRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"amounts\",\"type\":\"uint256[]\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeBatchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"newuri\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"setURI\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"unpause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"uri\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"amounts\",\"type\":\"uint256[]\"}],\"name\":\"withdrawBatch\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"withdrawSingle\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"withdrawnTokens\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{\"balanceOf(address,uint256)\":{\"details\":\"See {IERC1155-balanceOf}.     * Requirements:     * - `account` cannot be the zero address.\"},\"balanceOfBatch(address[],uint256[])\":{\"details\":\"See {IERC1155-balanceOfBatch}.     * Requirements:     * - `accounts` and `ids` must have the same length.\"},\"deposit(address,bytes)\":{\"details\":\"Should be callable only by ChildChainManager Should handle deposit by minting the required tokens for user Make sure minting is done only by this function\",\"params\":{\"depositData\":\"abi encoded ids array and amounts array\",\"user\":\"user address for whom deposit is being done\"}},\"getRoleAdmin(bytes32)\":{\"details\":\"Returns the admin role that controls `role`. See {grantRole} and {revokeRole}.     * To change a role's admin, use {_setRoleAdmin}.\"},\"getRoleMember(bytes32,uint256)\":{\"details\":\"Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive.     * Role bearers are not sorted in any particular way, and their ordering may change at any point.     * WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information.\"},\"getRoleMemberCount(bytes32)\":{\"details\":\"Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role.\"},\"grantRole(bytes32,address)\":{\"details\":\"Grants `role` to `account`.     * If `account` had not been already granted `role`, emits a {RoleGranted} event.     * Requirements:     * - the caller must have ``role``'s admin role.\"},\"hasRole(bytes32,address)\":{\"details\":\"Returns `true` if `account` has been granted `role`.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC1155-isApprovedForAll}.\"},\"pause()\":{\"details\":\"Pauses all token transfers.     * See {ERC1155Pausable} and {Pausable-_pause}.     * Requirements:     * - the caller must have the `PAUSER_ROLE`.\"},\"paused()\":{\"details\":\"Returns true if the contract is paused, and false otherwise.\"},\"renounceRole(bytes32,address)\":{\"details\":\"Revokes `role` from the calling account.     * Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced).     * If the calling account had been granted `role`, emits a {RoleRevoked} event.     * Requirements:     * - the caller must be `account`.\"},\"revokeRole(bytes32,address)\":{\"details\":\"Revokes `role` from `account`.     * If `account` had been granted `role`, emits a {RoleRevoked} event.     * Requirements:     * - the caller must have ``role``'s admin role.\"},\"safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)\":{\"details\":\"See {IERC1155-safeBatchTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,uint256,bytes)\":{\"details\":\"See {IERC1155-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC1155-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.     * Time complexity O(1), guaranteed to always use less than 30 000 gas.\"},\"unpause()\":{\"details\":\"Unpauses all token transfers.     * See {ERC1155Pausable} and {Pausable-_unpause}.     * Requirements:     * - the caller must have the `PAUSER_ROLE`.\"},\"uri(uint256)\":{\"details\":\"See {IERC1155MetadataURI-uri}.     * This implementation returns the same URI for *all* token types. It relies on the token type ID substitution mechanism https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the EIP].     * Clients calling this function must replace the `\\\\{id\\\\}` substring with the actual token type ID.\"},\"withdrawBatch(uint256[],uint256[])\":{\"details\":\"Should burn user's tokens. This transaction will be verified when exiting on root chain\",\"params\":{\"amounts\":\"amounts to withdraw\",\"ids\":\"ids to withdraw\"}},\"withdrawSingle(uint256,uint256)\":{\"details\":\"Should burn user's tokens. This transaction will be verified when exiting on root chain\",\"params\":{\"amount\":\"amount to withdraw\",\"id\":\"id to withdraw\"}}}},\"userdoc\":{\"methods\":{\"deposit(address,bytes)\":{\"notice\":\"called when tokens are deposited on root chain\"},\"withdrawBatch(uint256[],uint256[])\":{\"notice\":\"called when user wants to batch withdraw tokens back to root chain\"},\"withdrawSingle(uint256,uint256)\":{\"notice\":\"called when user wants to withdraw single token back to root chain\"}}}},\"settings\":{\"compilationTarget\":{\"/home/gabriel/Documentos/Trabajo/Eibriel/Proyectos/Decentraland/GoldRush/SPContracts/matic/contracts/SoupPunk_child.sol\":\"SoapPunkCollectiblesChild\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":1},\"remappings\":[]},\"sources\":{\"/home/gabriel/Documentos/Trabajo/Eibriel/Proyectos/Decentraland/GoldRush/SPContracts/common/ContextMixin.sol\":{\"keccak256\":\"0xb9c8d90444f3cb8aeadd6c400d42c777068be5d46cb74f28313508284b224b34\",\"urls\":[\"bzz-raw://c06381d18a5e74416d316cc5348585286ce31a716cef696b9637f9bc76a311af\",\"dweb:/ipfs/QmS3o5Th8XnUZY1fobXS8CRofnYfWaqfYSRWSPvsWT1dXB\"]},\"/home/gabriel/Documentos/Trabajo/Eibriel/Proyectos/Decentraland/GoldRush/SPContracts/common/EIP712Base.sol\":{\"keccak256\":\"0xd6475e1b08bd06d8b6c267456567171119c147ca26ff2e660517447772275db4\",\"urls\":[\"bzz-raw://54d4e3648a9b2be7c12d62679a83bb8d307faee1a275d094afb2e66ec71ef908\",\"dweb:/ipfs/QmUYn9ikXdctGmjkZyiYo2yBqoCnzFzTdBdvmTBGqkLRy1\"]},\"/home/gabriel/Documentos/Trabajo/Eibriel/Proyectos/Decentraland/GoldRush/SPContracts/common/NativeMetaTransaction.sol\":{\"keccak256\":\"0x7cdf5844f11140ad4e23245fd70b836d25bb3f70474db35e828590f860acc6da\",\"urls\":[\"bzz-raw://4ab319ca13daae7586dbbe9d1e36b76fcc54fb00b881823682cb047e8850582a\",\"dweb:/ipfs/QmdNQrrUmtq39kWVC5bkjwM8yu9gjHGouqFdj1taHU3Rpp\"]},\"/home/gabriel/Documentos/Trabajo/Eibriel/Proyectos/Decentraland/GoldRush/SPContracts/matic/contracts/SoupPunk_child.sol\":{\"keccak256\":\"0xcb3eda08cd2b4419322aca30db3a8c5f8bc5e00096b735bd9dae7639eaf2e88b\",\"urls\":[\"bzz-raw://80cb192af85a7b0b3dc7bad830280195f8e1a16b8c884bdab687db1dab472e5c\",\"dweb:/ipfs/QmdgoPPg4C2MCeXJoyvd8bwoMMLcVG4av3siPJtNxVMmP5\"]},\"@openzeppelin/contracts-upgradeable/GSN/ContextUpgradeable.sol\":{\"keccak256\":\"0xca5ef6ed50c212be4cffea0fd7974d659e92b1328906069f7a14e2cc1bedfbfe\",\"urls\":[\"bzz-raw://b1edd6602dadeb1c00d8bd54aa6cee379dae83846e5b613feefbc8cdcdae42b0\",\"dweb:/ipfs/QmbpZvED3aj3x7fr2pdUC5iDU6x5ehDxKQyj3pm2NegbhM\"]},\"@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol\":{\"keccak256\":\"0x8c037e108e6db1410af9f33b3ecd147ce1ed3b1c94a8b6d25d06043cc085a1fb\",\"urls\":[\"bzz-raw://ce07d8d6da06c0d68278acdffff121d598ad554803719c6d0130757fc93ee72f\",\"dweb:/ipfs/QmNQTDqGc3Lsv7iiNYNNkMp2cURaii9bVT6Dfv31RdxSp9\"]},\"@openzeppelin/contracts-upgradeable/introspection/ERC165Upgradeable.sol\":{\"keccak256\":\"0xb143dc53cd9c8a9ee1d43c9ce4a4ede1ea9795d977ce76d25e1f5c9386babc15\",\"urls\":[\"bzz-raw://32c906dbf5da0d3aec449b09ab3ae3cb71e5445b03006197743f1c759f0c853c\",\"dweb:/ipfs/QmaCDf1F9DfchkHZaZiNtEh22QkJ3MyDNNtBQLVDnX1r3X\"]},\"@openzeppelin/contracts-upgradeable/introspection/IERC165Upgradeable.sol\":{\"keccak256\":\"0xa80b63182ace4c44cfca7cbd051ea346f85f8a069437315e280bff4f50df2851\",\"urls\":[\"bzz-raw://5566403ca33fb5b14feed3a86cfca4a8eb68b7fbb3896ebf2e4e597747bb42f8\",\"dweb:/ipfs/Qmf4gmVRJ7qa8xfytMyjGTY1kXLsJkPYhfNJwrrvifgH6S\"]},\"@openzeppelin/contracts-upgradeable/math/SafeMathUpgradeable.sol\":{\"keccak256\":\"0x5ce1bdd7144d5fd5284ec2e7a008f95c8c56a384d29200a63a93f3a247c4cf3a\",\"urls\":[\"bzz-raw://54fd179f1133eb2e9514c5174952b38e70557266818832b12356febf2262fed2\",\"dweb:/ipfs/QmRKKg9o4EXa4i6kHXjmnh9zdpstYe2tXwe5TKBkCxdSav\"]},\"@openzeppelin/contracts-upgradeable/presets/ERC1155PresetMinterPauserUpgradeable.sol\":{\"keccak256\":\"0x16be97e468deaace7ed79b62ce1a8b18e2fff9a056d323954a88349573748c6a\",\"urls\":[\"bzz-raw://4384c28cbb87f879c780eecda821639ff92beda6772bb384cb31460bb7610bc9\",\"dweb:/ipfs/QmUwXB4BPPTDGoRfCdE565mBujTfgg5dSThRCvSHkCp56i\"]},\"@openzeppelin/contracts-upgradeable/proxy/Initializable.sol\":{\"keccak256\":\"0x8eee8bd8c216a3e437bf7a4c9844348f47a2d990e5b06cd96d250e33ab04c25a\",\"urls\":[\"bzz-raw://c6bb2af880b12be26b148ee99ac3a984168e7fc74721bab9cd44598a0669b038\",\"dweb:/ipfs/QmPfFDaXZbThJgaVim7nvxrw1RuD2xKWCG89K6pznmC8pJ\"]},\"@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155BurnableUpgradeable.sol\":{\"keccak256\":\"0x765833990c40dc97bb439b7246c67555ced1448098001d073df7cf7fe7538cf6\",\"urls\":[\"bzz-raw://1b7c93f830ab3c0c4913e22a0a74f39670e99f74b3d6df4212489957077267c1\",\"dweb:/ipfs/QmTXPHqs1d19TSNBXkDYPJUfPQQ1npYDRZ5t3AqfpPsh5v\"]},\"@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155PausableUpgradeable.sol\":{\"keccak256\":\"0xc66209630d943075911e1c111ea51a039c3fcc0eef5fe797affcb8e3f9a2f7bf\",\"urls\":[\"bzz-raw://db1ddb4e3f09e6d1a254605da7e650e16c19f263159c76a0067f5de0ab1762b2\",\"dweb:/ipfs/QmZuMZzsvysbVwE2WsMgsnu5VAaMekpxnwAdXok689qqV7\"]},\"@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable.sol\":{\"keccak256\":\"0x342c060257be882d7c5bc209e0035f76b816d17653bc43e9f619fd96ae08e47b\",\"urls\":[\"bzz-raw://5fe49e3c6ae0b495f7db4cb196e011274a3e1f917a67265b7172e4dc0da58b06\",\"dweb:/ipfs/QmZC2ywQfC1TiUyijMAkLHuim97E7wVsk9R1p75QQxCTww\"]},\"@openzeppelin/contracts-upgradeable/token/ERC1155/IERC1155MetadataURIUpgradeable.sol\":{\"keccak256\":\"0x315a223e418610081917866cf38fc36bcdb5c576663f287ff06307797ce3b1b0\",\"urls\":[\"bzz-raw://ab1e7aa38ff680f1f4f602524a239332484a4e187947977c1658812f23d30aa5\",\"dweb:/ipfs/QmfYqNgFV6bpvrc1vzuXoB9T2f2FE6JD3qjM2nin25bxbf\"]},\"@openzeppelin/contracts-upgradeable/token/ERC1155/IERC1155ReceiverUpgradeable.sol\":{\"keccak256\":\"0x65a56af9574f389ca9c6a9af89e7117962f1de171be33e29bc2a3f6cce9a1474\",\"urls\":[\"bzz-raw://2c16cc6a4f37e87fd1103d9c368eb423b74c2e686b2c27b2ed4f6ca861416fb0\",\"dweb:/ipfs/QmPCqmMLD16iUUSxAight74w9CnP7S9qrrZHimnBSd6zHc\"]},\"@openzeppelin/contracts-upgradeable/token/ERC1155/IERC1155Upgradeable.sol\":{\"keccak256\":\"0x5cbc2faff7c006004b429e1bdbebc2b04a3353eb2f814de778629d3a725da838\",\"urls\":[\"bzz-raw://f558d82f82fd6c08d74f787a31e72457cc9dc55b8a6f14326f41d1a44c639846\",\"dweb:/ipfs/QmQgAJjmEqkmykfxvNM9tVSfcamN42M4DzQAUHoaZQ36UG\"]},\"@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol\":{\"keccak256\":\"0x21d0ea14543f00187a5015b87993127dcf56d4ed40406f5a32a671a103209213\",\"urls\":[\"bzz-raw://0c8229a6611766c940789e0cb9a847398b9002a5ed557918ee8bfeb18ea36603\",\"dweb:/ipfs/QmfUbx4y6gjb9oj8V2qe9W5Eph31kimDdtpSGXa9po4u3L\"]},\"@openzeppelin/contracts-upgradeable/utils/EnumerableSetUpgradeable.sol\":{\"keccak256\":\"0x3f53ff087805b132a913a678d9b261853b83adee630355e536361873e5b8dca1\",\"urls\":[\"bzz-raw://754e29970105b56cabadf6e528f6903f1e3d6ae02820dd2757515f515f134231\",\"dweb:/ipfs/QmNvBijMwtWLP8szNyANTeuPGMD6gdbrXERMoZykAHhXtq\"]},\"@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol\":{\"keccak256\":\"0x2015828737ff36c8a3f1d4e65041beb6c70006f82816017df6a304b52228ef69\",\"urls\":[\"bzz-raw://99446fd768aa14febd0b0419f9b3b948c65bf5092285de337d4a3e60150de8ee\",\"dweb:/ipfs/QmNumAsvHvHYDNuBAPSY34p3RKXqEFaBLQFAd2fFWUhzfP\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b50614679806100206000396000f3fe6080604052600436106101b45760003560e01c8062fdd58e146101b957806301ffc9a71461020457806307a974fc1461024c5780630c53c51c146102765780630e89341c146103ad5780630f7e5970146103d75780631f7fdffa146103ec57806320379ee5146105b35780632262f53f146105c8578063248a9ca3146105f85780632d0335ab146106225780632eb2c2d6146106555780632f2ff15d146108235780633408e4701461085c57806336568abe146108715780633f4ba83a146108aa5780634e1273f4146108bf5780635c5fb52114610a3f5780635c975abb14610b0a57806367db3b8f14610b1f5780636b20c45414610bd2578063731133e914610d125780637ab4339d14610d6b5780638456cb5914610e275780639010d07c14610e3c57806391d1485414610e88578063a217fddf14610ec1578063a22cb46514610ed6578063a3b0b5a314610f11578063ca15c87314610f26578063cf2c52cb14610f50578063d539139314610fdb578063d547741f14610ff0578063e63ab1e914611029578063e985e9c51461103e578063f242432a14611079578063f5298aca1461114f578063f62d18881461118e575b600080fd5b3480156101c557600080fd5b506101f2600480360360408110156101dc57600080fd5b506001600160a01b03813516906020013561123f565b60408051918252519081900360200190f35b34801561021057600080fd5b506102386004803603602081101561022757600080fd5b50356001600160e01b0319166112b1565b604080519115158252519081900360200190f35b34801561025857600080fd5b506102386004803603602081101561026f57600080fd5b50356112d0565b610338600480360360a081101561028c57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b8111156102b657600080fd5b8201836020820111156102c857600080fd5b803590602001918460018302840111600160201b831117156102e957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550508235935050506020810135906040013560ff166112e6565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561037257818101518382015260200161035a565b50505050905090810190601f16801561039f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156103b957600080fd5b50610338600480360360208110156103d057600080fd5b50356115eb565b3480156103e357600080fd5b50610338611683565b3480156103f857600080fd5b506105b16004803603608081101561040f57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561043957600080fd5b82018360208201111561044b57600080fd5b803590602001918460208302840111600160201b8311171561046c57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156104bb57600080fd5b8201836020820111156104cd57600080fd5b803590602001918460208302840111600160201b831117156104ee57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561053d57600080fd5b82018360208201111561054f57600080fd5b803590602001918460018302840111600160201b8311171561057057600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506116a0945050505050565b005b3480156105bf57600080fd5b506101f26116dd565b3480156105d457600080fd5b506105b1600480360360408110156105eb57600080fd5b50803590602001356116e5565b34801561060457600080fd5b506101f26004803603602081101561061b57600080fd5b50356116fb565b34801561062e57600080fd5b506101f26004803603602081101561064557600080fd5b50356001600160a01b0316611710565b34801561066157600080fd5b506105b1600480360360a081101561067857600080fd5b6001600160a01b038235811692602081013590911691810190606081016040820135600160201b8111156106ab57600080fd5b8201836020820111156106bd57600080fd5b803590602001918460208302840111600160201b831117156106de57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561072d57600080fd5b82018360208201111561073f57600080fd5b803590602001918460208302840111600160201b8311171561076057600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156107af57600080fd5b8201836020820111156107c157600080fd5b803590602001918460018302840111600160201b831117156107e257600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061172c945050505050565b34801561082f57600080fd5b506105b16004803603604081101561084657600080fd5b50803590602001356001600160a01b0316611a1d565b34801561086857600080fd5b506101f2611a85565b34801561087d57600080fd5b506105b16004803603604081101561089457600080fd5b50803590602001356001600160a01b0316611a89565b3480156108b657600080fd5b506105b1611aea565b3480156108cb57600080fd5b506109ef600480360360408110156108e257600080fd5b810190602081018135600160201b8111156108fc57600080fd5b82018360208201111561090e57600080fd5b803590602001918460208302840111600160201b8311171561092f57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561097e57600080fd5b82018360208201111561099057600080fd5b803590602001918460208302840111600160201b831117156109b157600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550611b5b945050505050565b60408051602080825283518183015283519192839290830191858101910280838360005b83811015610a2b578181015183820152602001610a13565b505050509050019250505060405180910390f35b348015610a4b57600080fd5b506105b160048036036040811015610a6257600080fd5b810190602081018135600160201b811115610a7c57600080fd5b820183602082011115610a8e57600080fd5b803590602001918460208302840111600160201b83111715610aaf57600080fd5b919390929091602081019035600160201b811115610acc57600080fd5b820183602082011115610ade57600080fd5b803590602001918460208302840111600160201b83111715610aff57600080fd5b509092509050611cd8565b348015610b1657600080fd5b50610238611d4d565b348015610b2b57600080fd5b506105b160048036036040811015610b4257600080fd5b810190602081018135600160201b811115610b5c57600080fd5b820183602082011115610b6e57600080fd5b803590602001918460018302840111600160201b83111715610b8f57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505091359250611d56915050565b348015610bde57600080fd5b506105b160048036036060811015610bf557600080fd5b6001600160a01b038235169190810190604081016020820135600160201b811115610c1f57600080fd5b820183602082011115610c3157600080fd5b803590602001918460208302840111600160201b83111715610c5257600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b811115610ca157600080fd5b820183602082011115610cb357600080fd5b803590602001918460208302840111600160201b83111715610cd457600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550611e41945050505050565b348015610d1e57600080fd5b506105b160048036036080811015610d3557600080fd5b6001600160a01b038235169160208101359160408201359190810190608081016060820135600160201b81111561053d57600080fd5b348015610d7757600080fd5b506105b160048036036040811015610d8e57600080fd5b810190602081018135600160201b811115610da857600080fd5b820183602082011115610dba57600080fd5b803590602001918460018302840111600160201b83111715610ddb57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550505090356001600160a01b03169150611eba9050565b348015610e3357600080fd5b506105b1611fc8565b348015610e4857600080fd5b50610e6c60048036036040811015610e5f57600080fd5b5080359060200135612037565b604080516001600160a01b039092168252519081900360200190f35b348015610e9457600080fd5b5061023860048036036040811015610eab57600080fd5b50803590602001356001600160a01b031661205c565b348015610ecd57600080fd5b506101f261207a565b348015610ee257600080fd5b506105b160048036036040811015610ef957600080fd5b506001600160a01b038135169060200135151561207f565b348015610f1d57600080fd5b506101f261216e565b348015610f3257600080fd5b506101f260048036036020811015610f4957600080fd5b5035612194565b348015610f5c57600080fd5b506105b160048036036040811015610f7357600080fd5b6001600160a01b038235169190810190604081016020820135600160201b811115610f9d57600080fd5b820183602082011115610faf57600080fd5b803590602001918460018302840111600160201b83111715610fd057600080fd5b5090925090506121ab565b348015610fe757600080fd5b506101f2612412565b348015610ffc57600080fd5b506105b16004803603604081101561101357600080fd5b50803590602001356001600160a01b0316612435565b34801561103557600080fd5b506101f261248e565b34801561104a57600080fd5b506102386004803603604081101561106157600080fd5b506001600160a01b03813581169160200135166124b1565b34801561108557600080fd5b506105b1600480360360a081101561109c57600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359181019060a081016080820135600160201b8111156110db57600080fd5b8201836020820111156110ed57600080fd5b803590602001918460018302840111600160201b8311171561110e57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506124df945050505050565b34801561115b57600080fd5b506105b16004803603606081101561117257600080fd5b506001600160a01b03813516906020810135906040013561269e565b34801561119a57600080fd5b506105b1600480360360208110156111b157600080fd5b810190602081018135600160201b8111156111cb57600080fd5b8201836020820111156111dd57600080fd5b803590602001918460018302840111600160201b831117156111fe57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550612712945050505050565b60006001600160a01b0383166112865760405162461bcd60e51b815260040180806020018281038252602b81526020018061418c602b913960400191505060405180910390fd5b5060008181526097602090815260408083206001600160a01b03861684529091529020545b92915050565b6001600160e01b03191660009081526065602052604090205460ff1690565b6101936020526000908152604090205460ff1681565b60606112f0613fdc565b50604080516060810182526001600160a01b038816600081815261019260209081529084902054835282015290810186905261132f87828787876127bd565b61136a5760405162461bcd60e51b815260040180806020018281038252602181526020018061446f6021913960400191505060405180910390fd5b6001600160a01b0387166000908152610192602052604090205461139590600163ffffffff61289a16565b6001600160a01b0388166000818152610192602090815260408083209490945583519283523383820181905260609484018581528b51958501959095528a517f5845892132946850460bff5a0083f71031bc5bf9aadcd40f1de79423eac9b10b958d9592948d94919260808501928601918190849084905b8381101561142557818101518382015260200161140d565b50505050905090810190601f1680156114525780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a160006060306001600160a01b0316888a6040516020018083805190602001908083835b602083106114a35780518252601f199092019160209182019101611484565b6001836020036101000a038019825116818451168082178552505050505050905001826001600160a01b03166001600160a01b031660601b8152601401925050506040516020818303038152906040526040518082805190602001908083835b602083106115225780518252601f199092019160209182019101611503565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611584576040519150601f19603f3d011682016040523d82523d6000602084013e611589565b606091505b5091509150816115df576040805162461bcd60e51b815260206004820152601c60248201527b119d5b98dd1a5bdb8818d85b1b081b9bdd081cdd58d8d95cdcd99d5b60221b604482015290519081900360640190fd5b98975050505050505050565b60998054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156116775780601f1061164c57610100808354040283529160200191611677565b820191906000526020600020905b81548152906001019060200180831161165a57829003601f168201915b50505050509050919050565b604051806040016040528060018152602001603160f81b81525081565b60405162461bcd60e51b81526004018080602001828103825260338152602001806143ef6033913960400191505060405180910390fd5b50505050565b610191545b90565b6116f76116f06128f2565b83836128f6565b5050565b60009081526033602052604090206002015490565b6001600160a01b03166000908152610192602052604090205490565b815183511461176c5760405162461bcd60e51b81526004018080602001828103825260288152602001806145cc6028913960400191505060405180910390fd5b6001600160a01b0384166117b15760405162461bcd60e51b815260040180806020018281038252602581526020018061436a6025913960400191505060405180910390fd5b6117b96128f2565b6001600160a01b0316856001600160a01b031614806117e457506117e4856117df6128f2565b6124b1565b61181f5760405162461bcd60e51b815260040180806020018281038252603281526020018061438f6032913960400191505060405180910390fd5b60006118296128f2565b9050611839818787878787612a1d565b60005b845181101561193f57600085828151811061185357fe5b60200260200101519050600085838151811061186b57fe5b602002602001015190506118d8816040518060600160405280602a8152602001614445602a91396097600086815260200190815260200160002060008d6001600160a01b03166001600160a01b0316815260200190815260200160002054612a2b9092919063ffffffff16565b60008381526097602090815260408083206001600160a01b038e811685529252808320939093558a168152205461190f908261289a565b60009283526097602090815260408085206001600160a01b038c168652909152909220919091555060010161183c565b50846001600160a01b0316866001600160a01b0316826001600160a01b031660008051602061409f8339815191528787604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156119b357818101518382015260200161199b565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156119f25781810151838201526020016119da565b5050505090500194505050505060405180910390a4611a15818787878787612ac2565b505050505050565b600082815260336020526040902060020154611a4090611a3b6128f2565b61205c565b611a7b5760405162461bcd60e51b815260040180806020018281038252602f81526020018061413d602f913960400191505060405180910390fd5b6116f78282612dfe565b4690565b611a916128f2565b6001600160a01b0316816001600160a01b031614611ae05760405162461bcd60e51b815260040180806020018281038252602f815260200180614615602f913960400191505060405180910390fd5b6116f78282612e6d565b604080516a5041555345525f524f4c4560a81b8152905190819003600b019020611b1690611a3b6128f2565b611b515760405162461bcd60e51b815260040180806020018281038252603b815260200180614506603b913960400191505060405180910390fd5b611b59612edc565b565b60608151835114611b9d5760405162461bcd60e51b81526004018080602001828103825260298152602001806145a36029913960400191505060405180910390fd5b606083516001600160401b0381118015611bb657600080fd5b50604051908082528060200260200182016040528015611be0578160200160208202803683370190505b50905060005b8451811015611cd05760006001600160a01b0316858281518110611c0657fe5b60200260200101516001600160a01b03161415611c545760405162461bcd60e51b81526004018080602001828103825260318152602001806141b76031913960400191505060405180910390fd5b60976000858381518110611c6457fe5b602002602001015181526020019081526020016000206000868381518110611c8857fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002054828281518110611cbd57fe5b6020908102919091010152600101611be6565b509392505050565b6116d7611ce36128f2565b85858080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020808902828101820190935288825290935088925087918291850190849080828437600092019190915250612f7a92505050565b60fb5460ff1690565b611d636000611a3b6128f2565b611d9e5760405162461bcd60e51b81526004018080602001828103825260388152602001806144906038913960400191505060405180910390fd5b807f6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b836040518080602001828103825283818151815260200191508051906020019080838360005b83811015611dfe578181015183820152602001611de6565b50505050905090810190601f168015611e2b5780820380516001836020036101000a031916815260200191505b509250505060405180910390a26116f7826131d6565b611e496128f2565b6001600160a01b0316836001600160a01b03161480611e6f5750611e6f836117df6128f2565b611eaa5760405162461bcd60e51b81526004018080602001828103825260298152602001806142ec6029913960400191505060405180910390fd5b611eb5838383612f7a565b505050565b600054610100900460ff1680611ed35750611ed36131e9565b80611ee1575060005460ff16155b611f1c5760405162461bcd60e51b815260040180806020018281038252602e8152602001806143c1602e913960400191505060405180910390fd5b600054610100900460ff16158015611f47576000805460ff1961ff0019909116610100171660011790555b611f50836131ef565b604080516d4445504f5349544f525f524f4c4560901b8152905190819003600e019020611f7d9083611a7b565b611fb260405180604001604052806014815260200173536f757050756e6b436f6c6c65637469626c657360601b8152506132be565b8015611eb5576000805461ff0019169055505050565b604080516a5041555345525f524f4c4560a81b8152905190819003600b019020611ff490611a3b6128f2565b61202f5760405162461bcd60e51b81526004018080602001828103825260398152602001806145416039913960400191505060405180910390fd5b611b59613354565b6000828152603360205260408120612055908363ffffffff6133d516565b9392505050565b6000828152603360205260408120612055908363ffffffff6133e116565b600081565b816001600160a01b03166120916128f2565b6001600160a01b031614156120d75760405162461bcd60e51b815260040180806020018281038252602981526020018061457a6029913960400191505060405180910390fd5b80609860006120e46128f2565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff1916921515929092179091556121286128f2565b60408051841515815290516001600160a01b0392909216917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c319181900360200190a35050565b604080516d4445504f5349544f525f524f4c4560901b8152905190819003600e01902081565b60008181526033602052604081206112ab906133f6565b604080516d4445504f5349544f525f524f4c4560901b8152905190819003600e0190206121da90611a3b6128f2565b6122155760405162461bcd60e51b815260040180806020018281038252603e8152602001806144c8603e913960400191505060405180910390fd5b60608060608484606081101561222a57600080fd5b810190602081018135600160201b81111561224457600080fd5b82018360208201111561225657600080fd5b803590602001918460208302840111600160201b8311171561227757600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156122c657600080fd5b8201836020820111156122d857600080fd5b803590602001918460208302840111600160201b831117156122f957600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561234857600080fd5b82018360208201111561235a57600080fd5b803590602001918460018302840111600160201b8311171561237b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250979a50959850909650505050506001600160a01b0388161515915061240690505760405162461bcd60e51b815260040180806020018281038252602281526020018061424f6022913960400191505060405180910390fd5b611a1586848484613401565b604080516a4d494e5445525f524f4c4560a81b8152905190819003600b01902081565b60008281526033602052604090206002015461245390611a3b6128f2565b611ae05760405162461bcd60e51b81526004018080602001828103825260308152602001806143156030913960400191505060405180910390fd5b604080516a5041555345525f524f4c4560a81b8152905190819003600b01902081565b6001600160a01b03918216600090815260986020908152604080832093909416825291909152205460ff1690565b6001600160a01b0384166125245760405162461bcd60e51b815260040180806020018281038252602581526020018061436a6025913960400191505060405180910390fd5b61252c6128f2565b6001600160a01b0316856001600160a01b031614806125525750612552856117df6128f2565b61258d5760405162461bcd60e51b81526004018080602001828103825260298152602001806142ec6029913960400191505060405180910390fd5b60006125976128f2565b90506125b78187876125a888613644565b6125b188613644565b87612a1d565b612604836040518060600160405280602a8152602001614445602a913960008781526097602090815260408083206001600160a01b038d168452909152902054919063ffffffff612a2b16565b60008581526097602090815260408083206001600160a01b038b8116855292528083209390935587168152205461263b908461289a565b60008581526097602090815260408083206001600160a01b03808b168086529184529382902094909455805188815291820187905280518a84169386169260008051602061416c83398151915292908290030190a4611a15818787878787613688565b6126a66128f2565b6001600160a01b0316836001600160a01b031614806126cc57506126cc836117df6128f2565b6127075760405162461bcd60e51b81526004018080602001828103825260298152602001806142ec6029913960400191505060405180910390fd5b611eb58383836128f6565b600054610100900460ff168061272b575061272b6131e9565b80612739575060005460ff16155b6127745760405162461bcd60e51b815260040180806020018281038252602e8152602001806143c1602e913960400191505060405180910390fd5b600054610100900460ff1615801561279f576000805460ff1961ff0019909116610100171660011790555b6127a8826131ef565b80156116f7576000805461ff00191690555050565b60006001600160a01b0386166128045760405162461bcd60e51b81526004018080602001828103825260258152602001806143456025913960400191505060405180910390fd5b60016128176128128761381b565b6138a7565b83868660405160008152602001604052604051808581526020018460ff1660ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015612871573d6000803e3d6000fd5b505050602060405103516001600160a01b0316866001600160a01b031614905095945050505050565b600082820183811015612055576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b3390565b6001600160a01b03831661293b5760405162461bcd60e51b81526004018080602001828103825260238152602001806144226023913960400191505060405180910390fd5b60006129456128f2565b90506129758185600061295787613644565b61296087613644565b60405180602001604052806000815250612a1d565b6129c28260405180606001604052806024815260200161422b6024913960008681526097602090815260408083206001600160a01b038b168452909152902054919063ffffffff612a2b16565b60008481526097602090815260408083206001600160a01b03808a168086529184528285209590955581518881529283018790528151939490939086169260008051602061416c83398151915292908290030190a450505050565b611a158686868686866138f3565b60008184841115612aba5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612a7f578181015183820152602001612a67565b50505050905090810190601f168015612aac5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b612ad4846001600160a01b0316613945565b15611a1557836001600160a01b031663bc197c8187878686866040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b03168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b83811015612b74578181015183820152602001612b5c565b50505050905001848103835286818151815260200191508051906020019060200280838360005b83811015612bb3578181015183820152602001612b9b565b50505050905001848103825285818151815260200191508051906020019080838360005b83811015612bef578181015183820152602001612bd7565b50505050905090810190601f168015612c1c5780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600087803b158015612c4157600080fd5b505af1925050508015612c6657506040513d6020811015612c6157600080fd5b505160015b612da6576040516000815260443d1015612c8257506000612d1d565b60046000803e60005160e01c6308c379a08114612ca3576000915050612d1d565b60043d036004833e81513d60248201116001600160401b0382111715612cce57600092505050612d1d565b80830180516001600160401b03811115612cef576000945050505050612d1d565b8060208301013d8601811115612d0d57600095505050505050612d1d565b601f01601f191660405250925050505b80612d285750612d6f565b60405162461bcd60e51b8152602060048201818152835160248401528351849391928392604401919085019080838360008315612a7f578181015183820152602001612a67565b60405162461bcd60e51b81526004018080602001828103825260348152602001806140bf6034913960400191505060405180910390fd5b6001600160e01b0319811663bc197c8160e01b14612df55760405162461bcd60e51b81526004018080602001828103825260288152602001806141156028913960400191505060405180910390fd5b50505050505050565b6000828152603360205260409020612e1c908263ffffffff61394b16565b156116f757612e296128f2565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000828152603360205260409020612e8b908263ffffffff61396016565b156116f757612e986128f2565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b60fb5460ff16612f2a576040805162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015290519081900360640190fd5b60fb805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa612f5d6128f2565b604080516001600160a01b039092168252519081900360200190a1565b6001600160a01b038316612fbf5760405162461bcd60e51b81526004018080602001828103825260238152602001806144226023913960400191505060405180910390fd5b8051825114612fff5760405162461bcd60e51b81526004018080602001828103825260288152602001806145cc6028913960400191505060405180910390fd5b60006130096128f2565b905061302981856000868660405180602001604052806000815250612a1d565b60005b8351811015613107576130be83828151811061304457fe5b602002602001015160405180606001604052806024815260200161422b602491396097600088868151811061307557fe5b602002602001015181526020019081526020016000206000896001600160a01b03166001600160a01b0316815260200190815260200160002054612a2b9092919063ffffffff16565b609760008684815181106130ce57fe5b602090810291909101810151825281810192909252604090810160009081206001600160a01b038a16825290925290205560010161302c565b5060006001600160a01b0316846001600160a01b0316826001600160a01b031660008051602061409f8339815191528686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561317c578181015183820152602001613164565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156131bb5781810151838201526020016131a3565b5050505090500194505050505060405180910390a450505050565b80516116f7906099906020840190614006565b303b1590565b600054610100900460ff168061320857506132086131e9565b80613216575060005460ff16155b6132515760405162461bcd60e51b815260040180806020018281038252602e8152602001806143c1602e913960400191505060405180910390fd5b600054610100900460ff1615801561327c576000805460ff1961ff0019909116610100171660011790555b613284613975565b61328c613975565b613294613a17565b61329d82613ab4565b6132a5613975565b6132ad613b6a565b6132b5613975565b6127a882613c15565b600054610100900460ff16806132d757506132d76131e9565b806132e5575060005460ff16155b6133205760405162461bcd60e51b815260040180806020018281038252602e8152602001806143c1602e913960400191505060405180910390fd5b600054610100900460ff1615801561334b576000805460ff1961ff0019909116610100171660011790555b6127a882613d0c565b60fb5460ff161561339f576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b60fb805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258612f5d6128f2565b60006120558383613dc9565b6000612055836001600160a01b038416613e2d565b60006112ab82613e45565b6001600160a01b0384166134465760405162461bcd60e51b81526004018080602001828103825260218152602001806145f46021913960400191505060405180910390fd5b81518351146134865760405162461bcd60e51b81526004018080602001828103825260288152602001806145cc6028913960400191505060405180910390fd5b60006134906128f2565b90506134a181600087878787612a1d565b60005b84518110156135655761351c609760008784815181106134c057fe5b602002602001015181526020019081526020016000206000886001600160a01b03166001600160a01b031681526020019081526020016000205485838151811061350657fe5b602002602001015161289a90919063ffffffff16565b6097600087848151811061352c57fe5b602090810291909101810151825281810192909252604090810160009081206001600160a01b038b1682529092529020556001016134a4565b50846001600160a01b031660006001600160a01b0316826001600160a01b031660008051602061409f8339815191528787604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156135da5781810151838201526020016135c2565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015613619578181015183820152602001613601565b5050505090500194505050505060405180910390a461363d81600087878787612ac2565b5050505050565b60408051600180825281830190925260609182919060208083019080368337019050509050828160008151811061367757fe5b602090810291909101015292915050565b61369a846001600160a01b0316613945565b15611a1557836001600160a01b031663f23a6e6187878686866040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561373b578181015183820152602001613723565b50505050905090810190601f1680156137685780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600087803b15801561378b57600080fd5b505af19250505080156137b057506040513d60208110156137ab57600080fd5b505160015b6137cc576040516000815260443d1015612c8257506000612d1d565b6001600160e01b0319811663f23a6e6160e01b14612df55760405162461bcd60e51b81526004018080602001828103825260288152602001806141156028913960400191505060405180910390fd5b60006040518060800160405280604381526020016141e860439139805190602001208260000151836020015184604001518051906020012060405160200180858152602001848152602001836001600160a01b03166001600160a01b03168152602001828152602001945050505050604051602081830303815290604052805190602001209050919050565b60006138b16116dd565b82604051602001808061190160f01b81525060020183815260200182815260200192505050604051602081830303815290604052805190602001209050919050565b613901868686868686611a15565b613909611d4d565b15611a155760405162461bcd60e51b815260040180806020018281038252602c8152602001806142c0602c913960400191505060405180910390fd5b3b151590565b6000612055836001600160a01b038416613e49565b6000612055836001600160a01b038416613e93565b600054610100900460ff168061398e575061398e6131e9565b8061399c575060005460ff16155b6139d75760405162461bcd60e51b815260040180806020018281038252602e8152602001806143c1602e913960400191505060405180910390fd5b600054610100900460ff16158015613a02576000805460ff1961ff0019909116610100171660011790555b8015613a14576000805461ff00191690555b50565b600054610100900460ff1680613a305750613a306131e9565b80613a3e575060005460ff16155b613a795760405162461bcd60e51b815260040180806020018281038252602e8152602001806143c1602e913960400191505060405180910390fd5b600054610100900460ff16158015613aa4576000805460ff1961ff0019909116610100171660011790555b613a026301ffc9a760e01b613f59565b600054610100900460ff1680613acd5750613acd6131e9565b80613adb575060005460ff16155b613b165760405162461bcd60e51b815260040180806020018281038252602e8152602001806143c1602e913960400191505060405180910390fd5b600054610100900460ff16158015613b41576000805460ff1961ff0019909116610100171660011790555b613b4a826131d6565b613b5a636cdb3d1360e11b613f59565b6127a86303a24d0760e21b613f59565b600054610100900460ff1680613b835750613b836131e9565b80613b91575060005460ff16155b613bcc5760405162461bcd60e51b815260040180806020018281038252602e8152602001806143c1602e913960400191505060405180910390fd5b600054610100900460ff16158015613bf7576000805460ff1961ff0019909116610100171660011790555b60fb805460ff191690558015613a14576000805461ff001916905550565b600054610100900460ff1680613c2e5750613c2e6131e9565b80613c3c575060005460ff16155b613c775760405162461bcd60e51b815260040180806020018281038252602e8152602001806143c1602e913960400191505060405180910390fd5b600054610100900460ff16158015613ca2576000805460ff1961ff0019909116610100171660011790555b613cb46000613caf6128f2565b611a7b565b604080516a4d494e5445525f524f4c4560a81b8152905190819003600b019020613ce090613caf6128f2565b604080516a5041555345525f524f4c4560a81b8152905190819003600b0190206127a890613caf6128f2565b6040518060800160405280604f8152602001614271604f913980516020918201208251838301206040805180820190915260018152603160f81b930192909252907fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc630613d77611a85565b604080516020808201979097528082019590955260608501939093526001600160a01b03909116608084015260a0808401919091528151808403909101815260c0909201905280519101206101915550565b81546000908210613e0b5760405162461bcd60e51b81526004018080602001828103825260228152602001806140f36022913960400191505060405180910390fd5b826000018281548110613e1a57fe5b9060005260206000200154905092915050565b60009081526001919091016020526040902054151590565b5490565b6000613e558383613e2d565b613e8b575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556112ab565b5060006112ab565b60008181526001830160205260408120548015613f4f5783546000198083019190810190600090879083908110613ec657fe5b9060005260206000200154905080876000018481548110613ee357fe5b600091825260208083209091019290925582815260018981019092526040902090840190558654879080613f1357fe5b600190038181906000526020600020016000905590558660010160008781526020019081526020016000206000905560019450505050506112ab565b60009150506112ab565b6001600160e01b03198082161415613fb7576040805162461bcd60e51b815260206004820152601c60248201527b115490cc4d8d4e881a5b9d985b1a59081a5b9d195c999858d9481a5960221b604482015290519081900360640190fd5b6001600160e01b0319166000908152606560205260409020805460ff19166001179055565b60405180606001604052806000815260200160006001600160a01b03168152602001606081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061404757805160ff1916838001178555614074565b82800160010185558215614074579182015b82811115614074578251825591602001919060010190614059565b50614080929150614084565b5090565b6116e291905b80821115614080576000815560010161408a56fe4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb455243313135353a207472616e7366657220746f206e6f6e2045524331313535526563656976657220696d706c656d656e746572456e756d657261626c655365743a20696e646578206f7574206f6620626f756e6473455243313135353a204552433131353552656365697665722072656a656374656420746f6b656e73416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f206772616e74c3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62455243313135353a2062616c616e636520717565727920666f7220746865207a65726f2061646472657373455243313135353a2062617463682062616c616e636520717565727920666f7220746865207a65726f20616464726573734d6574615472616e73616374696f6e2875696e74323536206e6f6e63652c616464726573732066726f6d2c62797465732066756e6374696f6e5369676e617475726529455243313135353a206275726e20616d6f756e7420657863656564732062616c616e63654368696c64455243313135353a20494e56414c49445f4445504f5349545f55534552454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c6164647265737320766572696679696e67436f6e74726163742c627974657333322073616c7429455243313135355061757361626c653a20746f6b656e207472616e73666572207768696c6520706175736564455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f207265766f6b654e61746976654d6574615472616e73616374696f6e3a20494e56414c49445f5349474e4552455243313135353a207472616e7366657220746f20746865207a65726f2061646472657373455243313135353a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564536f617050756e6b436f6c6c65637469626c65733a2063616e6e6f74206d696e74206f6e206368696c6420636f6e7472616374455243313135353a206275726e2066726f6d20746865207a65726f2061646472657373455243313135353a20696e73756666696369656e742062616c616e636520666f72207472616e736665725369676e657220616e64207369676e617475726520646f206e6f74206d61746368536f617050756e6b436f6c6c65637469626c65733a206d75737420686176652061646d696e20726f6c6520746f206368616e676520757269536f617050756e6b436f6c6c65637469626c65733a206d7573742068617665206465706f7369746f7220726f6c6520746f206d616b65206465706f736974455243313135355072657365744d696e7465725061757365723a206d75737420686176652070617573657220726f6c6520746f20756e7061757365455243313135355072657365744d696e7465725061757365723a206d75737420686176652070617573657220726f6c6520746f207061757365455243313135353a2073657474696e6720617070726f76616c2073746174757320666f722073656c66455243313135353a206163636f756e747320616e6420696473206c656e677468206d69736d61746368455243313135353a2069647320616e6420616d6f756e7473206c656e677468206d69736d61746368455243313135353a206d696e7420746f20746865207a65726f2061646472657373416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636520726f6c657320666f722073656c66a26469706673582212200f1bac78c23fa261763ecfac68f290de2c95facfd65756c7f5e70d84a4db065964736f6c63430006060033",
  "deployedBytecode": "0x6080604052600436106101b45760003560e01c8062fdd58e146101b957806301ffc9a71461020457806307a974fc1461024c5780630c53c51c146102765780630e89341c146103ad5780630f7e5970146103d75780631f7fdffa146103ec57806320379ee5146105b35780632262f53f146105c8578063248a9ca3146105f85780632d0335ab146106225780632eb2c2d6146106555780632f2ff15d146108235780633408e4701461085c57806336568abe146108715780633f4ba83a146108aa5780634e1273f4146108bf5780635c5fb52114610a3f5780635c975abb14610b0a57806367db3b8f14610b1f5780636b20c45414610bd2578063731133e914610d125780637ab4339d14610d6b5780638456cb5914610e275780639010d07c14610e3c57806391d1485414610e88578063a217fddf14610ec1578063a22cb46514610ed6578063a3b0b5a314610f11578063ca15c87314610f26578063cf2c52cb14610f50578063d539139314610fdb578063d547741f14610ff0578063e63ab1e914611029578063e985e9c51461103e578063f242432a14611079578063f5298aca1461114f578063f62d18881461118e575b600080fd5b3480156101c557600080fd5b506101f2600480360360408110156101dc57600080fd5b506001600160a01b03813516906020013561123f565b60408051918252519081900360200190f35b34801561021057600080fd5b506102386004803603602081101561022757600080fd5b50356001600160e01b0319166112b1565b604080519115158252519081900360200190f35b34801561025857600080fd5b506102386004803603602081101561026f57600080fd5b50356112d0565b610338600480360360a081101561028c57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b8111156102b657600080fd5b8201836020820111156102c857600080fd5b803590602001918460018302840111600160201b831117156102e957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550508235935050506020810135906040013560ff166112e6565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561037257818101518382015260200161035a565b50505050905090810190601f16801561039f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156103b957600080fd5b50610338600480360360208110156103d057600080fd5b50356115eb565b3480156103e357600080fd5b50610338611683565b3480156103f857600080fd5b506105b16004803603608081101561040f57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561043957600080fd5b82018360208201111561044b57600080fd5b803590602001918460208302840111600160201b8311171561046c57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156104bb57600080fd5b8201836020820111156104cd57600080fd5b803590602001918460208302840111600160201b831117156104ee57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561053d57600080fd5b82018360208201111561054f57600080fd5b803590602001918460018302840111600160201b8311171561057057600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506116a0945050505050565b005b3480156105bf57600080fd5b506101f26116dd565b3480156105d457600080fd5b506105b1600480360360408110156105eb57600080fd5b50803590602001356116e5565b34801561060457600080fd5b506101f26004803603602081101561061b57600080fd5b50356116fb565b34801561062e57600080fd5b506101f26004803603602081101561064557600080fd5b50356001600160a01b0316611710565b34801561066157600080fd5b506105b1600480360360a081101561067857600080fd5b6001600160a01b038235811692602081013590911691810190606081016040820135600160201b8111156106ab57600080fd5b8201836020820111156106bd57600080fd5b803590602001918460208302840111600160201b831117156106de57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561072d57600080fd5b82018360208201111561073f57600080fd5b803590602001918460208302840111600160201b8311171561076057600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156107af57600080fd5b8201836020820111156107c157600080fd5b803590602001918460018302840111600160201b831117156107e257600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061172c945050505050565b34801561082f57600080fd5b506105b16004803603604081101561084657600080fd5b50803590602001356001600160a01b0316611a1d565b34801561086857600080fd5b506101f2611a85565b34801561087d57600080fd5b506105b16004803603604081101561089457600080fd5b50803590602001356001600160a01b0316611a89565b3480156108b657600080fd5b506105b1611aea565b3480156108cb57600080fd5b506109ef600480360360408110156108e257600080fd5b810190602081018135600160201b8111156108fc57600080fd5b82018360208201111561090e57600080fd5b803590602001918460208302840111600160201b8311171561092f57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561097e57600080fd5b82018360208201111561099057600080fd5b803590602001918460208302840111600160201b831117156109b157600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550611b5b945050505050565b60408051602080825283518183015283519192839290830191858101910280838360005b83811015610a2b578181015183820152602001610a13565b505050509050019250505060405180910390f35b348015610a4b57600080fd5b506105b160048036036040811015610a6257600080fd5b810190602081018135600160201b811115610a7c57600080fd5b820183602082011115610a8e57600080fd5b803590602001918460208302840111600160201b83111715610aaf57600080fd5b919390929091602081019035600160201b811115610acc57600080fd5b820183602082011115610ade57600080fd5b803590602001918460208302840111600160201b83111715610aff57600080fd5b509092509050611cd8565b348015610b1657600080fd5b50610238611d4d565b348015610b2b57600080fd5b506105b160048036036040811015610b4257600080fd5b810190602081018135600160201b811115610b5c57600080fd5b820183602082011115610b6e57600080fd5b803590602001918460018302840111600160201b83111715610b8f57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505091359250611d56915050565b348015610bde57600080fd5b506105b160048036036060811015610bf557600080fd5b6001600160a01b038235169190810190604081016020820135600160201b811115610c1f57600080fd5b820183602082011115610c3157600080fd5b803590602001918460208302840111600160201b83111715610c5257600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b811115610ca157600080fd5b820183602082011115610cb357600080fd5b803590602001918460208302840111600160201b83111715610cd457600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550611e41945050505050565b348015610d1e57600080fd5b506105b160048036036080811015610d3557600080fd5b6001600160a01b038235169160208101359160408201359190810190608081016060820135600160201b81111561053d57600080fd5b348015610d7757600080fd5b506105b160048036036040811015610d8e57600080fd5b810190602081018135600160201b811115610da857600080fd5b820183602082011115610dba57600080fd5b803590602001918460018302840111600160201b83111715610ddb57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550505090356001600160a01b03169150611eba9050565b348015610e3357600080fd5b506105b1611fc8565b348015610e4857600080fd5b50610e6c60048036036040811015610e5f57600080fd5b5080359060200135612037565b604080516001600160a01b039092168252519081900360200190f35b348015610e9457600080fd5b5061023860048036036040811015610eab57600080fd5b50803590602001356001600160a01b031661205c565b348015610ecd57600080fd5b506101f261207a565b348015610ee257600080fd5b506105b160048036036040811015610ef957600080fd5b506001600160a01b038135169060200135151561207f565b348015610f1d57600080fd5b506101f261216e565b348015610f3257600080fd5b506101f260048036036020811015610f4957600080fd5b5035612194565b348015610f5c57600080fd5b506105b160048036036040811015610f7357600080fd5b6001600160a01b038235169190810190604081016020820135600160201b811115610f9d57600080fd5b820183602082011115610faf57600080fd5b803590602001918460018302840111600160201b83111715610fd057600080fd5b5090925090506121ab565b348015610fe757600080fd5b506101f2612412565b348015610ffc57600080fd5b506105b16004803603604081101561101357600080fd5b50803590602001356001600160a01b0316612435565b34801561103557600080fd5b506101f261248e565b34801561104a57600080fd5b506102386004803603604081101561106157600080fd5b506001600160a01b03813581169160200135166124b1565b34801561108557600080fd5b506105b1600480360360a081101561109c57600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359181019060a081016080820135600160201b8111156110db57600080fd5b8201836020820111156110ed57600080fd5b803590602001918460018302840111600160201b8311171561110e57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506124df945050505050565b34801561115b57600080fd5b506105b16004803603606081101561117257600080fd5b506001600160a01b03813516906020810135906040013561269e565b34801561119a57600080fd5b506105b1600480360360208110156111b157600080fd5b810190602081018135600160201b8111156111cb57600080fd5b8201836020820111156111dd57600080fd5b803590602001918460018302840111600160201b831117156111fe57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550612712945050505050565b60006001600160a01b0383166112865760405162461bcd60e51b815260040180806020018281038252602b81526020018061418c602b913960400191505060405180910390fd5b5060008181526097602090815260408083206001600160a01b03861684529091529020545b92915050565b6001600160e01b03191660009081526065602052604090205460ff1690565b6101936020526000908152604090205460ff1681565b60606112f0613fdc565b50604080516060810182526001600160a01b038816600081815261019260209081529084902054835282015290810186905261132f87828787876127bd565b61136a5760405162461bcd60e51b815260040180806020018281038252602181526020018061446f6021913960400191505060405180910390fd5b6001600160a01b0387166000908152610192602052604090205461139590600163ffffffff61289a16565b6001600160a01b0388166000818152610192602090815260408083209490945583519283523383820181905260609484018581528b51958501959095528a517f5845892132946850460bff5a0083f71031bc5bf9aadcd40f1de79423eac9b10b958d9592948d94919260808501928601918190849084905b8381101561142557818101518382015260200161140d565b50505050905090810190601f1680156114525780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a160006060306001600160a01b0316888a6040516020018083805190602001908083835b602083106114a35780518252601f199092019160209182019101611484565b6001836020036101000a038019825116818451168082178552505050505050905001826001600160a01b03166001600160a01b031660601b8152601401925050506040516020818303038152906040526040518082805190602001908083835b602083106115225780518252601f199092019160209182019101611503565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611584576040519150601f19603f3d011682016040523d82523d6000602084013e611589565b606091505b5091509150816115df576040805162461bcd60e51b815260206004820152601c60248201527b119d5b98dd1a5bdb8818d85b1b081b9bdd081cdd58d8d95cdcd99d5b60221b604482015290519081900360640190fd5b98975050505050505050565b60998054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156116775780601f1061164c57610100808354040283529160200191611677565b820191906000526020600020905b81548152906001019060200180831161165a57829003601f168201915b50505050509050919050565b604051806040016040528060018152602001603160f81b81525081565b60405162461bcd60e51b81526004018080602001828103825260338152602001806143ef6033913960400191505060405180910390fd5b50505050565b610191545b90565b6116f76116f06128f2565b83836128f6565b5050565b60009081526033602052604090206002015490565b6001600160a01b03166000908152610192602052604090205490565b815183511461176c5760405162461bcd60e51b81526004018080602001828103825260288152602001806145cc6028913960400191505060405180910390fd5b6001600160a01b0384166117b15760405162461bcd60e51b815260040180806020018281038252602581526020018061436a6025913960400191505060405180910390fd5b6117b96128f2565b6001600160a01b0316856001600160a01b031614806117e457506117e4856117df6128f2565b6124b1565b61181f5760405162461bcd60e51b815260040180806020018281038252603281526020018061438f6032913960400191505060405180910390fd5b60006118296128f2565b9050611839818787878787612a1d565b60005b845181101561193f57600085828151811061185357fe5b60200260200101519050600085838151811061186b57fe5b602002602001015190506118d8816040518060600160405280602a8152602001614445602a91396097600086815260200190815260200160002060008d6001600160a01b03166001600160a01b0316815260200190815260200160002054612a2b9092919063ffffffff16565b60008381526097602090815260408083206001600160a01b038e811685529252808320939093558a168152205461190f908261289a565b60009283526097602090815260408085206001600160a01b038c168652909152909220919091555060010161183c565b50846001600160a01b0316866001600160a01b0316826001600160a01b031660008051602061409f8339815191528787604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156119b357818101518382015260200161199b565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156119f25781810151838201526020016119da565b5050505090500194505050505060405180910390a4611a15818787878787612ac2565b505050505050565b600082815260336020526040902060020154611a4090611a3b6128f2565b61205c565b611a7b5760405162461bcd60e51b815260040180806020018281038252602f81526020018061413d602f913960400191505060405180910390fd5b6116f78282612dfe565b4690565b611a916128f2565b6001600160a01b0316816001600160a01b031614611ae05760405162461bcd60e51b815260040180806020018281038252602f815260200180614615602f913960400191505060405180910390fd5b6116f78282612e6d565b604080516a5041555345525f524f4c4560a81b8152905190819003600b019020611b1690611a3b6128f2565b611b515760405162461bcd60e51b815260040180806020018281038252603b815260200180614506603b913960400191505060405180910390fd5b611b59612edc565b565b60608151835114611b9d5760405162461bcd60e51b81526004018080602001828103825260298152602001806145a36029913960400191505060405180910390fd5b606083516001600160401b0381118015611bb657600080fd5b50604051908082528060200260200182016040528015611be0578160200160208202803683370190505b50905060005b8451811015611cd05760006001600160a01b0316858281518110611c0657fe5b60200260200101516001600160a01b03161415611c545760405162461bcd60e51b81526004018080602001828103825260318152602001806141b76031913960400191505060405180910390fd5b60976000858381518110611c6457fe5b602002602001015181526020019081526020016000206000868381518110611c8857fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002054828281518110611cbd57fe5b6020908102919091010152600101611be6565b509392505050565b6116d7611ce36128f2565b85858080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020808902828101820190935288825290935088925087918291850190849080828437600092019190915250612f7a92505050565b60fb5460ff1690565b611d636000611a3b6128f2565b611d9e5760405162461bcd60e51b81526004018080602001828103825260388152602001806144906038913960400191505060405180910390fd5b807f6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b836040518080602001828103825283818151815260200191508051906020019080838360005b83811015611dfe578181015183820152602001611de6565b50505050905090810190601f168015611e2b5780820380516001836020036101000a031916815260200191505b509250505060405180910390a26116f7826131d6565b611e496128f2565b6001600160a01b0316836001600160a01b03161480611e6f5750611e6f836117df6128f2565b611eaa5760405162461bcd60e51b81526004018080602001828103825260298152602001806142ec6029913960400191505060405180910390fd5b611eb5838383612f7a565b505050565b600054610100900460ff1680611ed35750611ed36131e9565b80611ee1575060005460ff16155b611f1c5760405162461bcd60e51b815260040180806020018281038252602e8152602001806143c1602e913960400191505060405180910390fd5b600054610100900460ff16158015611f47576000805460ff1961ff0019909116610100171660011790555b611f50836131ef565b604080516d4445504f5349544f525f524f4c4560901b8152905190819003600e019020611f7d9083611a7b565b611fb260405180604001604052806014815260200173536f757050756e6b436f6c6c65637469626c657360601b8152506132be565b8015611eb5576000805461ff0019169055505050565b604080516a5041555345525f524f4c4560a81b8152905190819003600b019020611ff490611a3b6128f2565b61202f5760405162461bcd60e51b81526004018080602001828103825260398152602001806145416039913960400191505060405180910390fd5b611b59613354565b6000828152603360205260408120612055908363ffffffff6133d516565b9392505050565b6000828152603360205260408120612055908363ffffffff6133e116565b600081565b816001600160a01b03166120916128f2565b6001600160a01b031614156120d75760405162461bcd60e51b815260040180806020018281038252602981526020018061457a6029913960400191505060405180910390fd5b80609860006120e46128f2565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff1916921515929092179091556121286128f2565b60408051841515815290516001600160a01b0392909216917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c319181900360200190a35050565b604080516d4445504f5349544f525f524f4c4560901b8152905190819003600e01902081565b60008181526033602052604081206112ab906133f6565b604080516d4445504f5349544f525f524f4c4560901b8152905190819003600e0190206121da90611a3b6128f2565b6122155760405162461bcd60e51b815260040180806020018281038252603e8152602001806144c8603e913960400191505060405180910390fd5b60608060608484606081101561222a57600080fd5b810190602081018135600160201b81111561224457600080fd5b82018360208201111561225657600080fd5b803590602001918460208302840111600160201b8311171561227757600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156122c657600080fd5b8201836020820111156122d857600080fd5b803590602001918460208302840111600160201b831117156122f957600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561234857600080fd5b82018360208201111561235a57600080fd5b803590602001918460018302840111600160201b8311171561237b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250979a50959850909650505050506001600160a01b0388161515915061240690505760405162461bcd60e51b815260040180806020018281038252602281526020018061424f6022913960400191505060405180910390fd5b611a1586848484613401565b604080516a4d494e5445525f524f4c4560a81b8152905190819003600b01902081565b60008281526033602052604090206002015461245390611a3b6128f2565b611ae05760405162461bcd60e51b81526004018080602001828103825260308152602001806143156030913960400191505060405180910390fd5b604080516a5041555345525f524f4c4560a81b8152905190819003600b01902081565b6001600160a01b03918216600090815260986020908152604080832093909416825291909152205460ff1690565b6001600160a01b0384166125245760405162461bcd60e51b815260040180806020018281038252602581526020018061436a6025913960400191505060405180910390fd5b61252c6128f2565b6001600160a01b0316856001600160a01b031614806125525750612552856117df6128f2565b61258d5760405162461bcd60e51b81526004018080602001828103825260298152602001806142ec6029913960400191505060405180910390fd5b60006125976128f2565b90506125b78187876125a888613644565b6125b188613644565b87612a1d565b612604836040518060600160405280602a8152602001614445602a913960008781526097602090815260408083206001600160a01b038d168452909152902054919063ffffffff612a2b16565b60008581526097602090815260408083206001600160a01b038b8116855292528083209390935587168152205461263b908461289a565b60008581526097602090815260408083206001600160a01b03808b168086529184529382902094909455805188815291820187905280518a84169386169260008051602061416c83398151915292908290030190a4611a15818787878787613688565b6126a66128f2565b6001600160a01b0316836001600160a01b031614806126cc57506126cc836117df6128f2565b6127075760405162461bcd60e51b81526004018080602001828103825260298152602001806142ec6029913960400191505060405180910390fd5b611eb58383836128f6565b600054610100900460ff168061272b575061272b6131e9565b80612739575060005460ff16155b6127745760405162461bcd60e51b815260040180806020018281038252602e8152602001806143c1602e913960400191505060405180910390fd5b600054610100900460ff1615801561279f576000805460ff1961ff0019909116610100171660011790555b6127a8826131ef565b80156116f7576000805461ff00191690555050565b60006001600160a01b0386166128045760405162461bcd60e51b81526004018080602001828103825260258152602001806143456025913960400191505060405180910390fd5b60016128176128128761381b565b6138a7565b83868660405160008152602001604052604051808581526020018460ff1660ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015612871573d6000803e3d6000fd5b505050602060405103516001600160a01b0316866001600160a01b031614905095945050505050565b600082820183811015612055576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b3390565b6001600160a01b03831661293b5760405162461bcd60e51b81526004018080602001828103825260238152602001806144226023913960400191505060405180910390fd5b60006129456128f2565b90506129758185600061295787613644565b61296087613644565b60405180602001604052806000815250612a1d565b6129c28260405180606001604052806024815260200161422b6024913960008681526097602090815260408083206001600160a01b038b168452909152902054919063ffffffff612a2b16565b60008481526097602090815260408083206001600160a01b03808a168086529184528285209590955581518881529283018790528151939490939086169260008051602061416c83398151915292908290030190a450505050565b611a158686868686866138f3565b60008184841115612aba5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612a7f578181015183820152602001612a67565b50505050905090810190601f168015612aac5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b612ad4846001600160a01b0316613945565b15611a1557836001600160a01b031663bc197c8187878686866040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b03168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b83811015612b74578181015183820152602001612b5c565b50505050905001848103835286818151815260200191508051906020019060200280838360005b83811015612bb3578181015183820152602001612b9b565b50505050905001848103825285818151815260200191508051906020019080838360005b83811015612bef578181015183820152602001612bd7565b50505050905090810190601f168015612c1c5780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600087803b158015612c4157600080fd5b505af1925050508015612c6657506040513d6020811015612c6157600080fd5b505160015b612da6576040516000815260443d1015612c8257506000612d1d565b60046000803e60005160e01c6308c379a08114612ca3576000915050612d1d565b60043d036004833e81513d60248201116001600160401b0382111715612cce57600092505050612d1d565b80830180516001600160401b03811115612cef576000945050505050612d1d565b8060208301013d8601811115612d0d57600095505050505050612d1d565b601f01601f191660405250925050505b80612d285750612d6f565b60405162461bcd60e51b8152602060048201818152835160248401528351849391928392604401919085019080838360008315612a7f578181015183820152602001612a67565b60405162461bcd60e51b81526004018080602001828103825260348152602001806140bf6034913960400191505060405180910390fd5b6001600160e01b0319811663bc197c8160e01b14612df55760405162461bcd60e51b81526004018080602001828103825260288152602001806141156028913960400191505060405180910390fd5b50505050505050565b6000828152603360205260409020612e1c908263ffffffff61394b16565b156116f757612e296128f2565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000828152603360205260409020612e8b908263ffffffff61396016565b156116f757612e986128f2565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b60fb5460ff16612f2a576040805162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015290519081900360640190fd5b60fb805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa612f5d6128f2565b604080516001600160a01b039092168252519081900360200190a1565b6001600160a01b038316612fbf5760405162461bcd60e51b81526004018080602001828103825260238152602001806144226023913960400191505060405180910390fd5b8051825114612fff5760405162461bcd60e51b81526004018080602001828103825260288152602001806145cc6028913960400191505060405180910390fd5b60006130096128f2565b905061302981856000868660405180602001604052806000815250612a1d565b60005b8351811015613107576130be83828151811061304457fe5b602002602001015160405180606001604052806024815260200161422b602491396097600088868151811061307557fe5b602002602001015181526020019081526020016000206000896001600160a01b03166001600160a01b0316815260200190815260200160002054612a2b9092919063ffffffff16565b609760008684815181106130ce57fe5b602090810291909101810151825281810192909252604090810160009081206001600160a01b038a16825290925290205560010161302c565b5060006001600160a01b0316846001600160a01b0316826001600160a01b031660008051602061409f8339815191528686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561317c578181015183820152602001613164565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156131bb5781810151838201526020016131a3565b5050505090500194505050505060405180910390a450505050565b80516116f7906099906020840190614006565b303b1590565b600054610100900460ff168061320857506132086131e9565b80613216575060005460ff16155b6132515760405162461bcd60e51b815260040180806020018281038252602e8152602001806143c1602e913960400191505060405180910390fd5b600054610100900460ff1615801561327c576000805460ff1961ff0019909116610100171660011790555b613284613975565b61328c613975565b613294613a17565b61329d82613ab4565b6132a5613975565b6132ad613b6a565b6132b5613975565b6127a882613c15565b600054610100900460ff16806132d757506132d76131e9565b806132e5575060005460ff16155b6133205760405162461bcd60e51b815260040180806020018281038252602e8152602001806143c1602e913960400191505060405180910390fd5b600054610100900460ff1615801561334b576000805460ff1961ff0019909116610100171660011790555b6127a882613d0c565b60fb5460ff161561339f576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b60fb805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258612f5d6128f2565b60006120558383613dc9565b6000612055836001600160a01b038416613e2d565b60006112ab82613e45565b6001600160a01b0384166134465760405162461bcd60e51b81526004018080602001828103825260218152602001806145f46021913960400191505060405180910390fd5b81518351146134865760405162461bcd60e51b81526004018080602001828103825260288152602001806145cc6028913960400191505060405180910390fd5b60006134906128f2565b90506134a181600087878787612a1d565b60005b84518110156135655761351c609760008784815181106134c057fe5b602002602001015181526020019081526020016000206000886001600160a01b03166001600160a01b031681526020019081526020016000205485838151811061350657fe5b602002602001015161289a90919063ffffffff16565b6097600087848151811061352c57fe5b602090810291909101810151825281810192909252604090810160009081206001600160a01b038b1682529092529020556001016134a4565b50846001600160a01b031660006001600160a01b0316826001600160a01b031660008051602061409f8339815191528787604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156135da5781810151838201526020016135c2565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015613619578181015183820152602001613601565b5050505090500194505050505060405180910390a461363d81600087878787612ac2565b5050505050565b60408051600180825281830190925260609182919060208083019080368337019050509050828160008151811061367757fe5b602090810291909101015292915050565b61369a846001600160a01b0316613945565b15611a1557836001600160a01b031663f23a6e6187878686866040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561373b578181015183820152602001613723565b50505050905090810190601f1680156137685780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600087803b15801561378b57600080fd5b505af19250505080156137b057506040513d60208110156137ab57600080fd5b505160015b6137cc576040516000815260443d1015612c8257506000612d1d565b6001600160e01b0319811663f23a6e6160e01b14612df55760405162461bcd60e51b81526004018080602001828103825260288152602001806141156028913960400191505060405180910390fd5b60006040518060800160405280604381526020016141e860439139805190602001208260000151836020015184604001518051906020012060405160200180858152602001848152602001836001600160a01b03166001600160a01b03168152602001828152602001945050505050604051602081830303815290604052805190602001209050919050565b60006138b16116dd565b82604051602001808061190160f01b81525060020183815260200182815260200192505050604051602081830303815290604052805190602001209050919050565b613901868686868686611a15565b613909611d4d565b15611a155760405162461bcd60e51b815260040180806020018281038252602c8152602001806142c0602c913960400191505060405180910390fd5b3b151590565b6000612055836001600160a01b038416613e49565b6000612055836001600160a01b038416613e93565b600054610100900460ff168061398e575061398e6131e9565b8061399c575060005460ff16155b6139d75760405162461bcd60e51b815260040180806020018281038252602e8152602001806143c1602e913960400191505060405180910390fd5b600054610100900460ff16158015613a02576000805460ff1961ff0019909116610100171660011790555b8015613a14576000805461ff00191690555b50565b600054610100900460ff1680613a305750613a306131e9565b80613a3e575060005460ff16155b613a795760405162461bcd60e51b815260040180806020018281038252602e8152602001806143c1602e913960400191505060405180910390fd5b600054610100900460ff16158015613aa4576000805460ff1961ff0019909116610100171660011790555b613a026301ffc9a760e01b613f59565b600054610100900460ff1680613acd5750613acd6131e9565b80613adb575060005460ff16155b613b165760405162461bcd60e51b815260040180806020018281038252602e8152602001806143c1602e913960400191505060405180910390fd5b600054610100900460ff16158015613b41576000805460ff1961ff0019909116610100171660011790555b613b4a826131d6565b613b5a636cdb3d1360e11b613f59565b6127a86303a24d0760e21b613f59565b600054610100900460ff1680613b835750613b836131e9565b80613b91575060005460ff16155b613bcc5760405162461bcd60e51b815260040180806020018281038252602e8152602001806143c1602e913960400191505060405180910390fd5b600054610100900460ff16158015613bf7576000805460ff1961ff0019909116610100171660011790555b60fb805460ff191690558015613a14576000805461ff001916905550565b600054610100900460ff1680613c2e5750613c2e6131e9565b80613c3c575060005460ff16155b613c775760405162461bcd60e51b815260040180806020018281038252602e8152602001806143c1602e913960400191505060405180910390fd5b600054610100900460ff16158015613ca2576000805460ff1961ff0019909116610100171660011790555b613cb46000613caf6128f2565b611a7b565b604080516a4d494e5445525f524f4c4560a81b8152905190819003600b019020613ce090613caf6128f2565b604080516a5041555345525f524f4c4560a81b8152905190819003600b0190206127a890613caf6128f2565b6040518060800160405280604f8152602001614271604f913980516020918201208251838301206040805180820190915260018152603160f81b930192909252907fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc630613d77611a85565b604080516020808201979097528082019590955260608501939093526001600160a01b03909116608084015260a0808401919091528151808403909101815260c0909201905280519101206101915550565b81546000908210613e0b5760405162461bcd60e51b81526004018080602001828103825260228152602001806140f36022913960400191505060405180910390fd5b826000018281548110613e1a57fe5b9060005260206000200154905092915050565b60009081526001919091016020526040902054151590565b5490565b6000613e558383613e2d565b613e8b575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556112ab565b5060006112ab565b60008181526001830160205260408120548015613f4f5783546000198083019190810190600090879083908110613ec657fe5b9060005260206000200154905080876000018481548110613ee357fe5b600091825260208083209091019290925582815260018981019092526040902090840190558654879080613f1357fe5b600190038181906000526020600020016000905590558660010160008781526020019081526020016000206000905560019450505050506112ab565b60009150506112ab565b6001600160e01b03198082161415613fb7576040805162461bcd60e51b815260206004820152601c60248201527b115490cc4d8d4e881a5b9d985b1a59081a5b9d195c999858d9481a5960221b604482015290519081900360640190fd5b6001600160e01b0319166000908152606560205260409020805460ff19166001179055565b60405180606001604052806000815260200160006001600160a01b03168152602001606081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061404757805160ff1916838001178555614074565b82800160010185558215614074579182015b82811115614074578251825591602001919060010190614059565b50614080929150614084565b5090565b6116e291905b80821115614080576000815560010161408a56fe4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb455243313135353a207472616e7366657220746f206e6f6e2045524331313535526563656976657220696d706c656d656e746572456e756d657261626c655365743a20696e646578206f7574206f6620626f756e6473455243313135353a204552433131353552656365697665722072656a656374656420746f6b656e73416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f206772616e74c3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62455243313135353a2062616c616e636520717565727920666f7220746865207a65726f2061646472657373455243313135353a2062617463682062616c616e636520717565727920666f7220746865207a65726f20616464726573734d6574615472616e73616374696f6e2875696e74323536206e6f6e63652c616464726573732066726f6d2c62797465732066756e6374696f6e5369676e617475726529455243313135353a206275726e20616d6f756e7420657863656564732062616c616e63654368696c64455243313135353a20494e56414c49445f4445504f5349545f55534552454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c6164647265737320766572696679696e67436f6e74726163742c627974657333322073616c7429455243313135355061757361626c653a20746f6b656e207472616e73666572207768696c6520706175736564455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f207265766f6b654e61746976654d6574615472616e73616374696f6e3a20494e56414c49445f5349474e4552455243313135353a207472616e7366657220746f20746865207a65726f2061646472657373455243313135353a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564536f617050756e6b436f6c6c65637469626c65733a2063616e6e6f74206d696e74206f6e206368696c6420636f6e7472616374455243313135353a206275726e2066726f6d20746865207a65726f2061646472657373455243313135353a20696e73756666696369656e742062616c616e636520666f72207472616e736665725369676e657220616e64207369676e617475726520646f206e6f74206d61746368536f617050756e6b436f6c6c65637469626c65733a206d75737420686176652061646d696e20726f6c6520746f206368616e676520757269536f617050756e6b436f6c6c65637469626c65733a206d7573742068617665206465706f7369746f7220726f6c6520746f206d616b65206465706f736974455243313135355072657365744d696e7465725061757365723a206d75737420686176652070617573657220726f6c6520746f20756e7061757365455243313135355072657365744d696e7465725061757365723a206d75737420686176652070617573657220726f6c6520746f207061757365455243313135353a2073657474696e6720617070726f76616c2073746174757320666f722073656c66455243313135353a206163636f756e747320616e6420696473206c656e677468206d69736d61746368455243313135353a2069647320616e6420616d6f756e7473206c656e677468206d69736d61746368455243313135353a206d696e7420746f20746865207a65726f2061646472657373416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636520726f6c657320666f722073656c66a26469706673582212200f1bac78c23fa261763ecfac68f290de2c95facfd65756c7f5e70d84a4db065964736f6c63430006060033",
  "immutableReferences": {},
  "sourceMap": "259:2988:5:-:0;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;259:2988:5;;;;;;;",
  "deployedSourceMap": "259:2988:5:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12:1:-1;9;2:12;3387:220:15;;5:9:-1;2:2;;;27:1;24;17:12;2:2;3387:220:15;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;;;;;;3387:220:15;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;1159:140:8;;5:9:-1;2:2;;;27:1;24;17:12;2:2;1159:140:8;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;1159:140:8;-1:-1:-1;;;;;;1159:140:8;;:::i;:::-;;;;;;;;;;;;;;;;;;463:48:5;;5:9:-1;2:2;;;27:1;24;17:12;2:2;463:48:5;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;463:48:5;;:::i;980:1108:2:-;;;;;;15:3:-1;10;7:12;4:2;;;32:1;29;22:12;4:2;-1:-1;;;;;980:1108:2;;;;;;;;;;;;;;;-1:-1:-1;;;11:28;;8:2;;;52:1;49;42:12;8:2;980:1108:2;;41:9:-1;34:4;18:14;14:25;11:40;8:2;;;64:1;61;54:12;8:2;980:1108:2;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;-1:-1;;;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;980:1108:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;980:1108:2;;-1:-1:-1;;980:1108:2;;;-1:-1:-1;;;980:1108:2;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;980:1108:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3148:97:15;;5:9:-1;2:2;;;27:1;24;17:12;2:2;3148:97:15;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;3148:97:15;;:::i;294:43:1:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;294:43:1;;;:::i;1272:234:5:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;1272:234:5;;;;;;15:3:-1;10;7:12;4:2;;;32:1;29;22:12;4:2;-1:-1;;;;;1272:234:5;;;;;;;;;;;;;;;-1:-1:-1;;;11:28;;8:2;;;52:1;49;42:12;8:2;1272:234:5;;41:9:-1;34:4;18:14;14:25;11:40;8:2;;;64:1;61;54:12;8:2;1272:234:5;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;-1:-1;;;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;1272:234:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;1272:234:5;;;;;;;;-1:-1:-1;1272:234:5;;-1:-1:-1;;;;;11:28;;8:2;;;52:1;49;42:12;8:2;1272:234:5;;41:9:-1;34:4;18:14;14:25;11:40;8:2;;;64:1;61;54:12;8:2;1272:234:5;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;-1:-1;;;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;1272:234:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;1272:234:5;;;;;;;;-1:-1:-1;1272:234:5;;-1:-1:-1;;;;;11:28;;8:2;;;52:1;49;42:12;8:2;1272:234:5;;41:9:-1;34:4;18:14;14:25;11:40;8:2;;;64:1;61;54:12;8:2;1272:234:5;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;-1:-1;;;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;1272:234:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;1272:234:5;;-1:-1:-1;1272:234:5;;-1:-1:-1;;;;;1272:234:5:i;:::-;;1271:99:1;;5:9:-1;2:2;;;27:1;24;17:12;2:2;1271:99:1;;;:::i;2704:109:5:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;2704:109:5;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;2704:109:5;;;;;;;:::i;4642:112:7:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;4642:112:7;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;4642:112:7;;:::i;2496:105:2:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;2496:105:2;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;2496:105:2;-1:-1:-1;;;;;2496:105:2;;:::i;6014:1184:15:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;6014:1184:15;;;;;;15:3:-1;10;7:12;4:2;;;32:1;29;22:12;4:2;-1:-1;;;;;6014:1184:15;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;11:28;;8:2;;;52:1;49;42:12;8:2;6014:1184:15;;41:9:-1;34:4;18:14;14:25;11:40;8:2;;;64:1;61;54:12;8:2;6014:1184:15;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;-1:-1;;;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;6014:1184:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;6014:1184:15;;;;;;;;-1:-1:-1;6014:1184:15;;-1:-1:-1;;;;;11:28;;8:2;;;52:1;49;42:12;8:2;6014:1184:15;;41:9:-1;34:4;18:14;14:25;11:40;8:2;;;64:1;61;54:12;8:2;6014:1184:15;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;-1:-1;;;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;6014:1184:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;6014:1184:15;;;;;;;;-1:-1:-1;6014:1184:15;;-1:-1:-1;;;;;11:28;;8:2;;;52:1;49;42:12;8:2;6014:1184:15;;41:9:-1;34:4;18:14;14:25;11:40;8:2;;;64:1;61;54:12;8:2;6014:1184:15;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;-1:-1;;;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;6014:1184:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;6014:1184:15;;-1:-1:-1;6014:1184:15;;-1:-1:-1;;;;;6014:1184:15:i;5004:223:7:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;5004:223:7;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;5004:223:7;;;;;;-1:-1:-1;;;;;5004:223:7;;:::i;1376:155:1:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;1376:155:1;;;:::i;6178:205:7:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;6178:205:7;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;6178:205:7;;;;;;-1:-1:-1;;;;;6178:205:7;;:::i;3591:177:11:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;3591:177:11;;;:::i;3764:615:15:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;3764:615:15;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;3764:615:15;;;;;;;;-1:-1:-1;;;11:28;;8:2;;;52:1;49;42:12;8:2;3764:615:15;;41:9:-1;34:4;18:14;14:25;11:40;8:2;;;64:1;61;54:12;8:2;3764:615:15;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;-1:-1;;;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;3764:615:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;3764:615:15;;;;;;;;-1:-1:-1;3764:615:15;;-1:-1:-1;;;;;11:28;;8:2;;;52:1;49;42:12;8:2;3764:615:15;;41:9:-1;34:4;18:14;14:25;11:40;8:2;;;64:1;61;54:12;8:2;3764:615:15;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;-1:-1;;;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;3764:615:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;3764:615:15;;-1:-1:-1;3764:615:15;;-1:-1:-1;;;;;3764:615:15:i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;3764:615:15;;;;;;;;;;;;;;;;;3093:151:5;;5:9:-1;2:2;;;27:1;24;17:12;2:2;3093:151:5;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;3093:151:5;;;;;;;;-1:-1:-1;;;11:28;;8:2;;;52:1;49;42:12;8:2;3093:151:5;;41:9:-1;34:4;18:14;14:25;11:40;8:2;;;64:1;61;54:12;8:2;3093:151:5;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;-1:-1;;;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;3093:151:5;;;;;;;;;;;-1:-1:-1;;;11:28;;8:2;;;52:1;49;42:12;8:2;3093:151:5;;41:9:-1;34:4;18:14;14:25;11:40;8:2;;;64:1;61;54:12;8:2;3093:151:5;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;-1:-1;;;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;-1:-1;3093:151:5;;-1:-1:-1;3093:151:5;-1:-1:-1;3093:151:5;:::i;1293:76:21:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;1293:76:21;;;:::i;779:245:5:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;779:245:5;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;779:245:5;;;;;;;;-1:-1:-1;;;11:28;;8:2;;;52:1;49;42:12;8:2;779:245:5;;41:9:-1;34:4;18:14;14:25;11:40;8:2;;;64:1;61;54:12;8:2;779:245:5;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;-1:-1;;;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;779:245:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;779:245:5;;-1:-1:-1;;779:245:5;;;-1:-1:-1;779:245:5;;-1:-1:-1;;779:245:5:i;946:312:13:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;946:312:13;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;;;;;946:312:13;;;;;;;;;;;;;;;-1:-1:-1;;;11:28;;8:2;;;52:1;49;42:12;8:2;946:312:13;;41:9:-1;34:4;18:14;14:25;11:40;8:2;;;64:1;61;54:12;8:2;946:312:13;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;-1:-1;;;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;946:312:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;946:312:13;;;;;;;;-1:-1:-1;946:312:13;;-1:-1:-1;;;;;11:28;;8:2;;;52:1;49;42:12;8:2;946:312:13;;41:9:-1;34:4;18:14;14:25;11:40;8:2;;;64:1;61;54:12;8:2;946:312:13;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;-1:-1;;;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;946:312:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;946:312:13;;-1:-1:-1;946:312:13;;-1:-1:-1;;;;;946:312:13:i;1056:209:5:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;1056:209:5;;;;;;15:3:-1;10;7:12;4:2;;;32:1;29;22:12;4:2;-1:-1;;;;;1056:209:5;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;11:28;;8:2;;;52:1;49;42:12;518:254:5;;5:9:-1;2:2;;;27:1;24;17:12;2:2;518:254:5;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;518:254:5;;;;;;;;-1:-1:-1;;;11:28;;8:2;;;52:1;49;42:12;8:2;518:254:5;;41:9:-1;34:4;18:14;14:25;11:40;8:2;;;64:1;61;54:12;8:2;518:254:5;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;-1:-1;;;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;518:254:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;518:254:5;;-1:-1:-1;;;518:254:5;;-1:-1:-1;;;;;518:254:5;;-1:-1:-1;518:254:5;;-1:-1:-1;518:254:5:i;3211:171:11:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;3211:171:11;;;:::i;4325:136:7:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;4325:136:7;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;4325:136:7;;;;;;;:::i;:::-;;;;-1:-1:-1;;;;;4325:136:7;;;;;;;;;;;;;;3310:137;;5:9:-1;2:2;;;27:1;24;17:12;2:2;3310:137:7;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;3310:137:7;;;;;;-1:-1:-1;;;;;3310:137:7;;:::i;2087:49::-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;2087:49:7;;;:::i;4447:306:15:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;4447:306:15;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;;;;;;4447:306:15;;;;;;;;;;:::i;389:68:5:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;389:68:5;;;:::i;3615:125:7:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;3615:125:7;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;3615:125:7;;:::i;1916:512:5:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;1916:512:5;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;;;;;1916:512:5;;;;;;;;;;;;;;;-1:-1:-1;;;11:28;;8:2;;;52:1;49;42:12;8:2;1916:512:5;;41:9:-1;34:4;18:14;14:25;11:40;8:2;;;64:1;61;54:12;8:2;1916:512:5;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;-1:-1;;;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;-1:-1;1916:512:5;;-1:-1:-1;1916:512:5;-1:-1:-1;1916:512:5;:::i;1216:62:11:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;1216:62:11;;;:::i;5461:226:7:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;5461:226:7;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;5461:226:7;;;;;;-1:-1:-1;;;;;5461:226:7;;:::i;1284:62:11:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;1284:62:11;;;:::i;4820:158:15:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;4820:158:15;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;;;;;;4820:158:15;;;;;;;;;;:::i;5045:897::-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;5045:897:15;;;;;;15:3:-1;10;7:12;4:2;;;32:1;29;22:12;4:2;-1:-1;;;;;5045:897:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;11:28;;8:2;;;52:1;49;42:12;8:2;5045:897:15;;41:9:-1;34:4;18:14;14:25;11:40;8:2;;;64:1;61;54:12;8:2;5045:897:15;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;-1:-1;;;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;5045:897:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;5045:897:15;;-1:-1:-1;5045:897:15;;-1:-1:-1;;;;;5045:897:15:i;660:280:13:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;660:280:13;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;;;;;;660:280:13;;;;;;;;;;;;;:::i;1091:120:11:-;;5:9:-1;2:2;;;27:1;24;17:12;2:2;1091:120:11;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;1091:120:11;;;;;;;;-1:-1:-1;;;11:28;;8:2;;;52:1;49;42:12;8:2;1091:120:11;;41:9:-1;34:4;18:14;14:25;11:40;8:2;;;64:1;61;54:12;8:2;1091:120:11;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;-1:-1;;;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;1091:120:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;1091:120:11;;-1:-1:-1;1091:120:11;;-1:-1:-1;;;;;1091:120:11:i;3387:220:15:-;3465:7;-1:-1:-1;;;;;3492:21:15;;3484:77;;;;-1:-1:-1;;;3484:77:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3578:13:15;;;;:9;:13;;;;;;;;-1:-1:-1;;;;;3578:22:15;;;;;;;;;;3387:220;;;;;:::o;1159:140:8:-;-1:-1:-1;;;;;;1259:33:8;1236:4;1259:33;;;:20;:33;;;;;;;;;1159:140::o;463:48:5:-;;;;;;;;;;;;;;;:::o;980:1108:2:-;1175:12;1199:29;;:::i;:::-;-1:-1:-1;1231:148:2;;;;;;;;-1:-1:-1;;;;;1268:19:2;;-1:-1:-1;1268:19:2;;;:6;:19;;;;;;;;;1231:148;;;;;;;;;;;1411:45;1275:11;1231:148;1439:4;1445;1451;1411:6;:45::i;:::-;1390:125;;;;-1:-1:-1;;;1390:125:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1601:19:2;;;;;;:6;:19;;;;;;:26;;1625:1;1601:26;:23;:26;:::i;:::-;-1:-1:-1;;;;;1579:19:2;;;;;;:6;:19;;;;;;;;:48;;;;1643:113;;;;;1705:10;1643:113;;;;;;;;;;;;;;;;;;;;;;;;;;1586:11;;1705:10;;1729:17;;1643:113;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;1643:113:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1864:12;1878:23;1913:4;-1:-1:-1;;;;;1905:18:2;1954:17;1973:11;1937:48;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1937:48:2;;;;;;;-1:-1:-1;;;;;1937:48:2;-1:-1:-1;;;;;1937:48:2;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;1937:48:2;;;1905:90;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1905:90:2;;;;;;;;;;;;;;;;;;;;;;;;12:1:-1;19;14:27;;;;67:4;61:11;56:16;;134:4;130:9;123:4;105:16;101:27;97:43;94:1;90:51;84:4;77:65;157:16;154:1;147:27;211:16;208:1;201:4;198:1;194:12;179:49;5:228;;14:27;32:4;27:9;;5:228;;1863:132:2;;;;2013:7;2005:48;;;;;-1:-1:-1;;;2005:48:2;;;;;;;;;;;;-1:-1:-1;;;2005:48:2;;;;;;;;;;;;;;;2071:10;980:1108;-1:-1:-1;;;;;;;;980:1108:2:o;3148:97:15:-;3234:4;3227:11;;;;;;;;-1:-1:-1;;3227:11:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3202:13;;3227:11;;3234:4;;3227:11;;3234:4;3227:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3148:97;;;:::o;294:43:1:-;;;;;;;;;;;;;;-1:-1:-1;;;294:43:1;;;;:::o;1272:234:5:-;1429:69;;-1:-1:-1;;;1429:69:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1272:234;;;;:::o;1271:99:1:-;1348:15;;1271:99;;:::o;2704:109:5:-;2775:31;2781:12;:10;:12::i;:::-;2795:2;2799:6;2775:5;:31::i;:::-;2704:109;;:::o;4642:112:7:-;4699:7;4725:12;;;:6;:12;;;;;:22;;;;4642:112::o;2496:105:2:-;-1:-1:-1;;;;;2582:12:2;2549:13;2582:12;;;:6;:12;;;;;;;2496:105::o;6014:1184:15:-;6268:7;:14;6254:3;:10;:28;6246:81;;;;-1:-1:-1;;;6246:81:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;6345:16:15;;6337:66;;;;-1:-1:-1;;;6337:66:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6442:12;:10;:12::i;:::-;-1:-1:-1;;;;;6434:20:15;:4;-1:-1:-1;;;;;6434:20:15;;:60;;;;6458:36;6475:4;6481:12;:10;:12::i;:::-;6458:16;:36::i;:::-;6413:157;;;;-1:-1:-1;;;6413:157:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6581:16;6600:12;:10;:12::i;:::-;6581:31;;6623:60;6644:8;6654:4;6660:2;6664:3;6669:7;6678:4;6623:20;:60::i;:::-;6699:9;6694:349;6718:3;:10;6714:1;:14;6694:349;;;6749:10;6762:3;6766:1;6762:6;;;;;;;;;;;;;;6749:19;;6782:14;6799:7;6807:1;6799:10;;;;;;;;;;;;;;6782:27;;6846:123;6887:6;6846:123;;;;;;;;;;;;;;;;;:9;:13;6856:2;6846:13;;;;;;;;;;;:19;6860:4;-1:-1:-1;;;;;6846:19:15;-1:-1:-1;;;;;6846:19:15;;;;;;;;;;;;;:23;;:123;;;;;:::i;:::-;6824:13;;;;:9;:13;;;;;;;;-1:-1:-1;;;;;6824:19:15;;;;;;;;;;:145;;;;7003:17;;;;;;:29;;7025:6;7003:21;:29::i;:::-;6983:13;;;;:9;:13;;;;;;;;-1:-1:-1;;;;;6983:17:15;;;;;;;;;;:49;;;;-1:-1:-1;6730:3:15;;6694:349;;;;7088:2;-1:-1:-1;;;;;7058:47:15;7082:4;-1:-1:-1;;;;;7058:47:15;7072:8;-1:-1:-1;;;;;7058:47:15;-1:-1:-1;;;;;;;;;;;7092:3:15;7097:7;7058:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;7058:47:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;7058:47:15;;;;;;;;;;;;;;;;;;;7116:75;7152:8;7162:4;7168:2;7172:3;7177:7;7186:4;7116:35;:75::i;:::-;6014:1184;;;;;;:::o;5004:223:7:-;5095:12;;;;:6;:12;;;;;:22;;;5087:45;;5119:12;:10;:12::i;:::-;5087:7;:45::i;:::-;5079:105;;;;-1:-1:-1;;;5079:105:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5195:25;5206:4;5212:7;5195:10;:25::i;1376:155:1:-;1487:9;1376:155;:::o;6178:205:7:-;6275:12;:10;:12::i;:::-;-1:-1:-1;;;;;6264:23:7;:7;-1:-1:-1;;;;;6264:23:7;;6256:83;;;;-1:-1:-1;;;6256:83:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6350:26;6362:4;6368:7;6350:11;:26::i;3591:177:11:-;1322:24;;;-1:-1:-1;;;1322:24:11;;;;;;;;;;;;3643:34;;3664:12;:10;:12::i;3643:34::-;3635:106;;;;-1:-1:-1;;;3635:106:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3751:10;:8;:10::i;:::-;3591:177::o;3764:615:15:-;3921:16;3980:3;:10;3961:8;:15;:29;3953:83;;;;-1:-1:-1;;;3953:83:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4047:30;4094:8;:15;-1:-1:-1;;;;;4080:30:15;;5:9:-1;2:2;;;27:1;24;17:12;2:2;4080:30:15;;;;;;;;;;;;;;;;;;;;;;;29:2:-1;21:6;17:15;125:4;109:14;101:6;88:42;144:17;;-1:-1;4080:30:15;-1:-1:-1;4047:63:15;-1:-1:-1;4126:9:15;4121:221;4145:8;:15;4141:1;:19;4121:221;;;4212:1;-1:-1:-1;;;;;4189:25:15;:8;4198:1;4189:11;;;;;;;;;;;;;;-1:-1:-1;;;;;4189:25:15;;;4181:87;;;;-1:-1:-1;;;4181:87:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4301:9;:17;4311:3;4315:1;4311:6;;;;;;;;;;;;;;4301:17;;;;;;;;;;;:30;4319:8;4328:1;4319:11;;;;;;;;;;;;;;-1:-1:-1;;;;;4301:30:15;-1:-1:-1;;;;;4301:30:15;;;;;;;;;;;;;4282:13;4296:1;4282:16;;;;;;;;;;;;;;;;;:49;4162:3;;4121:221;;;-1:-1:-1;4359:13:15;3764:615;-1:-1:-1;;;3764:615:15:o;3093:151:5:-;3199:38;3210:12;:10;:12::i;:::-;3224:3;;3199:38;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;;3199:38:5;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3229:7:5;;-1:-1:-1;3229:7:5;;;;3199:38;;;3229:7;;3199:38;3229:7;3199:38;1:33:-1;99:1;81:16;;74:27;;;;-1:-1;3199:10:5;;-1:-1:-1;;;3199:38:5:i;1293:76:21:-;1355:7;;;;1293:76;:::o;779:245:5:-;855:41;2132:4:7;883:12:5;:10;:12::i;855:41::-;847:110;;;;-1:-1:-1;;;847:110:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;986:2;974:15;978:6;974:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;974:15:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1001;1009:6;1001:7;:15::i;946:312:13:-;1086:12;:10;:12::i;:::-;-1:-1:-1;;;;;1075:23:13;:7;-1:-1:-1;;;;;1075:23:13;;:66;;;;1102:39;1119:7;1128:12;:10;:12::i;1102:39::-;1054:154;;;;-1:-1:-1;;;1054:154:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1219:32;1230:7;1239:3;1244:6;1219:10;:32::i;:::-;946:312;;;:::o;518:254:5:-;1426:13:12;;;;;;;;:33;;;1443:16;:14;:16::i;:::-;1426:50;;;-1:-1:-1;1464:12:12;;;;1463:13;1426:50;1418:109;;;;-1:-1:-1;;;1418:109:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1538:19;1561:13;;;;;;1560:14;1584:98;;;;1618:13;:20;;-1:-1:-1;;;;1618:20:12;;;;;1652:19;1634:4;1652:19;;;1584:98;616:40:5::1;649:6;616:32;:40::i;:::-;430:27;::::0;;-1:-1:-1;;;430:27:5;;;;;;;;::::1;::::0;;;667:45:::1;::::0;694:17;667:10:::1;:45::i;:::-;723:41;;;;;;;;;;;;;;-1:-1:-1::0;;;723:41:5::1;;::::0;:17:::1;:41::i;:::-;1708:14:12::0;1704:66;;;1754:5;1738:21;;-1:-1:-1;;1738:21:12;;;518:254:5;;;:::o;3211:171:11:-;1322:24;;;-1:-1:-1;;;1322:24:11;;;;;;;;;;;;3261:34;;3282:12;:10;:12::i;3261:34::-;3253:104;;;;-1:-1:-1;;;3253:104:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3367:8;:6;:8::i;4325:136:7:-;4398:7;4424:12;;;:6;:12;;;;;:30;;4448:5;4424:30;:23;:30;:::i;:::-;4417:37;4325:136;-1:-1:-1;;;4325:136:7:o;3310:137::-;3379:4;3402:12;;;:6;:12;;;;;:38;;3432:7;3402:38;:29;:38;:::i;2087:49::-;2132:4;2087:49;:::o;4447:306:15:-;4565:8;-1:-1:-1;;;;;4549:24:15;:12;:10;:12::i;:::-;-1:-1:-1;;;;;4549:24:15;;;4541:78;;;;-1:-1:-1;;;4541:78:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4675:8;4630:18;:32;4649:12;:10;:12::i;:::-;-1:-1:-1;;;;;4630:32:15;;;;;;;;;;;;;;;;;-1:-1:-1;4630:32:15;;;:42;;;;;;;;;;;;:53;;-1:-1:-1;;4630:53:15;;;;;;;;;;;4713:12;:10;:12::i;:::-;4698:48;;;;;;;;;;-1:-1:-1;;;;;4698:48:15;;;;;;;;;;;;;;4447:306;;:::o;389:68:5:-;430:27;;;-1:-1:-1;;;430:27:5;;;;;;;;;;;;389:68;:::o;3615:125:7:-;3678:7;3704:12;;;:6;:12;;;;;:29;;:27;:29::i;1916:512:5:-;430:27;;;-1:-1:-1;;;430:27:5;;;;;;;;;;;;2014:37;;2038:12;:10;:12::i;2014:37::-;2006:112;;;;-1:-1:-1;;;2006:112:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2142:20;2176:24;2214:17;2255:11;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;2244:54:5;;;;;;;;-1:-1:-1;;;11:28;;8:2;;;52:1;49;42:12;8:2;2244:54:5;;41:9:-1;34:4;18:14;14:25;11:40;8:2;;;64:1;61;54:12;8:2;2244:54:5;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;-1:-1;;;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;2244:54:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;2244:54:5;;;;;;;;-1:-1:-1;2244:54:5;;-1:-1:-1;;;;;11:28;;8:2;;;52:1;49;42:12;8:2;2244:54:5;;41:9:-1;34:4;18:14;14:25;11:40;8:2;;;64:1;61;54:12;8:2;2244:54:5;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;-1:-1;;;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;2244:54:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;2244:54:5;;;;;;;;-1:-1:-1;2244:54:5;;-1:-1:-1;;;;;11:28;;8:2;;;52:1;49;42:12;8:2;2244:54:5;;41:9:-1;34:4;18:14;14:25;11:40;8:2;;;64:1;61;54:12;8:2;2244:54:5;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;-1:-1;;;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;2244:54:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;2128:170:5;;-1:-1:-1;2128:170:5;;-1:-1:-1;2244:54:5;;-1:-1:-1;;;;;;;;;;2316:20:5;;;;;-1:-1:-1;2308:67:5;;-1:-1:-1;2308:67:5;;;-1:-1:-1;;;2308:67:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2385:36;2396:4;2402:3;2407:7;2416:4;2385:10;:36::i;1216:62:11:-;1254:24;;;-1:-1:-1;;;1254:24:11;;;;;;;;;;;;1216:62;:::o;5461:226:7:-;5553:12;;;;:6;:12;;;;;:22;;;5545:45;;5577:12;:10;:12::i;5545:45::-;5537:106;;;;-1:-1:-1;;;5537:106:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1284:62:11;1322:24;;;-1:-1:-1;;;1322:24:11;;;;;;;;;;;;1284:62;:::o;4820:158:15:-;-1:-1:-1;;;;;4934:27:15;;;4911:4;4934:27;;;:18;:27;;;;;;;;:37;;;;;;;;;;;;;;;4820:158::o;5045:897::-;-1:-1:-1;;;;;5260:16:15;;5252:66;;;;-1:-1:-1;;;5252:66:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5357:12;:10;:12::i;:::-;-1:-1:-1;;;;;5349:20:15;:4;-1:-1:-1;;;;;5349:20:15;;:60;;;;5373:36;5390:4;5396:12;:10;:12::i;5373:36::-;5328:148;;;;-1:-1:-1;;;5328:148:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5487:16;5506:12;:10;:12::i;:::-;5487:31;;5529:96;5550:8;5560:4;5566:2;5570:21;5588:2;5570:17;:21::i;:::-;5593:25;5611:6;5593:17;:25::i;:::-;5620:4;5529:20;:96::i;:::-;5658:77;5682:6;5658:77;;;;;;;;;;;;;;;;;:13;;;;:9;:13;;;;;;;;-1:-1:-1;;;;;5658:19:15;;;;;;;;;;;:77;;:23;:77;:::i;:::-;5636:13;;;;:9;:13;;;;;;;;-1:-1:-1;;;;;5636:19:15;;;;;;;;;;:99;;;;5765:17;;;;;;:29;;5787:6;5765:21;:29::i;:::-;5745:13;;;;:9;:13;;;;;;;;-1:-1:-1;;;;;5745:17:15;;;;;;;;;;;;;:49;;;;5810:46;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;5810:46:15;;;;;;;;5867:68;5898:8;5908:4;5914:2;5918;5922:6;5930:4;5867:30;:68::i;660:280:13:-;775:12;:10;:12::i;:::-;-1:-1:-1;;;;;764:23:13;:7;-1:-1:-1;;;;;764:23:13;;:66;;;;791:39;808:7;817:12;:10;:12::i;791:39::-;743:154;;;;-1:-1:-1;;;743:154:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;908:25;914:7;923:2;927:5;908;:25::i;1091:120:11:-;1426:13:12;;;;;;;;:33;;;1443:16;:14;:16::i;:::-;1426:50;;;-1:-1:-1;1464:12:12;;;;1463:13;1426:50;1418:109;;;;-1:-1:-1;;;1418:109:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1538:19;1561:13;;;;;;1560:14;1584:98;;;;1618:13;:20;;-1:-1:-1;;;;1618:20:12;;;;;1652:19;1634:4;1652:19;;;1584:98;1167:37:11::1;1200:3;1167:32;:37::i;:::-;1708:14:12::0;1704:66;;;1754:5;1738:21;;-1:-1:-1;;1738:21:12;;;1091:120:11;;:::o;2607:470:2:-;2779:4;-1:-1:-1;;;;;2803:20:2;;2795:70;;;;-1:-1:-1;;;2795:70:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2916:154;2943:47;2962:27;2982:6;2962:19;:27::i;:::-;2943:18;:47::i;:::-;3008:4;3030;3052;2916:154;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2916:154:2;;;;;;;;-1:-1:-1;;;;;2894:176:2;:6;-1:-1:-1;;;;;2894:176:2;;2875:195;;2607:470;;;;;;;:::o;885:176:10:-;943:7;974:5;;;997:6;;;;989:46;;;;;-1:-1:-1;;;989:46:10;;;;;;;;;;;;-1:-1:-1;;;989:46:10;;;;;;;;;;;;;;820:104:6;907:10;820:104;:::o;10356:538:15:-;-1:-1:-1;;;;;10451:21:15;;10443:69;;;;-1:-1:-1;;;10443:69:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10523:16;10542:12;:10;:12::i;:::-;10523:31;;10565:105;10586:8;10596:7;10613:1;10617:21;10635:2;10617:17;:21::i;:::-;10640:25;10658:6;10640:17;:25::i;:::-;10565:105;;;;;;;;;;;;:20;:105::i;:::-;10706:108;10746:6;10706:108;;;;;;;;;;;;;;;;;:13;;;;:9;:13;;;;;;;;-1:-1:-1;;;;;10706:22:15;;;;;;;;;;;:108;;:26;:108;:::i;:::-;10681:13;;;;:9;:13;;;;;;;;-1:-1:-1;;;;;10681:22:15;;;;;;;;;;;;:133;;;;10830:57;;;;;;;;;;;;;10681:13;;:22;;10830:57;;;;-1:-1:-1;;;;;;;;;;;10830:57:15;;;;;;;;10356:538;;;;:::o;3774:364:11:-;4065:66;4092:8;4102:4;4108:2;4112:3;4117:7;4126:4;4065:26;:66::i;1757:187:10:-;1843:7;1878:12;1870:6;;;;1862:29;;;;-1:-1:-1;;;1862:29:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;1862:29:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;1913:5:10;;;1757:187::o;13729:800:15:-;13973:15;:2;-1:-1:-1;;;;;13973:13:15;;:15::i;:::-;13969:554;;;14036:2;-1:-1:-1;;;;;14008:54:15;;14063:8;14073:4;14079:3;14084:7;14093:4;14008:90;;;;;;;;;;;;;-1:-1:-1;;;;;14008:90:15;-1:-1:-1;;;;;14008:90:15;;;;;;-1:-1:-1;;;;;14008:90:15;-1:-1:-1;;;;;14008:90:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;14008:90:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;14008:90:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;14008:90:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;14008:90:15;;;;;;;;;;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;14008:90:15;;;14004:509;;20:4:-1;14:11;14004:509:15;30:15:-1;;93:4;75:16;72:26;69:2;;;-1:-1;109:1;111:5;;69:2;145:1;142;139;124:23;179:1;173:8;168:3;164:18;206:10;201:3;198:19;188:2;;229:1;221:9;;231:5;;;188:2;290:1;272:16;268:24;265:1;259:4;244:49;319:4;313:11;403:16;396:4;388:6;384:17;381:39;-1:-1;;;;;346:6;343:30;333:94;330:2;;;444:1;436:9;;452:5;;;;330:2;491:6;485:4;481:17;524:3;518:10;-1:-1;;;;;540:6;537:30;534:2;;;578:1;570:9;;580:5;;;;;;534:2;624:6;617:4;612:3;608:14;604:27;658:16;652:4;648:27;643:3;640:36;637:2;;;687:1;679:9;;689:5;;;;;;;637:2;739:4;719:14;-1:-1;;715:30;709:4;702:44;-1:-1;760:3;-1:-1;;;50:730;14004:509:15;;;;;;;14382:14;;-1:-1:-1;;;14382:14:15;;;;;;;;;;;;;;;;;14389:6;;14382:14;;;;;;;;;;;;;;;27:10:-1;;8:100;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;14004:509:15;14436:62;;-1:-1:-1;;;14436:62:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14004:509;-1:-1:-1;;;;;;14147:75:15;;-1:-1:-1;;;14147:75:15;14143:172;;14246:50;;-1:-1:-1;;;14246:50:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14143:172;14099:230;13729:800;;;;;;:::o;7385:184:7:-;7458:12;;;;:6;:12;;;;;:33;;7483:7;7458:33;:24;:33;:::i;:::-;7454:109;;;7539:12;:10;:12::i;:::-;-1:-1:-1;;;;;7512:40:7;7530:7;-1:-1:-1;;;;;7512:40:7;7524:4;7512:40;;;;;;;;;;7385:184;;:::o;7575:188::-;7649:12;;;;:6;:12;;;;;:36;;7677:7;7649:36;:27;:36;:::i;:::-;7645:112;;;7733:12;:10;:12::i;:::-;-1:-1:-1;;;;;7706:40:7;7724:7;-1:-1:-1;;;;;7706:40:7;7718:4;7706:40;;;;;;;;;;7575:188;;:::o;2295:117:21:-;1863:7;;;;1855:40;;;;;-1:-1:-1;;;1855:40:21;;;;;;;;;;;;-1:-1:-1;;;1855:40:21;;;;;;;;;;;;;;;2353:7:::1;:15:::0;;-1:-1:-1;;2353:15:21::1;::::0;;2383:22:::1;2392:12;:10;:12::i;:::-;2383:22;::::0;;-1:-1:-1;;;;;2383:22:21;;::::1;::::0;;;;;;;::::1;::::0;;::::1;2295:117::o:0;11088:705:15:-;-1:-1:-1;;;;;11208:21:15;;11200:69;;;;-1:-1:-1;;;11200:69:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11301:7;:14;11287:3;:10;:28;11279:81;;;;-1:-1:-1;;;11279:81:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11371:16;11390:12;:10;:12::i;:::-;11371:31;;11413:69;11434:8;11444:7;11461:1;11465:3;11470:7;11413:69;;;;;;;;;;;;:20;:69::i;:::-;11498:6;11493:220;11514:3;:10;11510:1;:14;11493:220;;;11574:128;11622:7;11630:1;11622:10;;;;;;;;;;;;;;11574:128;;;;;;;;;;;;;;;;;:9;:17;11584:3;11588:1;11584:6;;;;;;;;;;;;;;11574:17;;;;;;;;;;;:26;11592:7;-1:-1:-1;;;;;11574:26:15;-1:-1:-1;;;;;11574:26:15;;;;;;;;;;;;;:30;;:128;;;;;:::i;:::-;11545:9;:17;11555:3;11559:1;11555:6;;;;;;;;;;;;;;;;;;;11545:17;;;;;;;;;;;;;-1:-1:-1;11545:17:15;;;-1:-1:-1;;;;;11545:26:15;;;;;;;;;:157;11526:3;;11493:220;;;;11769:1;-1:-1:-1;;;;;11728:58:15;11752:7;-1:-1:-1;;;;;11728:58:15;11742:8;-1:-1:-1;;;;;11728:58:15;-1:-1:-1;;;;;;;;;;;11773:3:15;11778:7;11728:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;11728:58:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;11728:58:15;;;;;;;;;;;;;;;;;;;11088:705;;;;:::o;8021:86::-;8087:13;;;;:4;;:13;;;;;:::i;1866:593:12:-;2302:4;2410:17;2445:7;1866:593;:::o;1492:423:11:-;1426:13:12;;;;;;;;:33;;;1443:16;:14;:16::i;:::-;1426:50;;;-1:-1:-1;1464:12:12;;;;1463:13;1426:50;1418:109;;;;-1:-1:-1;;;1418:109:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1538:19;1561:13;;;;;;1560:14;1584:98;;;;1618:13;:20;;-1:-1:-1;;;;1618:20:12;;;;;1652:19;1634:4;1652:19;;;1584:98;:26:11::1;:24;:26::i;:::-;1620:32;:30;:32::i;:::-;1662:25;:23;:25::i;:::-;1697:29;1722:3;1697:24;:29::i;:::-;1736:34;:32;:34::i;:::-;1780:27;:25;:27::i;:::-;1817:34;:32;:34::i;:::-;1861:47;1904:3;1861:42;:47::i;765:144:1:-:0;1426:13:12;;;;;;;;:33;;;1443:16;:14;:16::i;:::-;1426:50;;;-1:-1:-1;1464:12:12;;;;1463:13;1426:50;1418:109;;;;-1:-1:-1;;;1418:109:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1538:19;1561:13;;;;;;1560:14;1584:98;;;;1618:13;:20;;-1:-1:-1;;;;1618:20:12;;;;;1652:19;1634:4;1652:19;;;1584:98;877:25:1::1;897:4;877:19;:25::i;2048:115:21:-:0;1599:7;;;;1598:8;1590:37;;;;;-1:-1:-1;;;1590:37:21;;;;;;;;;;;;-1:-1:-1;;;1590:37:21;;;;;;;;;;;;;;;2107:7:::1;:14:::0;;-1:-1:-1;;2107:14:21::1;2117:4;2107:14;::::0;;2136:20:::1;2143:12;:10;:12::i;6096:147:20:-:0;6170:7;6212:22;6216:3;6228:5;6212:3;:22::i;5412:156::-;5492:4;5515:46;5525:3;-1:-1:-1;;;;;5545:14:20;;5515:9;:46::i;5649:115::-;5712:7;5738:19;5746:3;5738:7;:19::i;9407:700:15:-;-1:-1:-1;;;;;9541:16:15;;9533:62;;;;-1:-1:-1;;;9533:62:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9627:7;:14;9613:3;:10;:28;9605:81;;;;-1:-1:-1;;;9605:81:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9697:16;9716:12;:10;:12::i;:::-;9697:31;;9739:66;9760:8;9778:1;9782:2;9786:3;9791:7;9800:4;9739:20;:66::i;:::-;9821:6;9816:124;9837:3;:10;9833:1;:14;9816:124;;;9892:37;9907:9;:17;9917:3;9921:1;9917:6;;;;;;;;;;;;;;9907:17;;;;;;;;;;;:21;9925:2;-1:-1:-1;;;;;9907:21:15;-1:-1:-1;;;;;9907:21:15;;;;;;;;;;;;;9892:7;9900:1;9892:10;;;;;;;;;;;;;;:14;;:37;;;;:::i;:::-;9868:9;:17;9878:3;9882:1;9878:6;;;;;;;;;;;;;;;;;;;9868:17;;;;;;;;;;;;;-1:-1:-1;9868:17:15;;;-1:-1:-1;;;;;9868:21:15;;;;;;;;;:61;9849:3;;9816:124;;;;9991:2;-1:-1:-1;;;;;9955:53:15;9987:1;-1:-1:-1;;;;;9955:53:15;9969:8;-1:-1:-1;;;;;9955:53:15;-1:-1:-1;;;;;;;;;;;9995:3:15;10000:7;9955:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;9955:53:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;9955:53:15;;;;;;;;;;;;;;;;;;;10019:81;10055:8;10073:1;10077:2;10081:3;10086:7;10095:4;10019:35;:81::i;:::-;9407:700;;;;;:::o;14535:193::-;14654:16;;;14668:1;14654:16;;;;;;;;;14601;;;;14654;;;;;;;109:14:-1;14654:16:15;88:42:-1;144:17;;-1:-1;14654:16:15;14629:41;;14691:7;14680:5;14686:1;14680:8;;;;;;;;;;;;;;;;;:18;14716:5;14535:193;-1:-1:-1;;14535:193:15:o;12960:763::-;13179:15;:2;-1:-1:-1;;;;;13179:13:15;;:15::i;:::-;13175:542;;;13242:2;-1:-1:-1;;;;;13214:49:15;;13264:8;13274:4;13280:2;13284:6;13292:4;13214:83;;;;;;;;;;;;;-1:-1:-1;;;;;13214:83:15;-1:-1:-1;;;;;13214:83:15;;;;;;-1:-1:-1;;;;;13214:83:15;-1:-1:-1;;;;;13214:83:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;13214:83:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;13214:83:15;;;;;;;;;;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;13214:83:15;;;13210:497;;20:4:-1;14:11;13210:497:15;30:15:-1;;93:4;75:16;72:26;69:2;;;-1:-1;109:1;111:5;;13210:497:15;-1:-1:-1;;;;;;13346:70:15;;-1:-1:-1;;;13346:70:15;13342:167;;13440:50;;-1:-1:-1;;;13440:50:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2094:396:2;2201:7;338:98;;;;;;;;;;;;;;;;;319:123;;;;;;2349:6;:12;;;2383:6;:11;;;2426:6;:24;;;2416:35;;;;;;2270:199;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2270:199:2;-1:-1:-1;;;;;2270:199:2;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;2270:199:2;;;2243:240;;;;;;2224:259;;2094:396;;;:::o;1891:249:1:-;1987:7;2085:20;:18;:20::i;:::-;2107:11;2056:63;;;;;;-1:-1:-1;;;2056:63:1;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;2056:63:1;;;2029:104;;;;;;2010:123;;1891:249;;;:::o;1029:393:14:-;1272:66;1299:8;1309:4;1315:2;1319:3;1324:7;1333:4;1272:26;:66::i;:::-;1358:8;:6;:8::i;:::-;1357:9;1349:66;;;;-1:-1:-1;;;1349:66:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;729:413:19;1089:20;1127:8;;;729:413::o;4875:141:20:-;4945:4;4968:41;4973:3;-1:-1:-1;;;;;4993:14:20;;4968:4;:41::i;5184:147::-;5257:4;5280:44;5288:3;-1:-1:-1;;;;;5308:14:20;;5280:7;:44::i;751:64:6:-;1426:13:12;;;;;;;;:33;;;1443:16;:14;:16::i;:::-;1426:50;;;-1:-1:-1;1464:12:12;;;;1463:13;1426:50;1418:109;;;;-1:-1:-1;;;1418:109:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1538:19;1561:13;;;;;;1560:14;1584:98;;;;1618:13;:20;;-1:-1:-1;;;;1618:20:12;;;;;1652:19;1634:4;1652:19;;;1584:98;1708:14;1704:66;;;1754:5;1738:21;;-1:-1:-1;;1738:21:12;;;1704:66;751:64:6;:::o;760:249:8:-;1426:13:12;;;;;;;;:33;;;1443:16;:14;:16::i;:::-;1426:50;;;-1:-1:-1;1464:12:12;;;;1463:13;1426:50;1418:109;;;;-1:-1:-1;;;1418:109:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1538:19;1561:13;;;;;;1560:14;1584:98;;;;1618:13;:20;;-1:-1:-1;;;;1618:20:12;;;;;1652:19;1634:4;1652:19;;;1584:98;962:40:8::1;-1:-1:-1::0;;;962:18:8::1;:40::i;2362:387:15:-:0;1426:13:12;;;;;;;;:33;;;1443:16;:14;:16::i;:::-;1426:50;;;-1:-1:-1;1464:12:12;;;;1463:13;1426:50;1418:109;;;;-1:-1:-1;;;1418:109:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1538:19;1561:13;;;;;;1560:14;1584:98;;;;1618:13;:20;;-1:-1:-1;;;;1618:20:12;;;;;1652:19;1634:4;1652:19;;;1584:98;2446:12:15::1;2454:3;2446:7;:12::i;:::-;2547:41;-1:-1:-1::0;;;2547:18:15::1;:41::i;:::-;2688:54;-1:-1:-1::0;;;2688:18:15::1;:54::i;1108:90:21:-:0;1426:13:12;;;;;;;;:33;;;1443:16;:14;:16::i;:::-;1426:50;;;-1:-1:-1;1464:12:12;;;;1463:13;1426:50;1418:109;;;;-1:-1:-1;;;1418:109:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1538:19;1561:13;;;;;;1560:14;1584:98;;;;1618:13;:20;;-1:-1:-1;;;;1618:20:12;;;;;1652:19;1634:4;1652:19;;;1584:98;1176:7:21::1;:15:::0;;-1:-1:-1;;1176:15:21::1;::::0;;1704:66:12;;;;1754:5;1738:21;;-1:-1:-1;;1738:21:12;;;1108:90:21;:::o;1921:248:11:-;1426:13:12;;;;;;;;:33;;;1443:16;:14;:16::i;:::-;1426:50;;;-1:-1:-1;1464:12:12;;;;1463:13;1426:50;1418:109;;;;-1:-1:-1;;;1418:109:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1538:19;1561:13;;;;;;1560:14;1584:98;;;;1618:13;:20;;-1:-1:-1;;;;1618:20:12;;;;;1652:19;1634:4;1652:19;;;1584:98;2023:44:11::1;2132:4:7;2054:12:11;:10;:12::i;:::-;2023:10;:44::i;:::-;1254:24;::::0;;-1:-1:-1;;;1254:24:11;;;;;;;;::::1;::::0;;;2078:37:::1;::::0;2102:12:::1;:10;:12::i;2078:37::-;1322:24;::::0;;-1:-1:-1;;;1322:24:11;;;;;;;;::::1;::::0;;;2125:37:::1;::::0;2149:12:::1;:10;:12::i;915:350:1:-:0;414:110;;;;;;;;;;;;;;;;;395:135;;;;;;;1092:22;;;;;;1148:14;;;;;;;;;;;;-1:-1:-1;;;1148:14:1;;;;;;395:135;1132:32;1190:4;1221:12;:10;:12::i;:::-;1024:224;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1024:224:1;;;;;;;;;;;;;;;;;26:21:-1;;;22:32;;;6:49;;1024:224:1;;;;;;1001:257;;;;;983:15;:275;-1:-1:-1;915:350:1:o;4434:201:20:-;4528:18;;4501:7;;4528:26;-1:-1:-1;4520:73:20;;;;-1:-1:-1;;;4520:73:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4610:3;:11;;4622:5;4610:18;;;;;;;;;;;;;;;;4603:25;;4434:201;;;;:::o;3787:127::-;3860:4;3883:19;;;:12;;;;;:19;;;;;;:24;;;3787:127::o;3995:107::-;4077:18;;3995:107::o;1622:404::-;1685:4;1706:21;1716:3;1721:5;1706:9;:21::i;:::-;1701:319;;-1:-1:-1;27:10;;39:1;23:18;;;45:23;;1743:11:20;:23;;;;;;;;;;;;;1923:18;;1901:19;;;:12;;;:19;;;;;;:40;;;;1955:11;;1701:319;-1:-1:-1;2004:5:20;1997:12;;2194:1512;2260:4;2397:19;;;:12;;;:19;;;;;;2431:15;;2427:1273;;2860:18;;-1:-1:-1;;2812:14:20;;;;2860:22;;;;2788:21;;2860:3;;:22;;3142;;;;;;;;;;;;;;3122:42;;3285:9;3256:3;:11;;3268:13;3256:26;;;;;;;;;;;;;;;;;;;:38;;;;3360:23;;;3402:1;3360:12;;;:23;;;;;;3386:17;;;3360:43;;3509:17;;3360:3;;3509:17;;;;;;;;;;;;;;;;;;;;;;3601:3;:12;;:19;3614:5;3601:19;;;;;;;;;;;3594:26;;;3642:4;3635:11;;;;;;;;2427:1273;3684:5;3677:12;;;;;1693:198:8;-1:-1:-1;;;;;;1776:25:8;;;;;1768:66;;;;;-1:-1:-1;;;1768:66:8;;;;;;;;;;;;-1:-1:-1;;;1768:66:8;;;;;;;;;;;;;;;-1:-1:-1;;;;;;1844:33:8;;;;;:20;:33;;;;;:40;;-1:-1:-1;;1844:40:8;1880:4;1844:40;;;1693:198::o;259:2988:5:-;;;;;;;;;;;;;;;-1:-1:-1;;;;;259:2988:5;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;259:2988:5;;;-1:-1:-1;259:2988:5;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;",
  "source": "pragma solidity ^0.6.0;\n\nimport \"@openzeppelin/contracts-upgradeable/presets/ERC1155PresetMinterPauserUpgradeable.sol\";\nimport {NativeMetaTransaction} from \"../../common/NativeMetaTransaction.sol\";\nimport {ContextMixin} from \"../../common/ContextMixin.sol\";\n\ncontract SoapPunkCollectiblesChild is\n    ERC1155PresetMinterPauserUpgradeable,\n    NativeMetaTransaction,\n    ContextMixin\n{\n    bytes32 public constant DEPOSITOR_ROLE = keccak256(\"DEPOSITOR_ROLE\");\n    mapping (uint256 => bool) public withdrawnTokens;\n\n    function initialize(string memory newuri, address childChainManager) initializer public {\n        __ERC1155PresetMinterPauser_init(newuri);\n\n        _setupRole(DEPOSITOR_ROLE, childChainManager);\n\n        _initializeEIP712(\"SoupPunkCollectibles\");\n     }\n\n     function setURI(string memory newuri, uint256 id) public {\n         require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), \"SoapPunkCollectibles: must have admin role to change uri\");\n\n         emit URI(newuri, id);\n\n         _setURI(newuri);\n     }\n\n\n     // Disable minting\n     function mint(address to, uint256 id, uint256 amount, bytes memory data) public override {\n         // No account can mint\n         require(false, \"SoapPunkCollectibles: cannot mint on child contract\");\n     }\n\n     function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data) public override {\n         // No account can mint\n         require(false, \"SoapPunkCollectibles: cannot mint on child contract\");\n     }\n\n\n     //Child\n\n     /**\n     * @notice called when tokens are deposited on root chain\n     * @dev Should be callable only by ChildChainManager\n     * Should handle deposit by minting the required tokens for user\n     * Make sure minting is done only by this function\n     * @param user user address for whom deposit is being done\n     * @param depositData abi encoded ids array and amounts array\n     */\n    function deposit(address user, bytes calldata depositData)\n        external\n    {\n        require(hasRole(DEPOSITOR_ROLE, _msgSender()), \"SoapPunkCollectibles: must have depositor role to make deposit\");\n        (\n            uint256[] memory ids,\n            uint256[] memory amounts,\n            bytes memory data\n        ) = abi.decode(depositData, (uint256[], uint256[], bytes));\n        require(user != address(0x0), \"ChildERC1155: INVALID_DEPOSIT_USER\");\n        _mintBatch(user, ids, amounts, data);\n    }\n\n    /**\n     * @notice called when user wants to withdraw single token back to root chain\n     * @dev Should burn user's tokens. This transaction will be verified when exiting on root chain\n     * @param id id to withdraw\n     * @param amount amount to withdraw\n     */\n    function withdrawSingle(uint256 id, uint256 amount) external {\n        _burn(_msgSender(), id, amount);\n    }\n\n    /**\n     * @notice called when user wants to batch withdraw tokens back to root chain\n     * @dev Should burn user's tokens. This transaction will be verified when exiting on root chain\n     * @param ids ids to withdraw\n     * @param amounts amounts to withdraw\n     */\n    function withdrawBatch(uint256[] calldata ids, uint256[] calldata amounts)\n        external\n    {\n        _burnBatch(_msgSender(), ids, amounts);\n    }\n\n}\n",
  "sourcePath": "/home/gabriel/Documentos/Trabajo/Eibriel/Proyectos/Decentraland/GoldRush/SPContracts/matic/contracts/SoupPunk_child.sol",
  "ast": {
    "absolutePath": "/home/gabriel/Documentos/Trabajo/Eibriel/Proyectos/Decentraland/GoldRush/SPContracts/matic/contracts/SoupPunk_child.sol",
    "exportedSymbols": {
      "SoapPunkCollectiblesChild": [
        627
      ]
    },
    "id": 628,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 426,
        "literals": [
          "solidity",
          "^",
          "0.6",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:5"
      },
      {
        "absolutePath": "@openzeppelin/contracts-upgradeable/presets/ERC1155PresetMinterPauserUpgradeable.sol",
        "file": "@openzeppelin/contracts-upgradeable/presets/ERC1155PresetMinterPauserUpgradeable.sol",
        "id": 427,
        "nodeType": "ImportDirective",
        "scope": 628,
        "sourceUnit": 1496,
        "src": "25:94:5",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/gabriel/Documentos/Trabajo/Eibriel/Proyectos/Decentraland/GoldRush/SPContracts/common/NativeMetaTransaction.sol",
        "file": "../../common/NativeMetaTransaction.sol",
        "id": 429,
        "nodeType": "ImportDirective",
        "scope": 628,
        "sourceUnit": 347,
        "src": "120:77:5",
        "symbolAliases": [
          {
            "foreign": {
              "argumentTypes": null,
              "id": 428,
              "name": "NativeMetaTransaction",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": null,
              "src": "128:21:5",
              "typeDescriptions": {
                "typeIdentifier": null,
                "typeString": null
              }
            },
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/gabriel/Documentos/Trabajo/Eibriel/Proyectos/Decentraland/GoldRush/SPContracts/common/ContextMixin.sol",
        "file": "../../common/ContextMixin.sol",
        "id": 431,
        "nodeType": "ImportDirective",
        "scope": 628,
        "sourceUnit": 38,
        "src": "198:59:5",
        "symbolAliases": [
          {
            "foreign": {
              "argumentTypes": null,
              "id": 430,
              "name": "ContextMixin",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": null,
              "src": "206:12:5",
              "typeDescriptions": {
                "typeIdentifier": null,
                "typeString": null
              }
            },
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 432,
              "name": "ERC1155PresetMinterPauserUpgradeable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1495,
              "src": "301:36:5",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC1155PresetMinterPauserUpgradeable_$1495",
                "typeString": "contract ERC1155PresetMinterPauserUpgradeable"
              }
            },
            "id": 433,
            "nodeType": "InheritanceSpecifier",
            "src": "301:36:5"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 434,
              "name": "NativeMetaTransaction",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 346,
              "src": "343:21:5",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_NativeMetaTransaction_$346",
                "typeString": "contract NativeMetaTransaction"
              }
            },
            "id": 435,
            "nodeType": "InheritanceSpecifier",
            "src": "343:21:5"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 436,
              "name": "ContextMixin",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 37,
              "src": "370:12:5",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ContextMixin_$37",
                "typeString": "contract ContextMixin"
              }
            },
            "id": 437,
            "nodeType": "InheritanceSpecifier",
            "src": "370:12:5"
          }
        ],
        "contractDependencies": [
          37,
          153,
          346,
          672,
          980,
          1054,
          1066,
          1495,
          1564,
          1661,
          1740,
          2788,
          2803,
          2966,
          3667
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 627,
        "linearizedBaseContracts": [
          627,
          37,
          346,
          153,
          1495,
          1740,
          3667,
          1661,
          2788,
          2803,
          2966,
          1054,
          1066,
          980,
          672,
          1564
        ],
        "name": "SoapPunkCollectiblesChild",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "functionSelector": "a3b0b5a3",
            "id": 442,
            "mutability": "constant",
            "name": "DEPOSITOR_ROLE",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 627,
            "src": "389:68:5",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 438,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "389:7:5",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "argumentTypes": null,
              "arguments": [
                {
                  "argumentTypes": null,
                  "hexValue": "4445504f5349544f525f524f4c45",
                  "id": 440,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "440:16:5",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_8f4f2da22e8ac8f11e15f9fc141cddbb5deea8800186560abb6e68c5496619a9",
                    "typeString": "literal_string \"DEPOSITOR_ROLE\""
                  },
                  "value": "DEPOSITOR_ROLE"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_8f4f2da22e8ac8f11e15f9fc141cddbb5deea8800186560abb6e68c5496619a9",
                    "typeString": "literal_string \"DEPOSITOR_ROLE\""
                  }
                ],
                "id": 439,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": -8,
                "src": "430:9:5",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                  "typeString": "function (bytes memory) pure returns (bytes32)"
                }
              },
              "id": 441,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "430:27:5",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "07a974fc",
            "id": 446,
            "mutability": "mutable",
            "name": "withdrawnTokens",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 627,
            "src": "463:48:5",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
              "typeString": "mapping(uint256 => bool)"
            },
            "typeName": {
              "id": 445,
              "keyType": {
                "id": 443,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "472:7:5",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "463:25:5",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                "typeString": "mapping(uint256 => bool)"
              },
              "valueType": {
                "id": 444,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "483:4:5",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 468,
              "nodeType": "Block",
              "src": "606:166:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 456,
                        "name": "newuri",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 448,
                        "src": "649:6:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 455,
                      "name": "__ERC1155PresetMinterPauser_init",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1338,
                      "src": "616:32:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory)"
                      }
                    },
                    "id": 457,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "616:40:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 458,
                  "nodeType": "ExpressionStatement",
                  "src": "616:40:5"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 460,
                        "name": "DEPOSITOR_ROLE",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 442,
                        "src": "678:14:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 461,
                        "name": "childChainManager",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 450,
                        "src": "694:17:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 459,
                      "name": "_setupRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 902,
                      "src": "667:10:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address)"
                      }
                    },
                    "id": 462,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "667:45:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 463,
                  "nodeType": "ExpressionStatement",
                  "src": "667:45:5"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "536f757050756e6b436f6c6c65637469626c6573",
                        "id": 465,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "741:22:5",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_79e5a285a0cacc9b8cdf923137aba7973decb2744e093c3107b14460c435bcf1",
                          "typeString": "literal_string \"SoupPunkCollectibles\""
                        },
                        "value": "SoupPunkCollectibles"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_79e5a285a0cacc9b8cdf923137aba7973decb2744e093c3107b14460c435bcf1",
                          "typeString": "literal_string \"SoupPunkCollectibles\""
                        }
                      ],
                      "id": 464,
                      "name": "_initializeEIP712",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 77,
                      "src": "723:17:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory)"
                      }
                    },
                    "id": 466,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "723:41:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 467,
                  "nodeType": "ExpressionStatement",
                  "src": "723:41:5"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "7ab4339d",
            "id": 469,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 453,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 452,
                  "name": "initializer",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1541,
                  "src": "587:11:5",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "587:11:5"
              }
            ],
            "name": "initialize",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 451,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 448,
                  "mutability": "mutable",
                  "name": "newuri",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 469,
                  "src": "538:20:5",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 447,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "538:6:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 450,
                  "mutability": "mutable",
                  "name": "childChainManager",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 469,
                  "src": "560:25:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 449,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "560:7:5",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "537:49:5"
            },
            "returnParameters": {
              "id": 454,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "606:0:5"
            },
            "scope": 627,
            "src": "518:254:5",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 494,
              "nodeType": "Block",
              "src": "836:188:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 478,
                            "name": "DEFAULT_ADMIN_ROLE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 719,
                            "src": "863:18:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 479,
                              "name": "_msgSender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 656,
                              "src": "883:10:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                                "typeString": "function () view returns (address payable)"
                              }
                            },
                            "id": 480,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "883:12:5",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          ],
                          "id": 477,
                          "name": "hasRole",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 765,
                          "src": "855:7:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                            "typeString": "function (bytes32,address) view returns (bool)"
                          }
                        },
                        "id": 481,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "855:41:5",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "536f617050756e6b436f6c6c65637469626c65733a206d75737420686176652061646d696e20726f6c6520746f206368616e676520757269",
                        "id": 482,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "898:58:5",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_ab12380580ce4ee50a5c3900a9d130f292ca85a110b14ccbc40ad360e2c64f29",
                          "typeString": "literal_string \"SoapPunkCollectibles: must have admin role to change uri\""
                        },
                        "value": "SoapPunkCollectibles: must have admin role to change uri"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_ab12380580ce4ee50a5c3900a9d130f292ca85a110b14ccbc40ad360e2c64f29",
                          "typeString": "literal_string \"SoapPunkCollectibles: must have admin role to change uri\""
                        }
                      ],
                      "id": 476,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "847:7:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 483,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "847:110:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 484,
                  "nodeType": "ExpressionStatement",
                  "src": "847:110:5"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 486,
                        "name": "newuri",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 471,
                        "src": "978:6:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 487,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 473,
                        "src": "986:2:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 485,
                      "name": "URI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2894,
                      "src": "974:3:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                        "typeString": "function (string memory,uint256)"
                      }
                    },
                    "id": 488,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "974:15:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 489,
                  "nodeType": "EmitStatement",
                  "src": "969:20:5"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 491,
                        "name": "newuri",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 471,
                        "src": "1009:6:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 490,
                      "name": "_setURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2250,
                      "src": "1001:7:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory)"
                      }
                    },
                    "id": 492,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1001:15:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 493,
                  "nodeType": "ExpressionStatement",
                  "src": "1001:15:5"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "67db3b8f",
            "id": 495,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setURI",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 474,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 471,
                  "mutability": "mutable",
                  "name": "newuri",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 495,
                  "src": "795:20:5",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 470,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "795:6:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 473,
                  "mutability": "mutable",
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 495,
                  "src": "817:10:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 472,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "817:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "794:34:5"
            },
            "returnParameters": {
              "id": 475,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "836:0:5"
            },
            "scope": 627,
            "src": "779:245:5",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "baseFunctions": [
              1393
            ],
            "body": {
              "id": 512,
              "nodeType": "Block",
              "src": "1145:120:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "66616c7365",
                        "id": 508,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1196:5:5",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "536f617050756e6b436f6c6c65637469626c65733a2063616e6e6f74206d696e74206f6e206368696c6420636f6e7472616374",
                        "id": 509,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1203:53:5",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_81fc2028d668a0230c09c1e3e48b5fedc6ac4f2dd4dab027a1dd246596db5f64",
                          "typeString": "literal_string \"SoapPunkCollectibles: cannot mint on child contract\""
                        },
                        "value": "SoapPunkCollectibles: cannot mint on child contract"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_81fc2028d668a0230c09c1e3e48b5fedc6ac4f2dd4dab027a1dd246596db5f64",
                          "typeString": "literal_string \"SoapPunkCollectibles: cannot mint on child contract\""
                        }
                      ],
                      "id": 507,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1188:7:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 510,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1188:69:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 511,
                  "nodeType": "ExpressionStatement",
                  "src": "1188:69:5"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "731133e9",
            "id": 513,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 505,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1136:8:5"
            },
            "parameters": {
              "id": 504,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 497,
                  "mutability": "mutable",
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 513,
                  "src": "1070:10:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 496,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1070:7:5",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 499,
                  "mutability": "mutable",
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 513,
                  "src": "1082:10:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 498,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1082:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 501,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 513,
                  "src": "1094:14:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 500,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1094:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 503,
                  "mutability": "mutable",
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 513,
                  "src": "1110:17:5",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 502,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1110:5:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1069:59:5"
            },
            "returnParameters": {
              "id": 506,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1145:0:5"
            },
            "scope": 627,
            "src": "1056:209:5",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "baseFunctions": [
              1424
            ],
            "body": {
              "id": 532,
              "nodeType": "Block",
              "src": "1386:120:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "66616c7365",
                        "id": 528,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1437:5:5",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "536f617050756e6b436f6c6c65637469626c65733a2063616e6e6f74206d696e74206f6e206368696c6420636f6e7472616374",
                        "id": 529,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1444:53:5",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_81fc2028d668a0230c09c1e3e48b5fedc6ac4f2dd4dab027a1dd246596db5f64",
                          "typeString": "literal_string \"SoapPunkCollectibles: cannot mint on child contract\""
                        },
                        "value": "SoapPunkCollectibles: cannot mint on child contract"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_81fc2028d668a0230c09c1e3e48b5fedc6ac4f2dd4dab027a1dd246596db5f64",
                          "typeString": "literal_string \"SoapPunkCollectibles: cannot mint on child contract\""
                        }
                      ],
                      "id": 527,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1429:7:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 530,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1429:69:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 531,
                  "nodeType": "ExpressionStatement",
                  "src": "1429:69:5"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "1f7fdffa",
            "id": 533,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mintBatch",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 525,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1377:8:5"
            },
            "parameters": {
              "id": 524,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 515,
                  "mutability": "mutable",
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 533,
                  "src": "1291:10:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 514,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1291:7:5",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 518,
                  "mutability": "mutable",
                  "name": "ids",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 533,
                  "src": "1303:20:5",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 516,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1303:7:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 517,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1303:9:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 521,
                  "mutability": "mutable",
                  "name": "amounts",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 533,
                  "src": "1325:24:5",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 519,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1325:7:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 520,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1325:9:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 523,
                  "mutability": "mutable",
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 533,
                  "src": "1351:17:5",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 522,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1351:5:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1290:79:5"
            },
            "returnParameters": {
              "id": 526,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1386:0:5"
            },
            "scope": 627,
            "src": "1272:234:5",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 591,
              "nodeType": "Block",
              "src": "1996:432:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 543,
                            "name": "DEPOSITOR_ROLE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 442,
                            "src": "2022:14:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 544,
                              "name": "_msgSender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 656,
                              "src": "2038:10:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                                "typeString": "function () view returns (address payable)"
                              }
                            },
                            "id": 545,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2038:12:5",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          ],
                          "id": 542,
                          "name": "hasRole",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 765,
                          "src": "2014:7:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                            "typeString": "function (bytes32,address) view returns (bool)"
                          }
                        },
                        "id": 546,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2014:37:5",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "536f617050756e6b436f6c6c65637469626c65733a206d7573742068617665206465706f7369746f7220726f6c6520746f206d616b65206465706f736974",
                        "id": 547,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2053:64:5",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_b8a47702a361f1650f7bc2a9cce3d029b1907a86b10405a15f867596f04b6b27",
                          "typeString": "literal_string \"SoapPunkCollectibles: must have depositor role to make deposit\""
                        },
                        "value": "SoapPunkCollectibles: must have depositor role to make deposit"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_b8a47702a361f1650f7bc2a9cce3d029b1907a86b10405a15f867596f04b6b27",
                          "typeString": "literal_string \"SoapPunkCollectibles: must have depositor role to make deposit\""
                        }
                      ],
                      "id": 541,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2006:7:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 548,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2006:112:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 549,
                  "nodeType": "ExpressionStatement",
                  "src": "2006:112:5"
                },
                {
                  "assignments": [
                    554,
                    557,
                    559
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 554,
                      "mutability": "mutable",
                      "name": "ids",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 591,
                      "src": "2142:20:5",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 552,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2142:7:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 553,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "2142:9:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 557,
                      "mutability": "mutable",
                      "name": "amounts",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 591,
                      "src": "2176:24:5",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 555,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2176:7:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 556,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "2176:9:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 559,
                      "mutability": "mutable",
                      "name": "data",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 591,
                      "src": "2214:17:5",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 558,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "2214:5:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 573,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 562,
                        "name": "depositData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 538,
                        "src": "2255:11:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "components": [
                          {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 564,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2269:7:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 563,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "2269:7:5",
                                "typeDescriptions": {
                                  "typeIdentifier": null,
                                  "typeString": null
                                }
                              }
                            },
                            "id": 565,
                            "indexExpression": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2269:9:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_array$_t_uint256_$dyn_memory_ptr_$",
                              "typeString": "type(uint256[] memory)"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 567,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2280:7:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 566,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "2280:7:5",
                                "typeDescriptions": {
                                  "typeIdentifier": null,
                                  "typeString": null
                                }
                              }
                            },
                            "id": 568,
                            "indexExpression": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2280:9:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_array$_t_uint256_$dyn_memory_ptr_$",
                              "typeString": "type(uint256[] memory)"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 570,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2291:5:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                              "typeString": "type(bytes storage pointer)"
                            },
                            "typeName": {
                              "id": 569,
                              "name": "bytes",
                              "nodeType": "ElementaryTypeName",
                              "src": "2291:5:5",
                              "typeDescriptions": {
                                "typeIdentifier": null,
                                "typeString": null
                              }
                            }
                          }
                        ],
                        "id": 571,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "2268:29:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$_t_type$_t_array$_t_uint256_$dyn_memory_ptr_$_$_t_type$_t_array$_t_uint256_$dyn_memory_ptr_$_$_t_type$_t_bytes_storage_ptr_$_$",
                          "typeString": "tuple(type(uint256[] memory),type(uint256[] memory),type(bytes storage pointer))"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        },
                        {
                          "typeIdentifier": "t_tuple$_t_type$_t_array$_t_uint256_$dyn_memory_ptr_$_$_t_type$_t_array$_t_uint256_$dyn_memory_ptr_$_$_t_type$_t_bytes_storage_ptr_$_$",
                          "typeString": "tuple(type(uint256[] memory),type(uint256[] memory),type(bytes storage pointer))"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 560,
                        "name": "abi",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -1,
                        "src": "2244:3:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_abi",
                          "typeString": "abi"
                        }
                      },
                      "id": 561,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberName": "decode",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2244:10:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                        "typeString": "function () pure"
                      }
                    },
                    "id": 572,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2244:54:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(uint256[] memory,uint256[] memory,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2128:170:5"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 580,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 575,
                          "name": "user",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 536,
                          "src": "2316:4:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "307830",
                              "id": 578,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2332:3:5",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0x0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 577,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2324:7:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 576,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2324:7:5",
                              "typeDescriptions": {
                                "typeIdentifier": null,
                                "typeString": null
                              }
                            }
                          },
                          "id": 579,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2324:12:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "2316:20:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4368696c64455243313135353a20494e56414c49445f4445504f5349545f55534552",
                        "id": 581,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2338:36:5",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_35953ba125b6d5aa071c956cb1eefa1c6396e1e83fac9fe1cb54e8374940d990",
                          "typeString": "literal_string \"ChildERC1155: INVALID_DEPOSIT_USER\""
                        },
                        "value": "ChildERC1155: INVALID_DEPOSIT_USER"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_35953ba125b6d5aa071c956cb1eefa1c6396e1e83fac9fe1cb54e8374940d990",
                          "typeString": "literal_string \"ChildERC1155: INVALID_DEPOSIT_USER\""
                        }
                      ],
                      "id": 574,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2308:7:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 582,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2308:67:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 583,
                  "nodeType": "ExpressionStatement",
                  "src": "2308:67:5"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 585,
                        "name": "user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 536,
                        "src": "2396:4:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 586,
                        "name": "ids",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 554,
                        "src": "2402:3:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 587,
                        "name": "amounts",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 557,
                        "src": "2407:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 588,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 559,
                        "src": "2416:4:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 584,
                      "name": "_mintBatch",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2440,
                      "src": "2385:10:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256[] memory,uint256[] memory,bytes memory)"
                      }
                    },
                    "id": 589,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2385:36:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 590,
                  "nodeType": "ExpressionStatement",
                  "src": "2385:36:5"
                }
              ]
            },
            "documentation": {
              "id": 534,
              "nodeType": "StructuredDocumentation",
              "src": "1528:383:5",
              "text": "@notice called when tokens are deposited on root chain\n@dev Should be callable only by ChildChainManager\nShould handle deposit by minting the required tokens for user\nMake sure minting is done only by this function\n@param user user address for whom deposit is being done\n@param depositData abi encoded ids array and amounts array"
            },
            "functionSelector": "cf2c52cb",
            "id": 592,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deposit",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 539,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 536,
                  "mutability": "mutable",
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 592,
                  "src": "1933:12:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 535,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1933:7:5",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 538,
                  "mutability": "mutable",
                  "name": "depositData",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 592,
                  "src": "1947:26:5",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 537,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1947:5:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1932:42:5"
            },
            "returnParameters": {
              "id": 540,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1996:0:5"
            },
            "scope": 627,
            "src": "1916:512:5",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 607,
              "nodeType": "Block",
              "src": "2765:48:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 601,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 656,
                          "src": "2781:10:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                            "typeString": "function () view returns (address payable)"
                          }
                        },
                        "id": 602,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2781:12:5",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 603,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 595,
                        "src": "2795:2:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 604,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 597,
                        "src": "2799:6:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 600,
                      "name": "_burn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2509,
                      "src": "2775:5:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256,uint256)"
                      }
                    },
                    "id": 605,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2775:31:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 606,
                  "nodeType": "ExpressionStatement",
                  "src": "2775:31:5"
                }
              ]
            },
            "documentation": {
              "id": 593,
              "nodeType": "StructuredDocumentation",
              "src": "2434:265:5",
              "text": "@notice called when user wants to withdraw single token back to root chain\n@dev Should burn user's tokens. This transaction will be verified when exiting on root chain\n@param id id to withdraw\n@param amount amount to withdraw"
            },
            "functionSelector": "2262f53f",
            "id": 608,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "withdrawSingle",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 598,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 595,
                  "mutability": "mutable",
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 608,
                  "src": "2728:10:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 594,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2728:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 597,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 608,
                  "src": "2740:14:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 596,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2740:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2727:28:5"
            },
            "returnParameters": {
              "id": 599,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2765:0:5"
            },
            "scope": 627,
            "src": "2704:109:5",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 625,
              "nodeType": "Block",
              "src": "3189:55:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 619,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 656,
                          "src": "3210:10:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                            "typeString": "function () view returns (address payable)"
                          }
                        },
                        "id": 620,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3210:12:5",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 621,
                        "name": "ids",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 612,
                        "src": "3224:3:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                          "typeString": "uint256[] calldata"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 622,
                        "name": "amounts",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 615,
                        "src": "3229:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                          "typeString": "uint256[] calldata"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                          "typeString": "uint256[] calldata"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                          "typeString": "uint256[] calldata"
                        }
                      ],
                      "id": 618,
                      "name": "_burnBatch",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2604,
                      "src": "3199:10:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256[] memory,uint256[] memory)"
                      }
                    },
                    "id": 623,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3199:38:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 624,
                  "nodeType": "ExpressionStatement",
                  "src": "3199:38:5"
                }
              ]
            },
            "documentation": {
              "id": 609,
              "nodeType": "StructuredDocumentation",
              "src": "2819:269:5",
              "text": "@notice called when user wants to batch withdraw tokens back to root chain\n@dev Should burn user's tokens. This transaction will be verified when exiting on root chain\n@param ids ids to withdraw\n@param amounts amounts to withdraw"
            },
            "functionSelector": "5c5fb521",
            "id": 626,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "withdrawBatch",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 616,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 612,
                  "mutability": "mutable",
                  "name": "ids",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 626,
                  "src": "3116:22:5",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 610,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3116:7:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 611,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "3116:9:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 615,
                  "mutability": "mutable",
                  "name": "amounts",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 626,
                  "src": "3140:26:5",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 613,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3140:7:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 614,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "3140:9:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3115:52:5"
            },
            "returnParameters": {
              "id": 617,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3189:0:5"
            },
            "scope": 627,
            "src": "3093:151:5",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 628,
        "src": "259:2988:5"
      }
    ],
    "src": "0:3248:5"
  },
  "legacyAST": {
    "absolutePath": "/home/gabriel/Documentos/Trabajo/Eibriel/Proyectos/Decentraland/GoldRush/SPContracts/matic/contracts/SoupPunk_child.sol",
    "exportedSymbols": {
      "SoapPunkCollectiblesChild": [
        627
      ]
    },
    "id": 628,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 426,
        "literals": [
          "solidity",
          "^",
          "0.6",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:5"
      },
      {
        "absolutePath": "@openzeppelin/contracts-upgradeable/presets/ERC1155PresetMinterPauserUpgradeable.sol",
        "file": "@openzeppelin/contracts-upgradeable/presets/ERC1155PresetMinterPauserUpgradeable.sol",
        "id": 427,
        "nodeType": "ImportDirective",
        "scope": 628,
        "sourceUnit": 1496,
        "src": "25:94:5",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/gabriel/Documentos/Trabajo/Eibriel/Proyectos/Decentraland/GoldRush/SPContracts/common/NativeMetaTransaction.sol",
        "file": "../../common/NativeMetaTransaction.sol",
        "id": 429,
        "nodeType": "ImportDirective",
        "scope": 628,
        "sourceUnit": 347,
        "src": "120:77:5",
        "symbolAliases": [
          {
            "foreign": {
              "argumentTypes": null,
              "id": 428,
              "name": "NativeMetaTransaction",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": null,
              "src": "128:21:5",
              "typeDescriptions": {
                "typeIdentifier": null,
                "typeString": null
              }
            },
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/gabriel/Documentos/Trabajo/Eibriel/Proyectos/Decentraland/GoldRush/SPContracts/common/ContextMixin.sol",
        "file": "../../common/ContextMixin.sol",
        "id": 431,
        "nodeType": "ImportDirective",
        "scope": 628,
        "sourceUnit": 38,
        "src": "198:59:5",
        "symbolAliases": [
          {
            "foreign": {
              "argumentTypes": null,
              "id": 430,
              "name": "ContextMixin",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": null,
              "src": "206:12:5",
              "typeDescriptions": {
                "typeIdentifier": null,
                "typeString": null
              }
            },
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 432,
              "name": "ERC1155PresetMinterPauserUpgradeable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1495,
              "src": "301:36:5",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC1155PresetMinterPauserUpgradeable_$1495",
                "typeString": "contract ERC1155PresetMinterPauserUpgradeable"
              }
            },
            "id": 433,
            "nodeType": "InheritanceSpecifier",
            "src": "301:36:5"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 434,
              "name": "NativeMetaTransaction",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 346,
              "src": "343:21:5",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_NativeMetaTransaction_$346",
                "typeString": "contract NativeMetaTransaction"
              }
            },
            "id": 435,
            "nodeType": "InheritanceSpecifier",
            "src": "343:21:5"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 436,
              "name": "ContextMixin",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 37,
              "src": "370:12:5",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ContextMixin_$37",
                "typeString": "contract ContextMixin"
              }
            },
            "id": 437,
            "nodeType": "InheritanceSpecifier",
            "src": "370:12:5"
          }
        ],
        "contractDependencies": [
          37,
          153,
          346,
          672,
          980,
          1054,
          1066,
          1495,
          1564,
          1661,
          1740,
          2788,
          2803,
          2966,
          3667
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 627,
        "linearizedBaseContracts": [
          627,
          37,
          346,
          153,
          1495,
          1740,
          3667,
          1661,
          2788,
          2803,
          2966,
          1054,
          1066,
          980,
          672,
          1564
        ],
        "name": "SoapPunkCollectiblesChild",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "functionSelector": "a3b0b5a3",
            "id": 442,
            "mutability": "constant",
            "name": "DEPOSITOR_ROLE",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 627,
            "src": "389:68:5",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 438,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "389:7:5",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "argumentTypes": null,
              "arguments": [
                {
                  "argumentTypes": null,
                  "hexValue": "4445504f5349544f525f524f4c45",
                  "id": 440,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "440:16:5",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_8f4f2da22e8ac8f11e15f9fc141cddbb5deea8800186560abb6e68c5496619a9",
                    "typeString": "literal_string \"DEPOSITOR_ROLE\""
                  },
                  "value": "DEPOSITOR_ROLE"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_8f4f2da22e8ac8f11e15f9fc141cddbb5deea8800186560abb6e68c5496619a9",
                    "typeString": "literal_string \"DEPOSITOR_ROLE\""
                  }
                ],
                "id": 439,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": -8,
                "src": "430:9:5",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                  "typeString": "function (bytes memory) pure returns (bytes32)"
                }
              },
              "id": 441,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "430:27:5",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "07a974fc",
            "id": 446,
            "mutability": "mutable",
            "name": "withdrawnTokens",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 627,
            "src": "463:48:5",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
              "typeString": "mapping(uint256 => bool)"
            },
            "typeName": {
              "id": 445,
              "keyType": {
                "id": 443,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "472:7:5",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "463:25:5",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                "typeString": "mapping(uint256 => bool)"
              },
              "valueType": {
                "id": 444,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "483:4:5",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 468,
              "nodeType": "Block",
              "src": "606:166:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 456,
                        "name": "newuri",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 448,
                        "src": "649:6:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 455,
                      "name": "__ERC1155PresetMinterPauser_init",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1338,
                      "src": "616:32:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory)"
                      }
                    },
                    "id": 457,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "616:40:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 458,
                  "nodeType": "ExpressionStatement",
                  "src": "616:40:5"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 460,
                        "name": "DEPOSITOR_ROLE",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 442,
                        "src": "678:14:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 461,
                        "name": "childChainManager",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 450,
                        "src": "694:17:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 459,
                      "name": "_setupRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 902,
                      "src": "667:10:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address)"
                      }
                    },
                    "id": 462,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "667:45:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 463,
                  "nodeType": "ExpressionStatement",
                  "src": "667:45:5"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "536f757050756e6b436f6c6c65637469626c6573",
                        "id": 465,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "741:22:5",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_79e5a285a0cacc9b8cdf923137aba7973decb2744e093c3107b14460c435bcf1",
                          "typeString": "literal_string \"SoupPunkCollectibles\""
                        },
                        "value": "SoupPunkCollectibles"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_79e5a285a0cacc9b8cdf923137aba7973decb2744e093c3107b14460c435bcf1",
                          "typeString": "literal_string \"SoupPunkCollectibles\""
                        }
                      ],
                      "id": 464,
                      "name": "_initializeEIP712",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 77,
                      "src": "723:17:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory)"
                      }
                    },
                    "id": 466,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "723:41:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 467,
                  "nodeType": "ExpressionStatement",
                  "src": "723:41:5"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "7ab4339d",
            "id": 469,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 453,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 452,
                  "name": "initializer",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1541,
                  "src": "587:11:5",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "587:11:5"
              }
            ],
            "name": "initialize",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 451,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 448,
                  "mutability": "mutable",
                  "name": "newuri",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 469,
                  "src": "538:20:5",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 447,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "538:6:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 450,
                  "mutability": "mutable",
                  "name": "childChainManager",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 469,
                  "src": "560:25:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 449,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "560:7:5",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "537:49:5"
            },
            "returnParameters": {
              "id": 454,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "606:0:5"
            },
            "scope": 627,
            "src": "518:254:5",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 494,
              "nodeType": "Block",
              "src": "836:188:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 478,
                            "name": "DEFAULT_ADMIN_ROLE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 719,
                            "src": "863:18:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 479,
                              "name": "_msgSender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 656,
                              "src": "883:10:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                                "typeString": "function () view returns (address payable)"
                              }
                            },
                            "id": 480,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "883:12:5",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          ],
                          "id": 477,
                          "name": "hasRole",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 765,
                          "src": "855:7:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                            "typeString": "function (bytes32,address) view returns (bool)"
                          }
                        },
                        "id": 481,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "855:41:5",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "536f617050756e6b436f6c6c65637469626c65733a206d75737420686176652061646d696e20726f6c6520746f206368616e676520757269",
                        "id": 482,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "898:58:5",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_ab12380580ce4ee50a5c3900a9d130f292ca85a110b14ccbc40ad360e2c64f29",
                          "typeString": "literal_string \"SoapPunkCollectibles: must have admin role to change uri\""
                        },
                        "value": "SoapPunkCollectibles: must have admin role to change uri"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_ab12380580ce4ee50a5c3900a9d130f292ca85a110b14ccbc40ad360e2c64f29",
                          "typeString": "literal_string \"SoapPunkCollectibles: must have admin role to change uri\""
                        }
                      ],
                      "id": 476,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "847:7:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 483,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "847:110:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 484,
                  "nodeType": "ExpressionStatement",
                  "src": "847:110:5"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 486,
                        "name": "newuri",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 471,
                        "src": "978:6:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 487,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 473,
                        "src": "986:2:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 485,
                      "name": "URI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2894,
                      "src": "974:3:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                        "typeString": "function (string memory,uint256)"
                      }
                    },
                    "id": 488,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "974:15:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 489,
                  "nodeType": "EmitStatement",
                  "src": "969:20:5"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 491,
                        "name": "newuri",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 471,
                        "src": "1009:6:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 490,
                      "name": "_setURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2250,
                      "src": "1001:7:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory)"
                      }
                    },
                    "id": 492,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1001:15:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 493,
                  "nodeType": "ExpressionStatement",
                  "src": "1001:15:5"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "67db3b8f",
            "id": 495,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setURI",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 474,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 471,
                  "mutability": "mutable",
                  "name": "newuri",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 495,
                  "src": "795:20:5",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 470,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "795:6:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 473,
                  "mutability": "mutable",
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 495,
                  "src": "817:10:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 472,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "817:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "794:34:5"
            },
            "returnParameters": {
              "id": 475,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "836:0:5"
            },
            "scope": 627,
            "src": "779:245:5",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "baseFunctions": [
              1393
            ],
            "body": {
              "id": 512,
              "nodeType": "Block",
              "src": "1145:120:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "66616c7365",
                        "id": 508,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1196:5:5",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "536f617050756e6b436f6c6c65637469626c65733a2063616e6e6f74206d696e74206f6e206368696c6420636f6e7472616374",
                        "id": 509,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1203:53:5",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_81fc2028d668a0230c09c1e3e48b5fedc6ac4f2dd4dab027a1dd246596db5f64",
                          "typeString": "literal_string \"SoapPunkCollectibles: cannot mint on child contract\""
                        },
                        "value": "SoapPunkCollectibles: cannot mint on child contract"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_81fc2028d668a0230c09c1e3e48b5fedc6ac4f2dd4dab027a1dd246596db5f64",
                          "typeString": "literal_string \"SoapPunkCollectibles: cannot mint on child contract\""
                        }
                      ],
                      "id": 507,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1188:7:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 510,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1188:69:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 511,
                  "nodeType": "ExpressionStatement",
                  "src": "1188:69:5"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "731133e9",
            "id": 513,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 505,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1136:8:5"
            },
            "parameters": {
              "id": 504,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 497,
                  "mutability": "mutable",
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 513,
                  "src": "1070:10:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 496,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1070:7:5",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 499,
                  "mutability": "mutable",
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 513,
                  "src": "1082:10:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 498,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1082:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 501,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 513,
                  "src": "1094:14:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 500,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1094:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 503,
                  "mutability": "mutable",
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 513,
                  "src": "1110:17:5",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 502,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1110:5:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1069:59:5"
            },
            "returnParameters": {
              "id": 506,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1145:0:5"
            },
            "scope": 627,
            "src": "1056:209:5",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "baseFunctions": [
              1424
            ],
            "body": {
              "id": 532,
              "nodeType": "Block",
              "src": "1386:120:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "66616c7365",
                        "id": 528,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1437:5:5",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "536f617050756e6b436f6c6c65637469626c65733a2063616e6e6f74206d696e74206f6e206368696c6420636f6e7472616374",
                        "id": 529,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1444:53:5",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_81fc2028d668a0230c09c1e3e48b5fedc6ac4f2dd4dab027a1dd246596db5f64",
                          "typeString": "literal_string \"SoapPunkCollectibles: cannot mint on child contract\""
                        },
                        "value": "SoapPunkCollectibles: cannot mint on child contract"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_81fc2028d668a0230c09c1e3e48b5fedc6ac4f2dd4dab027a1dd246596db5f64",
                          "typeString": "literal_string \"SoapPunkCollectibles: cannot mint on child contract\""
                        }
                      ],
                      "id": 527,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1429:7:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 530,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1429:69:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 531,
                  "nodeType": "ExpressionStatement",
                  "src": "1429:69:5"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "1f7fdffa",
            "id": 533,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mintBatch",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 525,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1377:8:5"
            },
            "parameters": {
              "id": 524,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 515,
                  "mutability": "mutable",
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 533,
                  "src": "1291:10:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 514,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1291:7:5",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 518,
                  "mutability": "mutable",
                  "name": "ids",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 533,
                  "src": "1303:20:5",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 516,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1303:7:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 517,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1303:9:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 521,
                  "mutability": "mutable",
                  "name": "amounts",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 533,
                  "src": "1325:24:5",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 519,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1325:7:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 520,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1325:9:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 523,
                  "mutability": "mutable",
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 533,
                  "src": "1351:17:5",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 522,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1351:5:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1290:79:5"
            },
            "returnParameters": {
              "id": 526,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1386:0:5"
            },
            "scope": 627,
            "src": "1272:234:5",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 591,
              "nodeType": "Block",
              "src": "1996:432:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 543,
                            "name": "DEPOSITOR_ROLE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 442,
                            "src": "2022:14:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 544,
                              "name": "_msgSender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 656,
                              "src": "2038:10:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                                "typeString": "function () view returns (address payable)"
                              }
                            },
                            "id": 545,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2038:12:5",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          ],
                          "id": 542,
                          "name": "hasRole",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 765,
                          "src": "2014:7:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                            "typeString": "function (bytes32,address) view returns (bool)"
                          }
                        },
                        "id": 546,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2014:37:5",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "536f617050756e6b436f6c6c65637469626c65733a206d7573742068617665206465706f7369746f7220726f6c6520746f206d616b65206465706f736974",
                        "id": 547,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2053:64:5",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_b8a47702a361f1650f7bc2a9cce3d029b1907a86b10405a15f867596f04b6b27",
                          "typeString": "literal_string \"SoapPunkCollectibles: must have depositor role to make deposit\""
                        },
                        "value": "SoapPunkCollectibles: must have depositor role to make deposit"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_b8a47702a361f1650f7bc2a9cce3d029b1907a86b10405a15f867596f04b6b27",
                          "typeString": "literal_string \"SoapPunkCollectibles: must have depositor role to make deposit\""
                        }
                      ],
                      "id": 541,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2006:7:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 548,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2006:112:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 549,
                  "nodeType": "ExpressionStatement",
                  "src": "2006:112:5"
                },
                {
                  "assignments": [
                    554,
                    557,
                    559
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 554,
                      "mutability": "mutable",
                      "name": "ids",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 591,
                      "src": "2142:20:5",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 552,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2142:7:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 553,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "2142:9:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 557,
                      "mutability": "mutable",
                      "name": "amounts",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 591,
                      "src": "2176:24:5",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 555,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2176:7:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 556,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "2176:9:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 559,
                      "mutability": "mutable",
                      "name": "data",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 591,
                      "src": "2214:17:5",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 558,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "2214:5:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 573,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 562,
                        "name": "depositData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 538,
                        "src": "2255:11:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "components": [
                          {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 564,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2269:7:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 563,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "2269:7:5",
                                "typeDescriptions": {
                                  "typeIdentifier": null,
                                  "typeString": null
                                }
                              }
                            },
                            "id": 565,
                            "indexExpression": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2269:9:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_array$_t_uint256_$dyn_memory_ptr_$",
                              "typeString": "type(uint256[] memory)"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 567,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2280:7:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 566,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "2280:7:5",
                                "typeDescriptions": {
                                  "typeIdentifier": null,
                                  "typeString": null
                                }
                              }
                            },
                            "id": 568,
                            "indexExpression": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2280:9:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_array$_t_uint256_$dyn_memory_ptr_$",
                              "typeString": "type(uint256[] memory)"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 570,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2291:5:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                              "typeString": "type(bytes storage pointer)"
                            },
                            "typeName": {
                              "id": 569,
                              "name": "bytes",
                              "nodeType": "ElementaryTypeName",
                              "src": "2291:5:5",
                              "typeDescriptions": {
                                "typeIdentifier": null,
                                "typeString": null
                              }
                            }
                          }
                        ],
                        "id": 571,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "2268:29:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$_t_type$_t_array$_t_uint256_$dyn_memory_ptr_$_$_t_type$_t_array$_t_uint256_$dyn_memory_ptr_$_$_t_type$_t_bytes_storage_ptr_$_$",
                          "typeString": "tuple(type(uint256[] memory),type(uint256[] memory),type(bytes storage pointer))"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        },
                        {
                          "typeIdentifier": "t_tuple$_t_type$_t_array$_t_uint256_$dyn_memory_ptr_$_$_t_type$_t_array$_t_uint256_$dyn_memory_ptr_$_$_t_type$_t_bytes_storage_ptr_$_$",
                          "typeString": "tuple(type(uint256[] memory),type(uint256[] memory),type(bytes storage pointer))"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 560,
                        "name": "abi",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -1,
                        "src": "2244:3:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_abi",
                          "typeString": "abi"
                        }
                      },
                      "id": 561,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberName": "decode",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2244:10:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                        "typeString": "function () pure"
                      }
                    },
                    "id": 572,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2244:54:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(uint256[] memory,uint256[] memory,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2128:170:5"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 580,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 575,
                          "name": "user",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 536,
                          "src": "2316:4:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "307830",
                              "id": 578,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2332:3:5",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0x0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 577,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2324:7:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 576,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2324:7:5",
                              "typeDescriptions": {
                                "typeIdentifier": null,
                                "typeString": null
                              }
                            }
                          },
                          "id": 579,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2324:12:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "2316:20:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4368696c64455243313135353a20494e56414c49445f4445504f5349545f55534552",
                        "id": 581,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2338:36:5",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_35953ba125b6d5aa071c956cb1eefa1c6396e1e83fac9fe1cb54e8374940d990",
                          "typeString": "literal_string \"ChildERC1155: INVALID_DEPOSIT_USER\""
                        },
                        "value": "ChildERC1155: INVALID_DEPOSIT_USER"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_35953ba125b6d5aa071c956cb1eefa1c6396e1e83fac9fe1cb54e8374940d990",
                          "typeString": "literal_string \"ChildERC1155: INVALID_DEPOSIT_USER\""
                        }
                      ],
                      "id": 574,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2308:7:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 582,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2308:67:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 583,
                  "nodeType": "ExpressionStatement",
                  "src": "2308:67:5"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 585,
                        "name": "user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 536,
                        "src": "2396:4:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 586,
                        "name": "ids",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 554,
                        "src": "2402:3:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 587,
                        "name": "amounts",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 557,
                        "src": "2407:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 588,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 559,
                        "src": "2416:4:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 584,
                      "name": "_mintBatch",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2440,
                      "src": "2385:10:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256[] memory,uint256[] memory,bytes memory)"
                      }
                    },
                    "id": 589,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2385:36:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 590,
                  "nodeType": "ExpressionStatement",
                  "src": "2385:36:5"
                }
              ]
            },
            "documentation": {
              "id": 534,
              "nodeType": "StructuredDocumentation",
              "src": "1528:383:5",
              "text": "@notice called when tokens are deposited on root chain\n@dev Should be callable only by ChildChainManager\nShould handle deposit by minting the required tokens for user\nMake sure minting is done only by this function\n@param user user address for whom deposit is being done\n@param depositData abi encoded ids array and amounts array"
            },
            "functionSelector": "cf2c52cb",
            "id": 592,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deposit",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 539,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 536,
                  "mutability": "mutable",
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 592,
                  "src": "1933:12:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 535,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1933:7:5",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 538,
                  "mutability": "mutable",
                  "name": "depositData",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 592,
                  "src": "1947:26:5",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 537,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1947:5:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1932:42:5"
            },
            "returnParameters": {
              "id": 540,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1996:0:5"
            },
            "scope": 627,
            "src": "1916:512:5",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 607,
              "nodeType": "Block",
              "src": "2765:48:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 601,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 656,
                          "src": "2781:10:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                            "typeString": "function () view returns (address payable)"
                          }
                        },
                        "id": 602,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2781:12:5",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 603,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 595,
                        "src": "2795:2:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 604,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 597,
                        "src": "2799:6:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 600,
                      "name": "_burn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2509,
                      "src": "2775:5:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256,uint256)"
                      }
                    },
                    "id": 605,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2775:31:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 606,
                  "nodeType": "ExpressionStatement",
                  "src": "2775:31:5"
                }
              ]
            },
            "documentation": {
              "id": 593,
              "nodeType": "StructuredDocumentation",
              "src": "2434:265:5",
              "text": "@notice called when user wants to withdraw single token back to root chain\n@dev Should burn user's tokens. This transaction will be verified when exiting on root chain\n@param id id to withdraw\n@param amount amount to withdraw"
            },
            "functionSelector": "2262f53f",
            "id": 608,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "withdrawSingle",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 598,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 595,
                  "mutability": "mutable",
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 608,
                  "src": "2728:10:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 594,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2728:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 597,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 608,
                  "src": "2740:14:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 596,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2740:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2727:28:5"
            },
            "returnParameters": {
              "id": 599,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2765:0:5"
            },
            "scope": 627,
            "src": "2704:109:5",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 625,
              "nodeType": "Block",
              "src": "3189:55:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 619,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 656,
                          "src": "3210:10:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                            "typeString": "function () view returns (address payable)"
                          }
                        },
                        "id": 620,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3210:12:5",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 621,
                        "name": "ids",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 612,
                        "src": "3224:3:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                          "typeString": "uint256[] calldata"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 622,
                        "name": "amounts",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 615,
                        "src": "3229:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                          "typeString": "uint256[] calldata"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                          "typeString": "uint256[] calldata"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                          "typeString": "uint256[] calldata"
                        }
                      ],
                      "id": 618,
                      "name": "_burnBatch",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2604,
                      "src": "3199:10:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256[] memory,uint256[] memory)"
                      }
                    },
                    "id": 623,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3199:38:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 624,
                  "nodeType": "ExpressionStatement",
                  "src": "3199:38:5"
                }
              ]
            },
            "documentation": {
              "id": 609,
              "nodeType": "StructuredDocumentation",
              "src": "2819:269:5",
              "text": "@notice called when user wants to batch withdraw tokens back to root chain\n@dev Should burn user's tokens. This transaction will be verified when exiting on root chain\n@param ids ids to withdraw\n@param amounts amounts to withdraw"
            },
            "functionSelector": "5c5fb521",
            "id": 626,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "withdrawBatch",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 616,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 612,
                  "mutability": "mutable",
                  "name": "ids",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 626,
                  "src": "3116:22:5",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 610,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3116:7:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 611,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "3116:9:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 615,
                  "mutability": "mutable",
                  "name": "amounts",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 626,
                  "src": "3140:26:5",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 613,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3140:7:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 614,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "3140:9:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3115:52:5"
            },
            "returnParameters": {
              "id": 617,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3189:0:5"
            },
            "scope": 627,
            "src": "3093:151:5",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 628,
        "src": "259:2988:5"
      }
    ],
    "src": "0:3248:5"
  },
  "compiler": {
    "name": "solc",
    "version": "0.6.6+commit.6c089d02.Emscripten.clang"
  },
  "networks": {
    "80001": {
      "events": {
        "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "ApprovalForAll",
          "type": "event"
        },
        "0x5845892132946850460bff5a0083f71031bc5bf9aadcd40f1de79423eac9b10b": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "userAddress",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address payable",
              "name": "relayerAddress",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bytes",
              "name": "functionSignature",
              "type": "bytes"
            }
          ],
          "name": "MetaTransactionExecuted",
          "type": "event"
        },
        "0x62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "Paused",
          "type": "event"
        },
        "0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "previousAdminRole",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "newAdminRole",
              "type": "bytes32"
            }
          ],
          "name": "RoleAdminChanged",
          "type": "event"
        },
        "0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "RoleGranted",
          "type": "event"
        },
        "0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "RoleRevoked",
          "type": "event"
        },
        "0x4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256[]",
              "name": "ids",
              "type": "uint256[]"
            },
            {
              "indexed": false,
              "internalType": "uint256[]",
              "name": "values",
              "type": "uint256[]"
            }
          ],
          "name": "TransferBatch",
          "type": "event"
        },
        "0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "TransferSingle",
          "type": "event"
        },
        "0x6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "value",
              "type": "string"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            }
          ],
          "name": "URI",
          "type": "event"
        },
        "0x5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "Unpaused",
          "type": "event"
        }
      },
      "links": {},
      "address": "0xd6C120F1eca107B4c32a04b1fEb35ca9FFA9002a",
      "transactionHash": "0x78622cf4fa6f01234e60bec138160eec5210300ea15ea933be49d15efd6c1df2"
    }
  },
  "schemaVersion": "3.3.2",
  "updatedAt": "2020-11-20T15:52:21.984Z",
  "networkType": "ethereum",
  "devdoc": {
    "methods": {
      "balanceOf(address,uint256)": {
        "details": "See {IERC1155-balanceOf}.     * Requirements:     * - `account` cannot be the zero address."
      },
      "balanceOfBatch(address[],uint256[])": {
        "details": "See {IERC1155-balanceOfBatch}.     * Requirements:     * - `accounts` and `ids` must have the same length."
      },
      "deposit(address,bytes)": {
        "details": "Should be callable only by ChildChainManager Should handle deposit by minting the required tokens for user Make sure minting is done only by this function",
        "params": {
          "depositData": "abi encoded ids array and amounts array",
          "user": "user address for whom deposit is being done"
        }
      },
      "getRoleAdmin(bytes32)": {
        "details": "Returns the admin role that controls `role`. See {grantRole} and {revokeRole}.     * To change a role's admin, use {_setRoleAdmin}."
      },
      "getRoleMember(bytes32,uint256)": {
        "details": "Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive.     * Role bearers are not sorted in any particular way, and their ordering may change at any point.     * WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information."
      },
      "getRoleMemberCount(bytes32)": {
        "details": "Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role."
      },
      "grantRole(bytes32,address)": {
        "details": "Grants `role` to `account`.     * If `account` had not been already granted `role`, emits a {RoleGranted} event.     * Requirements:     * - the caller must have ``role``'s admin role."
      },
      "hasRole(bytes32,address)": {
        "details": "Returns `true` if `account` has been granted `role`."
      },
      "isApprovedForAll(address,address)": {
        "details": "See {IERC1155-isApprovedForAll}."
      },
      "pause()": {
        "details": "Pauses all token transfers.     * See {ERC1155Pausable} and {Pausable-_pause}.     * Requirements:     * - the caller must have the `PAUSER_ROLE`."
      },
      "paused()": {
        "details": "Returns true if the contract is paused, and false otherwise."
      },
      "renounceRole(bytes32,address)": {
        "details": "Revokes `role` from the calling account.     * Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced).     * If the calling account had been granted `role`, emits a {RoleRevoked} event.     * Requirements:     * - the caller must be `account`."
      },
      "revokeRole(bytes32,address)": {
        "details": "Revokes `role` from `account`.     * If `account` had been granted `role`, emits a {RoleRevoked} event.     * Requirements:     * - the caller must have ``role``'s admin role."
      },
      "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": {
        "details": "See {IERC1155-safeBatchTransferFrom}."
      },
      "safeTransferFrom(address,address,uint256,uint256,bytes)": {
        "details": "See {IERC1155-safeTransferFrom}."
      },
      "setApprovalForAll(address,bool)": {
        "details": "See {IERC1155-setApprovalForAll}."
      },
      "supportsInterface(bytes4)": {
        "details": "See {IERC165-supportsInterface}.     * Time complexity O(1), guaranteed to always use less than 30 000 gas."
      },
      "unpause()": {
        "details": "Unpauses all token transfers.     * See {ERC1155Pausable} and {Pausable-_unpause}.     * Requirements:     * - the caller must have the `PAUSER_ROLE`."
      },
      "uri(uint256)": {
        "details": "See {IERC1155MetadataURI-uri}.     * This implementation returns the same URI for *all* token types. It relies on the token type ID substitution mechanism https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the EIP].     * Clients calling this function must replace the `\\{id\\}` substring with the actual token type ID."
      },
      "withdrawBatch(uint256[],uint256[])": {
        "details": "Should burn user's tokens. This transaction will be verified when exiting on root chain",
        "params": {
          "amounts": "amounts to withdraw",
          "ids": "ids to withdraw"
        }
      },
      "withdrawSingle(uint256,uint256)": {
        "details": "Should burn user's tokens. This transaction will be verified when exiting on root chain",
        "params": {
          "amount": "amount to withdraw",
          "id": "id to withdraw"
        }
      }
    }
  },
  "userdoc": {
    "methods": {
      "deposit(address,bytes)": {
        "notice": "called when tokens are deposited on root chain"
      },
      "withdrawBatch(uint256[],uint256[])": {
        "notice": "called when user wants to batch withdraw tokens back to root chain"
      },
      "withdrawSingle(uint256,uint256)": {
        "notice": "called when user wants to withdraw single token back to root chain"
      }
    }
  }
}
