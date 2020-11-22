const SoapPunkCollectiblesChild = artifacts.require("SoapPunkCollectiblesChild");
const truffleAssert = require('truffle-assertions');
const { admin } = require('@openzeppelin/truffle-upgrades');

const DEFAULT_ADMIN_ROLE = "0x00";
const PAUSER_ROLE = web3.utils.sha3("PAUSER_ROLE");
const MINTER_ROLE = web3.utils.sha3("MINTER_ROLE");
const URI = "https://metadata.soappunk.com/sperc1155/v1/{id}.json"

contract("SoapPunkCollectiblesChild test", async accounts => {
    const owner = accounts[9];

    it("should have initial uri set to " + URI, async () => {
        let instance = await SoapPunkCollectiblesChild.deployed();
        let uri = await instance.uri(0);
        assert.equal(uri, URI);
    });

    it("should not let account 0 to set uri", async () => {
        let instance = await SoapPunkCollectiblesChild.deployed();
        await instance.renounceRole(DEFAULT_ADMIN_ROLE, accounts[0])
        truffleAssert.fails(instance.setURI("test", 0, { from: accounts[0] }),
            truffleAssert.ErrorType.revert,
            'VM Exception while processing transaction: revert SoapPunkCollectibles: must have admin role to change uri'
        );
    });

    it("should let "+owner+" set uri correctly", async () => {
        let instance = await SoapPunkCollectiblesChild.deployed();
        truffleAssert.passes(await instance.setURI("test", 0, { from: owner }));
        let uri = await instance.uri(0);
        assert.equal(uri, "test");
    });

    it("should let no account to mint", async () => {
        let instance = await SoapPunkCollectiblesChild.deployed();
        truffleAssert.fails(instance.mint(accounts[1], 0, 10, []),
           truffleAssert.ErrorType.revert,
           'VM Exception while processing transaction: revert SoapPunkCollectibles: cannot mint on child contract'
         );

         const balance = await instance.balanceOf(accounts[1], 0);
         assert.equal(balance, 0);
    });

    it("should let no account to mintBatch", async () => {
        let instance = await SoapPunkCollectiblesChild.deployed();
        truffleAssert.fails(instance.mintBatch(accounts[1], [0, 1], [10, 20], []),
           truffleAssert.ErrorType.revert,
           'VM Exception while processing transaction: revert SoapPunkCollectibles: cannot mint on child contract'
         );

         const balance = await instance.balanceOf(accounts[1], 0);
         assert.equal(balance, 0);
    });

    it("should have "+owner+" as DEFAULT_ADMIN_ROLE", async () => {
        let instance = await SoapPunkCollectiblesChild.deployed();

        const hasAdmin = await instance.hasRole(DEFAULT_ADMIN_ROLE, owner);
        assert.equal(hasAdmin, true);

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
        let instance = await SoapPunkCollectiblesChild.deployed();

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
        let instance = await SoapPunkCollectiblesChild.deployed();

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


// Proxy test block
contract('SoapPunkCollectiblesChild test (proxy)', async accounts => {
    const owner = accounts[9];

    it("should have " + owner + " as owner", async () => {
        let test1_pass = true
        try {
            await admin.transferProxyAdminOwnership(accounts[1])
        } catch {
            console.log("Catch 1")
            test1_pass = false
        }
        assert.equal(test1_pass, false)

        // TODO test with owner account
        /*
        let test2_pass = true
        try {
            await admin.transferProxyAdminOwnership(accounts[1], { from: owner })
        } catch {
            console.log("Catch 2")
            test2_pass = false
        }
        assert.equal(test2_pass, true)
        */
    })
});
