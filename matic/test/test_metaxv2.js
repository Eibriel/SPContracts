const { deployProxy, upgradeProxy } = require('@openzeppelin/truffle-upgrades')
const truffleAssert = require('truffle-assertions')

const DummyERC20 = artifacts.require("DummyERC20")
const MetaX = artifacts.require('MetaX')
const MetaXV2 = artifacts.require('MetaXV2')
const SoapPunkCollectiblesChild = artifacts.require("SoapPunkCollectiblesChild")

const name = "MetaX"
const symbol = "METAX"
const baseURI = "ipfs://"
const domainSeparator = "Metaverse Explorer"

function toWei(number) {
    return number * 1000000000000000000
}

describe('MetaxV2 upgrades', () => {
    it('works', async () => {

        const metax = await deployProxy(MetaX, [name, symbol, baseURI, domainSeparator], { unsafeAllowCustomTypes: true });
        const metaxv2 = await upgradeProxy(metax.address, MetaXV2, { unsafeAllowCustomTypes: true });
    })
})

contract("MetaxV2 test", async accounts => {
    let owner
    let instance
    let erc20

    before(async() => {
        owner = accounts[0]

        const metax = await deployProxy(MetaX, [name, symbol, baseURI, domainSeparator], { unsafeAllowCustomTypes: true });
        instance = await upgradeProxy(metax.address, MetaXV2, { unsafeAllowCustomTypes: true });

        erc20 = await DummyERC20.deployed()

        await erc20.transfer(accounts[3], String(toWei(10)))
        await erc20.transfer(accounts[5], String(toWei(10)))
    })

    it("call to setERC20, from account that is not admin, should fail", async () => {

      const not_owner = accounts[1]

      await truffleAssert.reverts(instance.setERC20(erc20.address, {
              from: not_owner
          }),
          "MetaX: must have admin role to set token"
      )
    })

    it("setERC20 from admin should work", async () => {

      await truffleAssert.passes(instance.setERC20(erc20.address))
    })

    it("metaverse uri for 0 should be ipfs://0", async () => {
        //const instance = await MetaX.deployed()

        let metaverse_uri = await instance.getMetaverse.call(0)

        assert.equal(metaverse_uri, "ipfs://0")
    })


    it("call to setBaseURI, from account that is not admin, should fail", async () => {
        //const instance = await MetaX.deployed()
        const not_owner = accounts[1]

        await truffleAssert.reverts(instance.setBaseURI("ipfs://", 0, {
                from: not_owner
            }),
            "MetaX: must have admin role to change uri"
        )
    })


    it("admin can call setBaseURI", async () => {
        //const instance = await MetaX.deployed()

        await truffleAssert.passes(instance.setBaseURI("ipfs://test/", 0))

        let metaverse_uri = await instance.getMetaverse.call(0)

        assert.equal(metaverse_uri, "ipfs://test/0")
    })


    it("call to setContractURI, from account that is not admin, should fail", async () => {
        //const instance = await MetaX.deployed()
        const not_owner = accounts[1]

        await truffleAssert.reverts(instance.setContractURI("ipfs://contract-metadata", {
                from: not_owner
            }),
            "MetaX: must have admin role to change contract uri"
        )
    })


    it("contract uri should be ipfs://contract-metadata", async () => {
        //const instance = await MetaX.deployed()

        let contract_uri = await instance.contractURI.call()

        assert.equal(contract_uri, "ipfs://contract-metadata")
    })


    it("admin can call setContractURI", async () => {
        //const instance = await MetaX.deployed()

        await truffleAssert.passes(instance.setContractURI("ipfs://contract-metadata-test"))

        let contract_uri = await instance.contractURI.call()

        assert.equal(contract_uri, "ipfs://contract-metadata-test")
    })


    it("set SP contract address", async () => {
        //const instance = await MetaX.deployed()
        const sp_instance = await SoapPunkCollectiblesChild.deployed()

        await truffleAssert.passes(instance.setSPContract(sp_instance.address))
    })


    it("call to setSPContract, from account that is not admin, should fail", async () => {
        //const instance = await MetaX.deployed()
        const sp_instance = await SoapPunkCollectiblesChild.deployed()

        await truffleAssert.reverts(
            instance.setSPContract(sp_instance.address, {from: accounts[1]}),
            "MetaX: must have admin role to set SP contract address."
        )
    })

    let test_this = false
    if (test_this) {
        it("having SP tokens results in reward", async () => {
            //const instance = await MetaX.deployed()
            const sp_instance = await SoapPunkCollectiblesChild.deployed()

            const price_a = await instance.getPrice.call(accounts[6])
            assert.equal(Number(price_a[1]), false)

            await sp_instance.mint(accounts[6], 0, 10, [])

            const price_b = await instance.getPrice.call(accounts[6])
            assert.equal(Number(price_b[1]), true)
        })
    }


    it("can vote", async () => {
        //const instance = await MetaX.deployed()
        await truffleAssert.passes(instance.vote(1))
    })


    it("dont fails on duplicated vote", async () => {
        //const instance = await MetaX.deployed()
        await truffleAssert.passes(instance.vote(0))
    })


    it("getPrice is 100 Matic", async () => {
        //const instance = await MetaX.deployed()

        const price = await instance.getPrice.call(owner)
        assert.equal(Number(price[0]), toWei(100))
    })


    it("getPrice's refund is false", async () => {
        //const instance = await MetaX.deployed()

        const price = await instance.getPrice.call(owner)
        assert.equal(Number(price[1]), false)
    })


    it("can setPrice", async () => {
        //const instance = await MetaX.deployed()

        // uint256 multPrice
        await truffleAssert.passes(instance.setPrice(String(toWei(0.005))))
    })

    it("call to setPrice, from account that is not admin, should fail", async () => {
        //const instance = await MetaX.deployed()
        const not_owner = accounts[1]

        await truffleAssert.reverts(instance.setPrice(String(toWei(0.005)), {
                from: not_owner
            }),
            "MetaX: must have admin role to set price"
        )
    })


    it("getPrice is 10 Wei Matic", async () => {
        //const instance = await MetaX.deployed()

        const price = await instance.getPrice.call(owner)
        assert.equal(Number(price[0]), 100000000000000000)
    })


    it("after mintArtwork balance should be 1", async () => {
        const price = await instance.getPrice.call(owner)

        await erc20.increaseAllowance(instance.address, price[0])

        const tokenId = 0
        await truffleAssert.passes(instance.mintArtwork(tokenId))
        const balance = await instance.balanceOf.call(owner)
        assert.equal(Number(balance), 1)

        const owner1 = await instance.ownerOf.call(tokenId)
        assert.equal(owner1, owner)
    })


    it("getPrice's refund is true", async () => {
        //const instance = await MetaX.deployed()

        // Get price before
        const price_a = await instance.getPrice.call(owner)
        assert.equal(Number(price_a[1]), false)

        const tokenId = 900

        // Vote for token id
        await truffleAssert.passes(instance.vote(tokenId))

        // Mint token id
        await erc20.increaseAllowance(instance.address, price_a[0], {
            from: accounts[5]
        })
        await truffleAssert.passes(instance.mintArtwork(tokenId, {
            from: accounts[5]
        }))

        // Get price after
        const price_b = await instance.getPrice.call(owner)
        assert.equal(Number(price_b[1]), true)

        assert.ok(Number(price_a[0]) > Number(price_b[0]))
    })


    it("after using refund, refund is false", async () => {
        //const instance = await MetaX.deployed()

        const tokenId = 901

        // Get price before
        const price_a = await instance.getPrice.call(owner)
        assert.equal(Number(price_a[1]), true)

        // Mint token id
        await erc20.increaseAllowance(instance.address, price_a[0])
        await truffleAssert.passes(instance.mintArtwork(tokenId))

        // Get price after
        const price_b = await instance.getPrice.call(owner)
        assert.equal(Number(price_b[1]), false)
    })


    it("cant mint or vote a burned artwork", async () => {
        //const instance = await MetaX.deployed()

        const tokenId = 950
        // Mint toke id
        const price = await instance.getPrice.call(owner)
        await erc20.increaseAllowance(instance.address, price[0])
        await truffleAssert.passes(instance.mintArtwork(tokenId))

        // Burn toke id
        await truffleAssert.passes(instance.burn(tokenId))

        // Vote for token id
        await truffleAssert.reverts(
            instance.vote(tokenId),
            "MetaX: artwork already minted",
            "vote on a minted and burned token should fail"
        )

        // Mint token id
        await erc20.increaseAllowance(instance.address, price[0])
        await truffleAssert.reverts(instance.mintArtwork(tokenId),
            "MetaX: metaverse id is already minted",
            "mintArtwork on a minted and burned token should fail"
        )
    })


    it("cant mint or vote unexisting id", async () => {
        //const instance = await MetaX.deployed()

        const tokenId = 950000

        // Vote for token id
        await truffleAssert.reverts(
            instance.vote(tokenId),
            "MetaX: metaverse id does not exists",
            "vote on unexisting id should fail"
        )

        // Mint token id
        const price = await instance.getPrice.call(owner)
        await erc20.increaseAllowance(instance.address, price[0])
        await truffleAssert.reverts(instance.mintArtwork(tokenId),
            "MetaX: metaverse id does not exists",
            "mintArtwork on unexisting id should fail"
        )
    })


    it("calling mint() should always fail", async () => {
        //const instance = await MetaX.deployed()

        await truffleAssert.reverts(instance.mint(owner, {
                from: owner
            }),
            "MetaX: mint is not allowed"
        )
    })


    it("cant mint the same artwork two times", async () => {
        //const instance = await MetaX.deployed()

        const price = await instance.getPrice.call(accounts[5])

        const tokenId = 1
        await erc20.increaseAllowance(instance.address, price[0], {
            from: accounts[5]
        })
        await truffleAssert.passes(instance.mintArtwork(tokenId, {
            from: accounts[5]
        }))

        const owner_token = await instance.ownerOf.call(tokenId)
        assert.equal(owner_token, accounts[5])

        const balance_a = await instance.balanceOf.call(owner)

        //
        const price_b = await instance.getPrice.call(owner)

        await erc20.increaseAllowance(instance.address, price_b[0])
        await truffleAssert.reverts(instance.mintArtwork(tokenId),
            "MetaX: metaverse id is already minted"
        )
        const balance_b = await instance.balanceOf(owner)
        assert.equal(Number(balance_b), Number(balance_a))
    })


    it("call to withdraw, from account that is not admin, should fail", async () => {
        //const instance = await MetaX.deployed()
        const not_owner = accounts[1]

        await truffleAssert.reverts(instance.withdrawBalance({
                from: not_owner
            }),
            "MetaX: must have admin role to withdraw"
        )
    })


    it("admin calling withdraw should increase balance", async () => {
        //const instance = await MetaX.deployed()

        const balance_a = await erc20.balanceOf(owner)

        await truffleAssert.passes(instance.withdrawBalance({
            from: owner
        }))
        const balance_b = await erc20.balanceOf(owner)

        assert.ok(Number(balance_a) < Number(balance_b))
    })


    it("cant mint or vote while paused", async () => {
        //const instance = await MetaX.deployed()

        await instance.pause()

        const price = await instance.getPrice.call(owner)
        await erc20.increaseAllowance(instance.address, price[0])
        await truffleAssert.reverts(
                instance.mintArtwork(800),
            "MetaX: token mint while paused",
            "mintArtwork while paused should fail"
        )

        await truffleAssert.reverts(
            instance.vote(850),
            "MetaX: vote while paused",
            "vote while paused should fail"
        )

        await instance.unpause()
    })

    it("cant mint without allowance", async () => {
        const allowance = await erc20.allowance.call(accounts[0], instance.address)
        await erc20.decreaseAllowance(instance.address, allowance)
        await truffleAssert.reverts(
            instance.mintArtwork(410),
            "MetaX: Not enough ERC20 token allowance."
        )
    })

    it("cant mint without enough balance", async () => {
        const price = await instance.getPrice.call(accounts[6])
        await erc20.increaseAllowance(instance.address, price[0], {from: accounts[6]})
        await truffleAssert.reverts(
                instance.mintArtwork(410,
                {from: accounts[6]}),
                "MetaX: Not enough ERC20 tokens."
            )
        await erc20.decreaseAllowance(instance.address, price[0], {from: accounts[6]})
    })

    it("a single account can't mint more than 16 times", async () => {
        //const instance = await MetaX.deployed()

        // Mint 16 tokens on account 3, should pass
        for (let tokenId=410; tokenId<426; tokenId++) {
            const price = await instance.getPrice.call(accounts[3])
            await erc20.increaseAllowance(instance.address, price[0], {
                from: accounts[3]
            })
            await truffleAssert.passes(instance.mintArtwork(tokenId, {
                from: accounts[3]}))
        }

        // Mint 17th token on account 3, should fail
        const price = await instance.getPrice.call(accounts[3])
        await erc20.increaseAllowance(instance.address, price[0], {
            from: accounts[3]
        })
        await truffleAssert.reverts(
            instance.mintArtwork(429, {from: accounts[3]}),
            "MetaX: max mints reached",
            "mintArtwork for 429 should fail"
        )

    })

    it("a single account can't vote more than 10 times", async () => {
        //const instance = await MetaX.deployed()

        // Vote 10 tokens on account 3, should pass
        for (let tokenId=610; tokenId<620; tokenId++) {
            await truffleAssert.passes(instance.vote(tokenId, {
                from: accounts[3]
            }))
        }

        // Mint 17th token on account 3, should fail
        await truffleAssert.reverts(
            instance.vote(629, {
                from: accounts[3]
            }),
            "MetaX: max votes reached",
            "vote for 429 should fail"
        )

    })

    it("cant mint when event finishes", async () => {
        //const instance = await MetaX.deployed()

        await truffleAssert.passes(instance.setEndTime(100))

        const price = await instance.getPrice.call(owner)
        await erc20.increaseAllowance(instance.address, price[0])
        await truffleAssert.reverts(
            instance.mintArtwork(801),
            "MetaX: minting event ended.",
            "mintArtwork should fail"
        )

        /*await truffleAssert.reverts(
            instance.vote(851),
            "MetaX: minting event ended.",
            "vote should fail"
        )*/

    })

    it("call to setEndTime, from account that is not admin, should fail", async () => {
        //const instance = await MetaX.deployed()
        const not_owner = accounts[1]

        await truffleAssert.reverts(
            instance.setEndTime(100, {
                from: not_owner
            }),
            "MetaX: must have admin role to change end time"
        )
    })
})
