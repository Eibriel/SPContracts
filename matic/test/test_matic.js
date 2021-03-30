const SoapPunkCollectiblesChild = artifacts.require("SoapPunkCollectiblesChild")
const SoapPunkCollectiblesChildV2 = artifacts.require("SoapPunkCollectiblesChildV2")
const truffleAssert = require('truffle-assertions')
const { admin, deployProxy, upgradeProxy } = require('@openzeppelin/truffle-upgrades')
const sigUtils = require('eth-sig-util')
const defaultAbiCoder = require('ethers/utils/abi-coder')
const getTypedData = require('./meta-tx')
const ethUtils = require('ethereumjs-util')
const generateFirstWallets = require('./utils')

const abi = defaultAbiCoder.defaultAbiCoder

const DEFAULT_ADMIN_ROLE = "0x00"
const PAUSER_ROLE = web3.utils.sha3("PAUSER_ROLE")
const MINTER_ROLE = web3.utils.sha3("MINTER_ROLE")
const URI = "https://metadata.soappunk.com/sperc1155/v1/{id}.json"
const DOMAIN_SEPARATOR = "SoapPunk Collectibles"
const CHILD_CHAIN_MANAGER = "0xb5505a6d998549090530911180f38aC5130101c6"

describe('SoapPunkCollectibles upgrades', () => {
  it('should upgrade (expected to fail)', async () => {
    const sp1 = await deployProxy(SoapPunkCollectiblesChild, [URI, DOMAIN_SEPARATOR, CHILD_CHAIN_MANAGER], { unsafeAllowCustomTypes: true });
    const sp2 = await upgradeProxy(sp1.address, SoapPunkCollectiblesChildV2, { unsafeAllowCustomTypes: true });

    const uri = await sp2.uri(0);
    assert.equal(uri, URI);
  });
});

/*
describe('SoapPunkCollectibles upgrades', () => {
  it('should not let set uri (expected to fail)', async () => {
    const sp1 = await deployProxy(SoapPunkCollectiblesChild, [URI, DOMAIN_SEPARATOR, CHILD_CHAIN_MANAGER], { unsafeAllowCustomTypes: true });
    const sp2 = await upgradeProxy(sp1.address, SoapPunkCollectiblesChildV2, { unsafeAllowCustomTypes: true });

    await truffleAssert.fails(sp2.setURI("test", 0))
  })
})
*/

