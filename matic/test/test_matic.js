const SoapPunkCollectiblesChild = artifacts.require("SoapPunkCollectiblesChild");
const truffleAssert = require('truffle-assertions');

contract("SoapPunkCollectiblesChild test", async accounts => {
    it("should set initial uri to 'https://token-cdn-domain/{id}.json'", async () => {
        let instance = await SoapPunkCollectiblesChild.deployed();
        let uri = await instance.uri(0);
        assert.equal(uri, "https://token-cdn-domain/{id}.json");
    });

    it("should set uri correctly", async () => {
        let instance = await SoapPunkCollectiblesChild.deployed();
        await instance.setURI("test", 0);
        let uri = await instance.uri(0);
        assert.equal(uri, "test");
    });

    it("only admin role should be able to change uri", async () => {
        let instance = await SoapPunkCollectiblesChild.deployed();
        truffleAssert.fails(instance.setURI("test", 0, { from: accounts[1] }),
           truffleAssert.ErrorType.revert,
           'VM Exception while processing transaction: revert SoapPunkCollectibles: must have admin role to change uri'
         );
    });

    it("no account should be able to mint", async () => {
        let instance = await SoapPunkCollectiblesChild.deployed();
        truffleAssert.fails(instance.mint(accounts[1], 0, 10, []),
           truffleAssert.ErrorType.revert,
           'VM Exception while processing transaction: revert SoapPunkCollectibles: cannot mint on child contract'
         );

         const balance = await instance.balanceOf(accounts[1], 0);
         assert.equal(balance, 0);
    });

    it("no account should be able to mintBatch", async () => {
        let instance = await SoapPunkCollectiblesChild.deployed();
        truffleAssert.fails(instance.mintBatch(accounts[1], [0, 1], [10, 20], []),
           truffleAssert.ErrorType.revert,
           'VM Exception while processing transaction: revert SoapPunkCollectibles: cannot mint on child contract'
         );

         const balance = await instance.balanceOf(accounts[1], 0);
         assert.equal(balance, 0);
    });

    
});
