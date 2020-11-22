const SoapPunkCollectiblesChild = artifacts.require("SoapPunkCollectiblesChild");
const truffleAssert = require('truffle-assertions');


contract("SoapPunkCollectiblesChild test", async accounts => {
    const owner = accounts[9];
    const DEFAULT_ADMIN_ROLE = "0x00";
    const PAUSER_ROLE = web3.utils.sha3("PAUSER_ROLE");
    const MINTER_ROLE = web3.utils.sha3("MINTER_ROLE");

    it("should set initial uri to 'https://metadata.soappunk.com/sperc1155/v1/{id}.json'", async () => {
        let instance = await SoapPunkCollectiblesChild.deployed();
        let uri = await instance.uri(0);
        assert.equal(uri, "https://metadata.soappunk.com/sperc1155/v1/{id}.json");
    });

    it("should set uri correctly", async () => {
        let instance = await SoapPunkCollectiblesChild.deployed();
        await instance.setURI("test", 0, { from: owner });
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

    it("DEFAULT_ADMIN_ROLE should be " + owner, async () => {
        let instance = await SoapPunkCollectiblesChild.deployed();

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
        let instance = await SoapPunkCollectiblesChild.deployed();

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
        let instance = await SoapPunkCollectiblesChild.deployed();

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
