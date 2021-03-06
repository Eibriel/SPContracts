const { admin, deployProxy } = require('@openzeppelin/truffle-upgrades')

const SoapPunkCollectiblesChild = artifacts.require('SoapPunkCollectiblesChild')

const uri = "https://metadata.soappunk.com/sperc1155/v1/{id}.json"
const domainSeparator = "SoapPunk Collectibles"

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = async function (deployer, network, accounts) {
    console.log(network)
    console.log(accounts[0])

    let childChainManager
    let sleep_time = 0
    if (network === "matic") {
        sleep_time = 3000
    }
    if (network === "mumbai") {
        childChainManager = "0xb5505a6d998549090530911180f38aC5130101c6" //Proxy Mumbai
    } else if (network === "matic" || network === "matic-fork") {
        childChainManager = "0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa" //Proxy Matic
    } else if (network === "test" || network === "develop") {
        childChainManager = accounts[5]
    }
    console.log("childChainManager", childChainManager)
    const instance = await deployProxy(SoapPunkCollectiblesChild, [uri, domainSeparator, childChainManager], { deployer, unsafeAllowCustomTypes: true })
    console.log('SoapPunkCollectiblesChild Deployed', instance.address)

    let owner
    if (network === "test" || network === "develop") {
        owner = accounts[9]
    } else {
        // Matic don't work with Ledger at the moment
        //owner = "0xCF10CD8B5Dc2323B1eb6de6164647756BAd4dE4d"
        owner = "0x05C351382dB8D770207F319D96ac1184c3717edE"
    }
    //console.log("Owner: " + owner)

    // Set implementation ownership
    /*
    const DEFAULT_ADMIN_ROLE = "0x00"
    const PAUSER_ROLE = web3.utils.sha3("PAUSER_ROLE")
    const MINTER_ROLE = web3.utils.sha3("MINTER_ROLE")
    await sleep(sleep_time)
    await instance.grantRole(MINTER_ROLE, owner)
    console.log("grantRole MINTER_ROLE")
    await sleep(sleep_time)
    await instance.renounceRole(MINTER_ROLE, accounts[0])
    console.log("renounceRole MINTER_ROLE")
    await sleep(sleep_time)
    await instance.grantRole(PAUSER_ROLE, owner)
    console.log("grantRole PAUSER_ROLE")
    await sleep(sleep_time)
    await instance.renounceRole(PAUSER_ROLE, accounts[0])
    console.log("renounceRole PAUSER_ROLE")
    await sleep(sleep_time)
    await instance.grantRole(DEFAULT_ADMIN_ROLE, owner)
    console.log("grantRole DEFAULT_ADMIN_ROLE")
    await sleep(sleep_time)
    await instance.renounceRole(DEFAULT_ADMIN_ROLE, accounts[0])
    console.log("renounceRole DEFAULT_ADMIN_ROLE")

    // Set Proxy Admin ownership
    await sleep(sleep_time)
    await admin.transferProxyAdminOwnership(owner)
    console.log("transferProxyAdminOwnership")*/
};
