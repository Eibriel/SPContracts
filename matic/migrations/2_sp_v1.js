const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const SoapPunkCollectiblesChild = artifacts.require('SoapPunkCollectiblesChild');

const uri = "https://token-cdn-domain/{id}.json"

module.exports = async function (deployer, network, accounts) {
    console.log(network);
    console.log(accounts[0]);

    let childChainManager
    if (network === "mumbai" || network === "test") {
        childChainManager = "0xb5505a6d998549090530911180f38aC5130101c6" //Proxy Mumbai
    } else if (network === "matic") {
        childChainManager = "0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa" //Proxy Matic
    }
    const instance = await deployProxy(SoapPunkCollectiblesChild, [uri, childChainManager], { deployer, unsafeAllowCustomTypes: true });
    console.log('SoapPunkCollectiblesChild Deployed', instance.address);

};
