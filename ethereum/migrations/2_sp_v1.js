const { admin, deployProxy } = require('@openzeppelin/truffle-upgrades')

const SoapPunkCollectibles = artifacts.require('SoapPunkCollectibles')

const uri = "https://metadata.soappunk.com/sperc1155/v1/{id}.json"

module.exports = async function (deployer, network, accounts) {
    console.log(network)
    console.log(accounts[0])

    if (network === "goerli" || network === "mainnet") {
    }

    // OpenSea proxy registry addresses for rinkeby and mainnet.
    let proxyRegistryAddress
    if (network === 'rinkeby') {
        proxyRegistryAddress = "0xf57b2c51ded3a29e6891aba85459d600256cf317"
    } else {
        proxyRegistryAddress = "0xa5409ec958c83c3f309868babaca7c86dcb077c1"
    }

    const instance = await deployProxy(SoapPunkCollectibles, [uri], { deployer, unsafeAllowCustomTypes: true })
    console.log('SoapPunkCollectibles Deployed', instance.address)

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
