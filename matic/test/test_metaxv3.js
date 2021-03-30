const { deployProxy, upgradeProxy } = require('@openzeppelin/truffle-upgrades')
const truffleAssert = require('truffle-assertions')

const DummyERC20 = artifacts.require("DummyERC20")
const MetaX = artifacts.require('MetaX')
const MetaXV2 = artifacts.require('MetaXV2')
const MetaXV3 = artifacts.require('MetaXV3')
const SoapPunkCollectiblesChild = artifacts.require("SoapPunkCollectiblesChild")

const name = "MetaX"
const symbol = "METAX"
const baseURI = "ipfs://"
const domainSeparator = "Metaverse Explorer"

describe('MetaxV3 upgrades', () => {
    it('works', async () => {
        const erc20 = await DummyERC20.deployed()

        const metax = await deployProxy(MetaX, [name, symbol, baseURI, domainSeparator], { unsafeAllowCustomTypes: true })
        await truffleAssert.passes(metax.setSPContract(erc20.address))

        const metaxv2 = await upgradeProxy(metax.address, MetaXV2, { unsafeAllowCustomTypes: true })
        //await truffleAssert.fails(metaxv2.getPrice.call(accounts[0]))
        await truffleAssert.passes(metaxv2.setERC20(erc20.address))

        const metaxv3 = await upgradeProxy(metax.address, MetaXV3, { unsafeAllowCustomTypes: true })
        //await truffleAssert.passes(metaxv3.getPrice.call(accounts[0]))
    })
})


contract("MetaxV0 test", async accounts => {
    let owner
    let metax
    let sp

    before(async() => {
        owner = accounts[0]

        metax = await deployProxy(MetaX, [name, symbol, baseURI, domainSeparator], { unsafeAllowCustomTypes: true });
        sp = await SoapPunkCollectiblesChild.deployed()
        metax.setSPContract(sp.address)
    })

    it("getPrice on V0 passes", async () => {
        await truffleAssert.passes(metax.getPrice.call(owner))
    })

    it("getPrice on V2 fails", async () => {
        const metaxv2 = await upgradeProxy(metax.address, MetaXV2, { unsafeAllowCustomTypes: true });
        await truffleAssert.fails(metaxv2.getPrice.call(owner))
    })

    it("getPrice on V3 passes", async () => {
        const metaxv3 = await upgradeProxy(metax.address, MetaXV3, { unsafeAllowCustomTypes: true });
        await truffleAssert.passes(metaxv3.getPrice.call(owner))
    })
})
