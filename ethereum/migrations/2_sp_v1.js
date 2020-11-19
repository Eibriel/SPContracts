const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const SoapPunkCollectibles = artifacts.require('SoapPunkCollectibles');
const SoapPunkCollectiblesChild = artifacts.require('SoapPunkCollectiblesChild');

const uri = "https://token-cdn-domain/{id}.json"

module.exports = async function (deployer, network, accounts) {
    console.log(network);
    console.log(accounts[0]);

    if (network == "goerli" || network == "mainnet") {
        const instance1 = await deployProxy(SoapPunkCollectibles, [uri], { deployer, unsafeAllowCustomTypes: true });
        console.log('SoapPunkCollectibles Deployed', instance1.address);
        //console.log(instance1)
        //const deployed = instance1.deployed();
        //await instance1.contract.grantRole(web3.utils.sha3("MINTER_ROLE"), "0x05C351382dB8D770207F319D96ac1184c3717edE", { from: accounts[0] });
        //await instance1.contract.grantRole(web3.utils.sha3("DEFAULT_ADMIN_ROLE"), "0x05C351382dB8D770207F319D96ac1184c3717edE", { from: accounts[0] });
    }

    if (network == "mumbai" || network == "matic") {
        let childChainManager
        if (network == "mumbai") {
            childChainManager = "0xb5505a6d998549090530911180f38aC5130101c6" //Proxy Mumbai
        } else if (network == "matic") {
            childChainManager = "0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa" //Proxy Matic
        }
        const instance2 = await deployProxy(SoapPunkCollectiblesChild, [uri, childChainManager], { deployer, unsafeAllowCustomTypes: true });
        console.log('SoapPunkCollectiblesChild Deployed', instance2.address);
    }
};
