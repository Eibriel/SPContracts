const { admin, deployProxy } = require('@openzeppelin/truffle-upgrades')

const SoapPunkCollectiblesChild = artifacts.require('SoapPunkCollectiblesChild')

const uri = "https://metadata.soappunk.com/sperc1155/v1/{id}.json"

const owner = "0xCF10CD8B5Dc2323B1eb6de6164647756BAd4dE4d"

module.exports = async function (deployer, network, accounts) {
    console.log(network)
    console.log(accounts[0])

    let childChainManager
    if (network === "mumbai") {
        childChainManager = "0xb5505a6d998549090530911180f38aC5130101c6" //Proxy Mumbai
    } else if (network === "matic") {
        childChainManager = "0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa" //Proxy Matic
    } else if (network === "test") {
        childChainManager = accounts[5]
    }
    const instance = await deployProxy(SoapPunkCollectiblesChild, [uri, childChainManager], { deployer, unsafeAllowCustomTypes: true })
    console.log('SoapPunkCollectiblesChild Deployed', instance.address)

    let owner
    if (network === "test") {
        owner = accounts[9]
    } else {
        owner = "0xCF10CD8B5Dc2323B1eb6de6164647756BAd4dE4d"
    }
    console.log("Owner: " + owner)

    // Set implementation ownership
    const DEFAULT_ADMIN_ROLE = "0x00"
    const PAUSER_ROLE = web3.utils.sha3("PAUSER_ROLE")
    const MINTER_ROLE = web3.utils.sha3("MINTER_ROLE")
    await instance.grantRole(MINTER_ROLE, owner)
    console.log("grantRole MINTER_ROLE")
    await instance.renounceRole(MINTER_ROLE, accounts[0])
    console.log("renounceRole MINTER_ROLE")
    await instance.grantRole(PAUSER_ROLE, owner)
    console.log("grantRole PAUSER_ROLE")
    await instance.renounceRole(PAUSER_ROLE, accounts[0])
    console.log("renounceRole PAUSER_ROLE")
    await instance.grantRole(DEFAULT_ADMIN_ROLE, owner)
    console.log("grantRole DEFAULT_ADMIN_ROLE")
    await instance.renounceRole(DEFAULT_ADMIN_ROLE, accounts[0])
    console.log("renounceRole DEFAULT_ADMIN_ROLE")

    // Set Proxy Admin ownership
    await admin.transferProxyAdminOwnership(owner)
    console.log("transferProxyAdminOwnership")
};