contract("SoapPunkCollectiblesChild test", async accounts => {
    //const owner = accounts[9]
    const owner = accounts[0]

    it("should have initial uri set to " + URI, async () => {
        let instance = await SoapPunkCollectiblesChild.deployed();
        let uri = await instance.uri(0)
        assert.equal(uri, URI)
    })

    /*
    it("should not let account 0 to set uri", async () => {
        let instance = await SoapPunkCollectiblesChild.deployed()
        await instance.renounceRole(DEFAULT_ADMIN_ROLE, accounts[0])
        await truffleAssert.fails(instance.setURI("test", 0, { from: accounts[0] }),
            truffleAssert.ErrorType.revert,
            'VM Exception while processing transaction: revert SoapPunkCollectibles: must have admin role to change uri'
        )
    })
    */

    it("should let "+owner+" set uri correctly", async () => {
        let instance = await SoapPunkCollectiblesChild.deployed()
        await truffleAssert.passes(instance.setURI("test", 0, { from: owner }))
        let uri = await instance.uri(0)
        assert.equal(uri, "test")
    })

    it("should let no account to mint", async () => {
        let instance = await SoapPunkCollectiblesChild.deployed()
        await truffleAssert.fails(instance.mint(accounts[1], 0, 10, []),
           truffleAssert.ErrorType.revert,
           'VM Exception while processing transaction: revert SoapPunkCollectibles: cannot mint on child contract'
         );

         const balance = await instance.balanceOf(accounts[1], 0)
         assert.equal(balance, 0)
    })

    it("should let no account to mintBatch", async () => {
        let instance = await SoapPunkCollectiblesChild.deployed()
        await truffleAssert.fails(instance.mintBatch(accounts[1], [0, 1], [10, 20], []),
           truffleAssert.ErrorType.revert,
           'VM Exception while processing transaction: revert SoapPunkCollectibles: cannot mint on child contract'
         );

         const balance = await instance.balanceOf(accounts[1], 0)
         assert.equal(balance, 0)
    });

    it("should let no account to burn", async () => {
        let instance = await SoapPunkCollectiblesChild.deployed()
        await truffleAssert.fails(instance.burn(accounts[1], 0, 10),
           truffleAssert.ErrorType.revert,
           'VM Exception while processing transaction: revert SoapPunkCollectibles: cannot burn on child contract'
         );

         const balance = await instance.balanceOf(accounts[1], 0)
         assert.equal(balance, 0)
    })

    it("should let no account to burnBatch", async () => {
        let instance = await SoapPunkCollectiblesChild.deployed()
        await truffleAssert.fails(instance.burnBatch(accounts[1], [0, 1], [10, 20]),
           truffleAssert.ErrorType.revert,
           'VM Exception while processing transaction: revert SoapPunkCollectibles: cannot burn on child contract'
         );

         const balance = await instance.balanceOf(accounts[1], 0)
         assert.equal(balance, 0)
    });

    /*
    it("should have "+owner+" as DEFAULT_ADMIN_ROLE", async () => {
        let instance = await SoapPunkCollectiblesChild.deployed()

        const hasAdmin = await instance.hasRole(DEFAULT_ADMIN_ROLE, owner)
        assert.equal(hasAdmin, true)

        const hasAdmin2 = await instance.hasRole(DEFAULT_ADMIN_ROLE, accounts[0])
        assert.equal(hasAdmin2, false)

        const has1Admin = await instance.getRoleMemberCount(DEFAULT_ADMIN_ROLE)
        assert.equal(has1Admin, 1)

        const getAdmin0 = await instance.getRoleMember(DEFAULT_ADMIN_ROLE, 0)
        assert.equal(getAdmin0, owner)

        await truffleAssert.fails(instance.getRoleMember(DEFAULT_ADMIN_ROLE, 1),
          truffleAssert.ErrorType.revert,
          'VM Exception while processing transaction: revert EnumerableSet: index out of bounds'
        )
    })

    it("shold have " + owner + " as MINTER_ROLE", async () => {
        let instance = await SoapPunkCollectiblesChild.deployed()

        const hasMinter = await instance.hasRole(MINTER_ROLE, owner)
        assert.equal(hasMinter, true)

        const hasMinter2 = await instance.hasRole(MINTER_ROLE, accounts[0])
        assert.equal(hasMinter2, false)

        const has1Minter = await instance.getRoleMemberCount(MINTER_ROLE)
        assert.equal(has1Minter, 1)

        const getMinter0 = await instance.getRoleMember(MINTER_ROLE, 0)
        assert.equal(getMinter0, owner)

        await truffleAssert.fails(instance.getRoleMember(MINTER_ROLE, 1),
          truffleAssert.ErrorType.revert,
          'VM Exception while processing transaction: revert EnumerableSet: index out of bounds'
        )
    })

    it("should have " + owner + " as PAUSER_ROLE", async () => {
        let instance = await SoapPunkCollectiblesChild.deployed()

        const hasPauser = await instance.hasRole(PAUSER_ROLE, owner)
        assert.equal(hasPauser, true)

        const hasPauser2 = await instance.hasRole(PAUSER_ROLE, accounts[0])
        assert.equal(hasPauser2, false)

        const has1Pauser = await instance.getRoleMemberCount(PAUSER_ROLE)
        assert.equal(has1Pauser, 1)

        const getMinter0 = await instance.getRoleMember(PAUSER_ROLE, 0)
        assert.equal(getMinter0, owner)

        await truffleAssert.fails(instance.getRoleMember(PAUSER_ROLE, 1),
          truffleAssert.ErrorType.revert,
          'VM Exception while processing transaction: revert EnumerableSet: index out of bounds'
        )
    })*/
})

const constructERC1155DepositData = (ids, amounts) => {
  return abi.encode(
    [
      'uint256[]',
      'uint256[]',
      'bytes'
    ],
    [
      ids.map(i => i.toString()),
      amounts.map(a => a.toString()),
      ['0x0']
    ]
  )
}

/*
const signature = result.result.substring(2)
const r = '0x' + signature.substring(0, 64)
const s = '0x' + signature.substring(64, 128)
const v = '0x' + signature.substring(128, 130)
*/

