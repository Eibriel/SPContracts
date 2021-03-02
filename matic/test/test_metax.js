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


    it("getPrice is 1000 Matic", async () => {
        const instance = await MetaX.deployed()

        const price = await instance.getPrice.call()
        //console.log(Number(price))
        assert.equal(Number(price), toWei(1000))
    })


    it("can setPrice", async () => {
        const instance = await MetaX.deployed()

        //uint256 price, uint256 minPrice, uint256 multPrice, uint256 increaseBySecond
        truffleAssert.passes(await instance.setPrices(String(toWei(10)), String(toWei(5)), String(toWei(30)), String(toWei(1))))
    })


    it("getPrice is 8 Matic", async () => {
        const instance = await MetaX.deployed()

        const price = await instance.getPrice.call()
        assert.equal(Number(price), toWei(8))
    })


    it("after mintMetaverse balance should be 1", async () => {
        const instance = await MetaX.deployed()

        const price = await instance.getPrice.call()

        const tokenId = 0
        truffleAssert.passes(await instance.mintMetaverse(tokenId, {
            from: owner,
            value: price //toWei(10)
        }))
        const balance = await instance.balanceOf.call(owner)
        assert.equal(Number(balance), 1)

        const owner1 = await instance.ownerOf.call(tokenId)
        assert.equal(owner1, owner)
    })

    it("getPrice is 11 Matic, with 1 NFT", async () => {
        const instance = await MetaX.deployed()

        const price = await instance.getPrice.call()
        assert.equal(Number(price), toWei(40))
    })


    /*it("getPrice is 15 Matic, after 5 seconds", async () => {
        const instance = await MetaX.deployed()

        sleep(5)

        const price = await instance.getPrice.call()
        console.log(Number(price))
        assert.equal(Number(price), toWei(40))
    })*/


    it("minting should always fail", async () => {
        const instance = await MetaX.deployed()

        truffleAssert.fails(instance.mint(owner, {
            from: owner
        }))
    })

    it("cant mint the same two times", async () => {
        const instance = await MetaX.deployed()

        const price = await instance.getPrice.call()

        const tokenId = 111
        truffleAssert.passes(await instance.mintMetaverse(tokenId, {
            from: accounts[5],
            value: price //toWei(10)
        }))

        const owner1 = await instance.ownerOf.call(tokenId)
        assert.equal(owner1, accounts[5])

        const balance_a = await instance.balanceOf.call(owner)
        assert.equal(Number(balance_a), 1)

        truffleAssert.fails(instance.mintMetaverse(tokenId, {
            from: owner,
            value: toWei(10)
        }))
        const balance_b = await instance.balanceOf(owner)
        assert.equal(Number(balance_b), 1)
    })

    it("no admin calling withdraw should fail", async () => {
        const instance = await MetaX.deployed()
        const not_owner = accounts[1]

        truffleAssert.fails(instance.withdrawBalance({
            from: not_owner
        }))
    })

    it("admin calling withdraw should increase balance", async () => {
        const instance = await MetaX.deployed()

        //console.log(await getBalance(instance.address))

        const balance_a = await getBalance(owner)
        //console.log(balance_a)
        //assert.ok(Number(balance_a) < toWei(90))

        /*let cc = await instance.withdrawBalance({
            from: owner
        })
        console.log(cc)*/

        truffleAssert.passes(await instance.withdrawBalance({
            from: owner
        }))
        const balance_b = await getBalance(owner)
        //console.log(balance_b)
        //99772221260000000000
        // Gas costs makes this difficult
        assert.ok(Number(balance_a) < Number(balance_b))
    })

})
