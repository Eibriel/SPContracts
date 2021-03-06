import { getUserAccount, RPCSendableMessage } from '@decentraland/EthereumController'
import * as ethEsm from "../node_modules/eth-connect/esm"
import * as eth from "../node_modules/eth-connect/eth-connect"
//import RootChainManagerAbi from './RootChainManagerAbi'
//import { RootChainManager } from './RootChainManager'
import { getProvider } from '@decentraland/web3-provider'
import { padding } from './utils'
//import { ERC20Matic } from './erc20'
//import abi from './erc20Abi'
import { abi } from "./SoapPunkCollectiblesChild_abi"

const addresses: {
  [network: string]: {
    l1Token: string
    l2Token: string
    ERC20Predicate: string
    RootChainManager: string
  }
} = {
  mainnet: {
    l1Token: '',
    l2Token: '',
    ERC20Predicate: '',
    RootChainManager: ''
  },
  goerli: {
    l1Token: '0x496e6291f3AdC4b5c6255ca281A75520F54B9A08',
    l2Token: '0xd6C120F1eca107B4c32a04b1fEb35ca9FFA9002a',
    ERC20Predicate: '0xdD6596F2029e6233DEFfaCa316e6A95217d4Dc34',
    RootChainManager: '0xBbD7cBFA79faee899Eaf900F13C9065bF03B1A74'
  }
}

export function getDomainData(network: string) {
  const domainData: any = {
    name: network == 'mainnet' ? '(PoS) Decentraland MANA' : 'Dummy ERC20',
    version: '1',
    verifyingContract: addresses[network].l2Token
  }
  const domainType = [
    { name: 'name', type: 'string' },
    { name: 'version', type: 'string' }
  ]
  if (network == 'mainnet') {
    domainData.salt = '0x' + padStart((137).toString(16), 64, '0')

    domainType.push(
      { name: 'verifyingContract', type: 'address' },
      { name: 'salt', type: 'bytes32' }
    )
  } else {
    domainData.chainId = 5

    domainType.push(
      { name: 'chainId', type: 'uint256' },
      { name: 'verifyingContract', type: 'address' }
    )
  }
  return [domainData, domainType]
}

/**
 * Return Contract, Provider and RequestManager
 *
 * @param contractAddress Smartcontract ETH address
 */
export async function getContract(
  contractAddress: eth.Address,
  requestManager?: eth.RequestManager
) {
  if (!requestManager) {
    const provider = await getProvider()
    requestManager = new ethEsm.RequestManager(provider)
  }
  const factory = new ethEsm.ContractFactory(requestManager, abi)
  const contract = (await factory.at(contractAddress))
  return { contract, requestManager }
}

export async function balance(address?: string, id?: number,  network: string = 'mainnet') {
  const fromAddress = address || (await getUserAccount())
  const tokenId = id || 0

  return Promise.all([
    getContract(addresses[network].l1Token).then(async ({ contract }) => {
      const balance = await contract.balanceOf(fromAddress, tokenId)
      return +balance
    }),
    getContract(
      addresses[network].l2Token,
      new ethEsm.RequestManager(
        network == 'mainnet'
          ? new ethEsm.WebSocketProvider('wss://ws-mainnet.matic.network')
          : new ethEsm.WebSocketProvider('wss://ws-mumbai.matic.today')
      )
    ).then(async ({ contract }) => {
      const balance = await contract.balanceOf(fromAddress, tokenId)
      return +balance
    })
  ]).then(v => {
    return { l1: v[0], l2: v[1] }
  })
}


