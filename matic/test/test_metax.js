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
        truffleAssert.passes(await instance.vote(0))
    })


    it("fails on duplicated vote", async () => {
        const instance = await MetaX.deployed()
        truffleAssert.fails(instance.vote(0))
    })


    it("getPrice is 100 Matic", async () => {
        const instance = await MetaX.deployed()

        const price = await instance.getPrice.call()
        assert.equal(Number(price), toWei(100))
    })


    it("can setPrice", async () => {
        const instance = await MetaX.deployed()

        // uint256 multPrice
        truffleAssert.passes(await instance.setPrice(String(toWei(0.01))))
    })


    it("getPrice is 10 Wei Matic", async () => {
        const instance = await MetaX.deployed()

        const price = await instance.getPrice.call()
        assert.equal(Number(price), 100000000000000000)
    })


    it("after mintArtwork balance should be 1", async () => {
        const instance = await MetaX.deployed()

        const price = await instance.getPrice.call()

        const tokenId = 0
        truffleAssert.passes(await instance.mintArtwork(tokenId, {
            from: owner,
            value: price
        }))
        const balance = await instance.balanceOf.call(owner)
        assert.equal(Number(balance), 1)

        const owner1 = await instance.ownerOf.call(tokenId)
        assert.equal(owner1, owner)
    })


    it("calling mint() should always fail", async () => {
        const instance = await MetaX.deployed()

        truffleAssert.fails(instance.mint(owner, {
            from: owner
        }))
    })


    it("cant mint the same artwork two times", async () => {
        const instance = await MetaX.deployed()

        const price = await instance.getPrice.call()

        const tokenId = 1
        truffleAssert.passes(await instance.mintArtwork(tokenId, {
            from: accounts[5],
            value: price
        }))

        const owner_token = await instance.ownerOf.call(tokenId)
        assert.equal(owner_token, accounts[5])

        const balance_a = await instance.balanceOf.call(owner)
        assert.equal(Number(balance_a), 1)

        //
        const price_b = await instance.getPrice.call()

        truffleAssert.fails(instance.mintArtwork(tokenId, {
            from: owner,
            value: price_b
        }))
        const balance_b = await instance.balanceOf(owner)
        assert.equal(Number(balance_b), 1)
    })


    it("after minting 400 artworks getPrice is 25 Wei Matic", async () => {
        const instance = await MetaX.deployed()

        const price_a = await instance.getPrice.call()
        for (let tokenId=2; tokenId<400; tokenId++) {
            await instance.mintArtwork(tokenId, {
                from: accounts[5],
                value: price_a
            })
        }

        const price_b = await instance.getPrice.call()
        assert.equal(Number(price_b), 250000000000000000)
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

})
