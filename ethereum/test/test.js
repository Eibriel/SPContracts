const SoapPunkCollectibles = artifacts.require("SoapPunkCollectibles");
const truffleAssert = require('truffle-assertions');

const owner = "0xCF10CD8B5Dc2323B1eb6de6164647756BAd4dE4d"

contract("SoapPunkCollectibles test", async accounts => {
    it("should set initial uri to 'https://metadata.soappunk.com/sperc1155/v1/{id}.json'", async () => {
        let instance = await SoapPunkCollectibles.deployed();
        let uri = await instance.uri(0);
        assert.equal(uri, "https://metadata.soappunk.com/sperc1155/v1/{id}.json");
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
           'VM Exception while processing transaction: revert SoapPunkCollectibles: must have admin role to change uri'
         );
    });

    it("DEFAULT_ADMIN_ROLE should be " + owner, async () => {
        const DEFAULT_ADMIN_ROLE = web3.utils.sha3("DEFAULT_ADMIN_ROLE");
        let instance = await SoapPunkCollectibles.deployed();

        const hasAdmin = await instance.hasRole(DEFAULT_ADMIN_ROLE, owner);
        assert.equal(hasAdmin, true);

        const has1Admin = await instance.getRoleMemberCount(DEFAULT_ADMIN_ROLE);
        assert.equal(has1Admin, 1);

        const getAdmin0 = await instance.getRoleMember(DEFAULT_ADMIN_ROLE, 0);
        assert.equal(getAdmin0, owner);

        truffleAssert.fails(instance.getRoleMember(DEFAULT_ADMIN_ROLE, 1),
          truffleAssert.ErrorType.revert,
          'VM Exception while processing transaction: revert EnumerableSet: index out of bounds'
        );
    });

    it("MINTER_ROLE should be " + owner, async () => {
        const MINTER_ROLE = web3.utils.sha3("MINTER_ROLE");
        let instance = await SoapPunkCollectibles.deployed();

        const hasMinter = await instance.hasRole(MINTER_ROLE, owner);
        assert.equal(hasMinter, true);

        const has1Minter = await instance.getRoleMemberCount(MINTER_ROLE);
        assert.equal(has1Minter, 1);

        const getMinter0 = await instance.getRoleMember(MINTER_ROLE, 0);
        assert.equal(getMinter0, owner);

        truffleAssert.fails(instance.getRoleMember(MINTER_ROLE, 1),
          truffleAssert.ErrorType.revert,
          'VM Exception while processing transaction: revert EnumerableSet: index out of bounds'
        );

    });

    it("PAUSER_ROLE should be " + owner, async () => {
        const PAUSER_ROLE = web3.utils.sha3("PAUSER_ROLE");
        let instance = await SoapPunkCollectibles.deployed();

        const hasMinter = await instance.hasRole(PAUSER_ROLE, owner);
        assert.equal(hasMinter, true);

        const has1Minter = await instance.getRoleMemberCount(PAUSER_ROLE);
        assert.equal(has1Minter, 1);

        const getMinter0 = await instance.getRoleMember(PAUSER_ROLE, 0);
        assert.equal(getMinter0, owner);

        truffleAssert.fails(instance.getRoleMember(PAUSER_ROLE, 1),
          truffleAssert.ErrorType.revert,
          'VM Exception while processing transaction: revert EnumerableSet: index out of bounds'
        );

    });
});
