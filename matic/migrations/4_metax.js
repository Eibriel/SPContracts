const { admin, deployProxy } = require('@openzeppelin/truffle-upgrades')

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const MetaX = artifacts.require('MetaX')

module.exports = async function (deployer, network, accounts) {
    const name = "MetaX"
    const symbol = "METAX"
    const baseURI = "ipfs://"
    const domainSeparator = "Metaverse Explorer"
    const instance2 = await deployProxy(MetaX, [name, symbol, baseURI, domainSeparator], { deployer, unsafeAllowCustomTypes: true })
    console.log('MetaX Deployed', instance2.address)

    let owner
    if (network === "test") {
        owner = accounts[9]
    } else {
        // Matic don't work with Ledger at the moment
        //owner = "0xCF10CD8B5Dc2323B1eb6de6164647756BAd4dE4d"
        owner = "0x05C351382dB8D770207F319D96ac1184c3717edE"
    }
    //console.log("Owner: " + owner)


    /*
    let sleep_time = 1
    if (network === "matic") {
        sleep_time = 3000
    }
    // Set implementation ownership
    const DEFAULT_ADMIN_ROLE = "0x00"
    const PAUSER_ROLE = web3.utils.sha3("PAUSER_ROLE")
    const MINTER_ROLE = web3.utils.sha3("MINTER_ROLE")
    console.log("Current owner: ", await instance2.getRoleMember(DEFAULT_ADMIN_ROLE, 0))
    console.log("Account 0: ", accounts[0])
    await sleep(sleep_time)
    await instance.grantRole(MINTER_ROLE, owner, {from: accounts[0]})
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
}