export async function depositMana(amount: number, network: string = 'mainnet') {
  const fromAddress = await getUserAccount()

  const { contract, requestManager } = await getContract(addresses[network].l1Token)

  const balance = await contract.balanceOf(fromAddress)
  if (+balance < amount) return 'Balance too low'
  const allowance = await contract.allowance(fromAddress, addresses[network].ERC20Predicate)
  if (+allowance < +ethEsm.toWei(amount, 'ether')) {
    if (+allowance == 0) {
      const txId = await contract.approve(
        addresses[network].ERC20Predicate,
        +ethEsm.toWei(amount, 'ether'),
        {
          from: fromAddress
        }
      )
      let receipt = null
      while (receipt == null) {
        await delay(2000)
        receipt = await requestManager.eth_getTransactionReceipt(txId.toString())
      }
    }
    else {
      const txId1 = await contract.approve(
        addresses[network].ERC20Predicate,
        0,
        {
          from: fromAddress
        }
      )
      let receipt1 = null
      while (receipt1 == null) {
        await delay(1000)
        receipt1 = await requestManager.eth_getTransactionReceipt(txId1.toString())
      }
      const txId2 = await contract.approve(
        addresses[network].ERC20Predicate,
        +ethEsm.toWei(amount, 'ether'),
        {
          from: fromAddress
        }
      )
      let receipt2 = null
      while (receipt2 == null) {
        await delay(1000)
        receipt2 = await requestManager.eth_getTransactionReceipt(txId2.toString())
      }
    }
  }

  const factory = new ethEsm.ContractFactory(requestManager, RootChainManagerAbi)
  const maticContract = (await factory.at(addresses[network].RootChainManager)) as RootChainManager

  await maticContract.depositFor(
    fromAddress,
    addresses[network].l1Token,
    '0x' + padding((+ethEsm.toWei(amount, 'ether')).toString(16), false),
    { from: fromAddress }
  )
}


export async function sendMana(
  to: string,
  id: number,
  amount: number,
  waitUntilConfirm: boolean,
  network: string = 'mainnet'
) {
  return new Promise(async (resolve, reject) => {
    const fromAddress = await getUserAccount()

    const provider = await getProvider()
    const metamaskRM = new ethEsm.RequestManager(provider)

    await getContract(
      addresses[network].l2Token,
      new ethEsm.RequestManager(
        network == 'mainnet'
          ? new ethEsm.WebSocketProvider('wss://ws-mainnet.matic.network')
          : new ethEsm.WebSocketProvider('wss://ws-mumbai.matic.today')
      )
    ).then(async ({ contract, requestManager }) => {
      const balance = await contract.balanceOf(fromAddress, id)
      if (balance < amount) return 'balance too low'

      const [domainData, domainType] = getDomainData(network)

      const metaTransactionType = [
        { name: 'nonce', type: 'uint256' },
        { name: 'from', type: 'address' },
        { name: 'functionSignature', type: 'bytes' }
      ]

      const functionSignature = `0xa9059cbb000000000000000000000000${to
        .toLowerCase()
        .replace('0x', '')}${padding((+ethEsm.toWei(amount, 'ether')).toString(16), false)}`

      let nonce = await contract.getNonce(fromAddress)

      let message = {
        nonce: nonce,
        from: fromAddress,
        functionSignature: functionSignature
      }

      const dataToSign = JSON.stringify({
        types: {
          EIP712Domain: domainType,
          MetaTransaction: metaTransactionType
        },
        domain: domainData,
        primaryType: 'MetaTransaction',
        message: message
      })

      metamaskRM.provider.sendAsync(
        {
          method: 'eth_signTypedData_v4',
          params: [fromAddress, dataToSign],
          jsonrpc: '2.0',
          id: 999999999999
        } as RPCSendableMessage,
        async (err: any, result: any) => {
          if (err) {
            reject(err)
            return error(err)
          }
          const signature = result.result.substring(2)
          const r = '0x' + signature.substring(0, 64)
          const s = '0x' + signature.substring(64, 128)
          const v = '0x' + signature.substring(128, 130)

          await fetch('https://l2.dcl.guru/', {
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify({
              mainnet: network == 'mainnet',
              userAddress: fromAddress,
              params: [fromAddress, functionSignature, r, s, v]
            }),
            method: 'POST'
          })
            .then(r => r.json())
            .then(async r => {
              const txId = r.txHash
              let receipt = null
              while (receipt == null) {
                await delay(500)
                receipt = await requestManager.eth_getTransactionReceipt(txId.toString())
              }
              resolve({ receipt, txId })
            }).catch((e) => {
              reject(e)
            })
        }
      )
    })
  })
}

function padStart(str: string, maxLength: number, fillString: string = ' ') {
  //Return string (STR). This is to make the returned value literal, which is more intuitive in the console
  if (str.length >= maxLength) return String(str)

  let fillLength = maxLength - str.length,
    times = Math.ceil(fillLength / fillString.length)

  //What's the name of this algorithm?
  //Page 30 of the Chinese version of SiCp is applicable to the calculation of power by the same algorithm
  while ((times >>= 1)) {
    fillString += fillString
    if (times === 1) {
      fillString += fillString
    }
  }
  return fillString.slice(0, fillLength) + str
}
