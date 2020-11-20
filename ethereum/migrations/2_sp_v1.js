const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const SoapPunkCollectibles = artifacts.require('SoapPunkCollectibles');

const uri = "https://token-cdn-domain/{id}.json"

module.exports = async function (deployer, network, accounts) {
    console.log(network);
    console.log(accounts[0]);

    if (network === "goerli" || network === "mainnet") {
    }

    // OpenSea proxy registry addresses for rinkeby and mainnet.
    let proxyRegistryAddress;
    if (network === 'rinkeby') {
        proxyRegistryAddress = "0xf57b2c51ded3a29e6891aba85459d600256cf317";
    } else {
        proxyRegistryAddress = "0xa5409ec958c83c3f309868babaca7c86dcb077c1";
    }

    const instance1 = await deployProxy(SoapPunkCollectibles, [uri], { deployer, unsafeAllowCustomTypes: true });
    console.log('SoapPunkCollectibles Deployed', instance1.address);
    //console.log(instance1)
    //const deployed = instance1.deployed();
    //await instance1.contract.grantRole(web3.utils.sha3("MINTER_ROLE"), "0x05C351382dB8D770207F319D96ac1184c3717edE", { from: accounts[0] });
    //await instance1.contract.grantRole(web3.utils.sha3("DEFAULT_ADMIN_ROLE"), "0x05C351382dB8D770207F319D96ac1184c3717edE", { from: accounts[0] });

};
