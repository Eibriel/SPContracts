const SoapPunkCollectibles = artifacts.require("SoapPunkCollectibles");
const truffleAssert = require('truffle-assertions');

contract("SoapPunkCollectibles test", async accounts => {
    const owner = accounts[9];
    const DEFAULT_ADMIN_ROLE = "0x00";
    const PAUSER_ROLE = web3.utils.sha3("PAUSER_ROLE");
    const MINTER_ROLE = web3.utils.sha3("MINTER_ROLE");

    it("should have initial uri set to 'https://metadata.soappunk.com/sperc1155/v1/{id}.json'", async () => {
        let instance = await SoapPunkCollectibles.deployed();
        let uri = await instance.uri(0);
        assert.equal(uri, "https://metadata.soappunk.com/sperc1155/v1/{id}.json");
    });

    // TODO this test fails
    it("should not let account 0 to set uri", async () => {
        let instance = await SoapPunkCollectibles.deployed();
        await instance.renounceRole(DEFAULT_ADMIN_ROLE, accounts[0])
        truffleAssert.fails(instance.setURI("test", 0, { from: accounts[0] }),
            truffleAssert.ErrorType.revert,
            'VM Exception while processing transaction: revert SoapPunkCollectibles: must have admin role to change uri'
        );
    });

    it("should let "+owner+" set uri correctly", async () => {
        let instance = await SoapPunkCollectibles.deployed();
        truffleAssert.passes(await instance.setURI("test", 0, { from: owner }));
        let uri = await instance.uri(0);
        console.log(uri)
        assert.equal(uri, "test");
    });

    it("should not let account 1 change uri", async () => {
        let instance = await SoapPunkCollectibles.deployed();
        truffleAssert.fails(instance.setURI("test", 0, { from: accounts[1] }),
           truffleAssert.ErrorType.revert,
           'VM Exception while processing transaction: revert SoapPunkCollectibles: must have admin role to change uri'
         );
    });

    const name = "should have "+owner+" as DEFAULT_ADMIN_ROLE"
    it(name, async () => {
        let instance = await SoapPunkCollectibles.deployed();

        const hasAdmin = await instance.hasRole(DEFAULT_ADMIN_ROLE, owner);
        assert.equal(hasAdmin, true);
        assert.equal(true, true);

        const hasAdmin2 = await instance.hasRole(DEFAULT_ADMIN_ROLE, accounts[0]);
        assert.equal(hasAdmin2, false);

        const has1Admin = await instance.getRoleMemberCount(DEFAULT_ADMIN_ROLE);
        assert.equal(has1Admin, 1);

        const getAdmin0 = await instance.getRoleMember(DEFAULT_ADMIN_ROLE, 0);
        assert.equal(getAdmin0, owner);

        truffleAssert.fails(instance.getRoleMember(DEFAULT_ADMIN_ROLE, 1),
          truffleAssert.ErrorType.revert,
          'VM Exception while processing transaction: revert EnumerableSet: index out of bounds'
        );
    });

    it("shold have " + owner + " as MINTER_ROLE", async () => {
        let instance = await SoapPunkCollectibles.deployed();

        const hasMinter = await instance.hasRole(MINTER_ROLE, owner);
        assert.equal(hasMinter, true);

        const hasMinter2 = await instance.hasRole(MINTER_ROLE, accounts[0]);
        assert.equal(hasMinter2, false);

        const has1Minter = await instance.getRoleMemberCount(MINTER_ROLE);
        assert.equal(has1Minter, 1);

        const getMinter0 = await instance.getRoleMember(MINTER_ROLE, 0);
        assert.equal(getMinter0, owner);

        truffleAssert.fails(instance.getRoleMember(MINTER_ROLE, 1),
          truffleAssert.ErrorType.revert,
          'VM Exception while processing transaction: revert EnumerableSet: index out of bounds'
        );

    });

    it("should have " + owner + " as PAUSER_ROLE", async () => {
        let instance = await SoapPunkCollectibles.deployed();

        const hasPauser = await instance.hasRole(PAUSER_ROLE, owner);
        assert.equal(hasPauser, true);

        const hasPauser2 = await instance.hasRole(PAUSER_ROLE, accounts[0]);
        assert.equal(hasPauser2, false);

        const has1Pauser = await instance.getRoleMemberCount(PAUSER_ROLE);
        assert.equal(has1Pauser, 1);

        const getMinter0 = await instance.getRoleMember(PAUSER_ROLE, 0);
        assert.equal(getMinter0, owner);

        truffleAssert.fails(instance.getRoleMember(PAUSER_ROLE, 1),
          truffleAssert.ErrorType.revert,
          'VM Exception while processing transaction: revert EnumerableSet: index out of bounds'
        );

    });
});
