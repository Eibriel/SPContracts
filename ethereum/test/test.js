const SoapPunkCollectibles = artifacts.require("SoapPunkCollectibles");
const truffleAssert = require('truffle-assertions');

contract("SoapPunkCollectibles test", async accounts => {
    it("should set initial uri to 'https://token-cdn-domain/{id}.json'", async () => {
        let instance = await SoapPunkCollectibles.deployed();
        let uri = await instance.uri(0);
        assert.equal(uri, "https://token-cdn-domain/{id}.json");
    });

    it("should set uri correctly", async () => {
        let instance = await SoapPunkCollectibles.deployed();
        await instance.setURI("test", 0);
        let uri = await instance.uri(0);
        assert.equal(uri, "test");
    });

    it("only admin role should be able to change uri", async () => {
        let instance = await SoapPunkCollectibles.deployed();
        truffleAssert.fails(instance.setURI("test", 0, { from: accounts[1] }),
           truffleAssert.ErrorType.revert,
           'caller is not admin'
         );
    });
});
