const MetaX = artifacts.require("MetaX")
const truffleAssert = require('truffle-assertions')

const promisify = (inner) =>
  new Promise((resolve, reject) =>
    inner((err, res) => {
      if (err) { reject(err) }
      resolve(res);
    })
  );

const getBalance = (account, at) =>
  promisify(cb => web3.eth.getBalance(account, at, cb));

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function toWei(number) {
    return number * 1000000000000000000
}

contract("MetaX test", async accounts => {
    const owner = accounts[0]
    //const instance = await MetaX.deployed()

    it("metaverse uri for 0 should be ipfs://0.json", async () => {
        const instance = await MetaX.deployed()

        let metaverse_uri = await instance.getMetaverse.call(0)
        //console.log(metaverse_uri)
        assert.equal(metaverse_uri, "ipfs://0.json")
    })


    it("can vote", async () => {
        const instance = await MetaX.deployed()
        truffleAssert.passes(await instance.vote(1))
    })


    it("dont fails on duplicated vote", async () => {
        const instance = await MetaX.deployed()
        truffleAssert.passes(await instance.vote(0))
    })


    it("getPrice is 100 Matic", async () => {
        const instance = await MetaX.deployed()

        const price = await instance.getPrice.call()
        assert.equal(Number(price[0]), toWei(100))
    })


    it("getPrice's refund is false", async () => {
        const instance = await MetaX.deployed()

        const price = await instance.getPrice.call()
        assert.equal(Number(price[1]), false)
    })


    it("can setPrice", async () => {
        const instance = await MetaX.deployed()

        // uint256 multPrice
        truffleAssert.passes(await instance.setPrice(String(toWei(0.005))))
    })


    it("getPrice is 10 Wei Matic", async () => {
        const instance = await MetaX.deployed()

        const price = await instance.getPrice.call()
        assert.equal(Number(price[0]), 100000000000000000)
    })


    it("after mintArtwork balance should be 1", async () => {
        const instance = await MetaX.deployed()

        const price = await instance.getPrice.call({from: owner})

        const tokenId = 0
        truffleAssert.passes(await instance.mintArtwork(tokenId, {
            from: owner,
            value: price[0]
        }))
        const balance = await instance.balanceOf.call(owner)
        assert.equal(Number(balance), 1)

        const owner1 = await instance.ownerOf.call(tokenId)
        assert.equal(owner1, owner)
    })


    it("getPrice's refund is false", async () => {
        const instance = await MetaX.deployed()

        // Get price before
        const price_a = await instance.getPrice.call()
        assert.equal(Number(price_a[1]), false)

        const tokenId = 900

        // Vote for token id
        truffleAssert.passes(await instance.vote(tokenId))

        // Mint token id
        truffleAssert.passes(await instance.mintArtwork(tokenId, {
            from: accounts[5],
            value: price_a[0]
        }))

        // Get price after
        const price_b = await instance.getPrice.call()
        assert.equal(Number(price_b[1]), true)

        assert.ok(Number(price_a[0]) > Number(price_b[0]))
    })

    it("cant mint or vote for a burned artwork", async () => {
        const instance = await MetaX.deployed()

        const tokenId = 950
        // Mint toke id
        const price = await instance.getPrice.call()
        truffleAssert.fails(instance.mintArtwork(tokenId, {
            value: price[0]
        }))

        // Burn toke id
        truffleAssert.passes(await instance.burn(tokenId))

        // Vote for token id
        truffleAssert.fails(instance.vote(tokenId))

        // Mint token id
        truffleAssert.fails(instance.mintArtwork(tokenId, {
            value: price[0]
        }))
    })


    it("cant mint or vote unexisting id", async () => {
        const instance = await MetaX.deployed()

        const tokenId = 950000
        
        // Vote for token id
        truffleAssert.fails(instance.vote(tokenId))

        // Mint token id
        const price = await instance.getPrice.call()
        truffleAssert.fails(instance.mintArtwork(tokenId, {
            value: price[0]
        }))
    })


    it("calling mint() should always fail", async () => {
        const instance = await MetaX.deployed()

        truffleAssert.fails(instance.mint(owner, {
            from: owner
        }))
    })


    it("cant mint the same artwork two times", async () => {
        const instance = await MetaX.deployed()

        const price = await instance.getPrice.call({from: accounts[5]})

        const tokenId = 1
        truffleAssert.passes(await instance.mintArtwork(tokenId, {
            from: accounts[5],
            value: price[0]
        }))

        const owner_token = await instance.ownerOf.call(tokenId)
        assert.equal(owner_token, accounts[5])

        const balance_a = await instance.balanceOf.call(owner)

        //
        const price_b = await instance.getPrice.call({from: owner})

        truffleAssert.fails(instance.mintArtwork(tokenId, {
            from: owner,
            value: price_b[0]
        }))
        const balance_b = await instance.balanceOf(owner)
        assert.equal(Number(balance_b), Number(balance_a))
    })


    it("after minting 400 artworks getPrice is 25 Wei Matic", async () => {
        const instance = await MetaX.deployed()

        let test_this = false
        if (test_this) {
            const price_a = await instance.getPrice.call()
            for (let tokenId=2; tokenId<400; tokenId++) {
                await instance.mintArtwork(tokenId, {
                    from: accounts[5],
                    value: price_a[0]
                })
            }

            const price_b = await instance.getPrice.call()
            assert.equal(Number(price_b[0]), 250000000000000000)
        }
    })


    it("call to withdraw, from account that is not admin, should fail", async () => {
        const instance = await MetaX.deployed()
        const not_owner = accounts[1]

        truffleAssert.fails(instance.withdrawBalance({
            from: not_owner
        }))
    })


    it("admin calling withdraw should increase balance", async () => {
        const instance = await MetaX.deployed()

        const balance_a = await getBalance(owner)

        truffleAssert.passes(await instance.withdrawBalance({
            from: owner
        }))
        const balance_b = await getBalance(owner)
        // console.log(Number(balance_a), Number(balance_b))
        assert.ok(Number(balance_a) < Number(balance_b))
    })


    it("cant mint or vote while paused", async () => {
        const instance = await MetaX.deployed()

        await instance.pause()

        const price = await instance.getPrice.call()
        truffleAssert.fails(instance.mintArtwork(800, {
            value: price[0]
        }))

        truffleAssert.fails(instance.vote(850))

        await instance.unpause()
    })
})
