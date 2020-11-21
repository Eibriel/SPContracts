const { deployProxy } = require('@openzeppelin/truffle-upgrades')

const SoapPunkCollectiblesChild = artifacts.require('SoapPunkCollectiblesChild')

const uri = "https://metadata.soappunk.com/sperc1155/v1/{id}.json"

const owner = "0xCF10CD8B5Dc2323B1eb6de6164647756BAd4dE4d"

module.exports = async function (deployer, network, accounts) {
    console.log(network)
    console.log(accounts[0])

    let childChainManager
    if (network === "mumbai" || network === "test") {
        childChainManager = "0xb5505a6d998549090530911180f38aC5130101c6" //Proxy Mumbai
    } else if (network === "matic") {
        childChainManager = "0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa" //Proxy Matic
    }
    const instance = await deployProxy(SoapPunkCollectiblesChild, [uri, childChainManager], { deployer, unsafeAllowCustomTypes: true })
    console.log('SoapPunkCollectiblesChild Deployed', instance.address)

    await instance.grantRole(web3.utils.sha3("MINTER_ROLE"), owner)
    await instance.renounceRole(web3.utils.sha3("MINTER_ROLE"), accounts[0])
    await instance.grantRole(web3.utils.sha3("PAUSER_ROLE"), owner)
    await instance.renounceRole(web3.utils.sha3("PAUSER_ROLE"), accounts[0])
    await instance.grantRole(web3.utils.sha3("DEFAULT_ADMIN_ROLE"), owner)

};