const getSignatureParameters = (signature) => {
  const r = signature.slice(0, 66)
  const s = '0x'.concat(signature.slice(66, 130))
  const _v = '0x'.concat(signature.slice(130, 132))
  let v = parseInt(_v)
  if (![27, 28].includes(v)) v += 27
  return { r, s, v }
}


contract("SoapPunkCollectiblesChild meta transactions tests", async accounts => {
    const owner = accounts[0]
    const chain_manager = accounts[5]
    let instance
    let wallets
    let user
    let userPK

    before(async() => {
        wallets =  await generateFirstWallets({ n: 10 })
        user = wallets[4].getAddressString()
        userPK = ethUtils.toBuffer(await wallets[4].getPrivateKeyString())

        const depositData = constructERC1155DepositData([0], [100])

        instance = await SoapPunkCollectiblesChild.deployed()
        const DEPOSITOR_ROLE = await instance.DEPOSITOR_ROLE()
        await instance.grantRole(DEPOSITOR_ROLE, chain_manager, {from: owner})
        await instance.deposit(user, depositData, {from: chain_manager})
        await instance.deposit(accounts[2], depositData, {from: chain_manager})
    })

    it('User should own tokens', async() => {

        const balance = await instance.balanceOf(user, 0)
        assert.equal(balance, 100)

        const balance2 = await instance.balanceOf(accounts[2], 0)
        assert.equal(balance2, 100)
    })

    it("Can receive withdraw", async() => {
        await truffleAssert.passes(instance.withdrawSingle(0, 10, { from: accounts[2] }))
    })


    it('Can receive safeTransferFrom meta-tx', async () => {
        await truffleAssert.passes(instance.safeTransferFrom(accounts[2], user, 0, 10, [], { from: accounts[2] }))
        //
        const web3ChildERC1155 = new web3.eth.Contract(SoapPunkCollectiblesChild.abi)
        const functionSignature = await web3ChildERC1155.methods.safeTransferFrom(user, accounts[2], 0, 10, []).encodeABI()

        const name = DOMAIN_SEPARATOR
        const chainId = await instance.getChainId()
        const nonce = await instance.getNonce(user)
        const sig = sigUtils.signTypedData_v4(userPK, {
            data: getTypedData({
                name,
                version: '1',
                chainId,
                verifyingContract: instance.address,
                nonce: '0x' + nonce.toString(16),
                from: user,
                functionSignature: ethUtils.toBuffer(functionSignature)
            })
        })
        const { r, s, v } = getSignatureParameters(sig)
        /*const tx = await instance.executeMetaTransaction(user, functionSignature, r, s, v, { from: chain_manager })
        should.exist(tx)*/
        await truffleAssert.passes(
            instance.executeMetaTransaction(user, functionSignature, r, s, v, { from: chain_manager })
        )
    })

    it('Can receive withdraw meta-tx', async() => {
        const web3ChildERC1155 = new web3.eth.Contract(SoapPunkCollectiblesChild.abi)

        const functionSignature = web3ChildERC1155.methods.withdrawSingle(0, "10").encodeABI()

        const name = DOMAIN_SEPARATOR
        const chainId = await instance.getChainId()
        const nonce = await instance.getNonce(user)
        const sig = sigUtils.signTypedData_v4(userPK, {
            data: getTypedData({
                name,
                version: '1',
                chainId,
                verifyingContract: instance.address,
                nonce: '0x' + nonce.toString(16),
                from: user,
                functionSignature: ethUtils.toBuffer(functionSignature)
            })
        })
        const { r, s, v } = getSignatureParameters(sig)
        /*const tx = await instance.executeMetaTransaction(user, functionSignature, r, s, v, { from: chain_manager })
        should.exist(tx)*/
        await truffleAssert.passes(
            instance.executeMetaTransaction(user, functionSignature, r, s, v, { from: chain_manager })
        )
    })
});



// Proxy test block
contract('SoapPunkCollectiblesChild test (proxy)', async accounts => {
    const owner = accounts[0];

    it("should have " + owner + " as owner", async () => {
        /*
        let test1_pass = true
        try {
            await admin.transferProxyAdminOwnership(accounts[1])
        } catch {
            console.log("Catch 1")
            test1_pass = false
        }
        assert.equal(test1_pass, false)
        */

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
