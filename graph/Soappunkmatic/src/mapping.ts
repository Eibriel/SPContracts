import { BigInt, Address } from "@graphprotocol/graph-ts"
import {
  SoapPunkCollectiblesV1,
  ApprovalForAll,
  MetaTransactionExecuted,
  Paused,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  TransferBatch,
  TransferSingle,
  URI,
  Unpaused
} from "../generated/SoapPunkCollectiblesV1/SoapPunkCollectiblesV1"
import { Collectible, Account, AccountCollectible } from "../generated/schema"

export function handleApprovalForAll(event: ApprovalForAll): void {
  /*
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.account = event.params.account
  entity.operator = event.params.operator

  // Entities can be written to the store with `.save()`
  entity.save()
  */

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.DEFAULT_ADMIN_ROLE(...)
  // - contract.DEPOSITOR_ROLE(...)
  // - contract.ERC712_VERSION(...)
  // - contract.MINTER_ROLE(...)
  // - contract.PAUSER_ROLE(...)
  // - contract.balanceOf(...)
  // - contract.balanceOfBatch(...)
  // - contract.getChainId(...)
  // - contract.getDomainSeperator(...)
  // - contract.getNonce(...)
  // - contract.getRoleAdmin(...)
  // - contract.getRoleMember(...)
  // - contract.getRoleMemberCount(...)
  // - contract.hasRole(...)
  // - contract.isApprovedForAll(...)
  // - contract.paused(...)
  // - contract.supportsInterface(...)
  // - contract.uri(...)
  // - contract.withdrawnTokens(...)
}

export function handleMetaTransactionExecuted(
  event: MetaTransactionExecuted
): void {}

export function handlePaused(event: Paused): void {}

export function handleRoleAdminChanged(event: RoleAdminChanged): void {}

export function handleRoleGranted(event: RoleGranted): void {}

export function handleRoleRevoked(event: RoleRevoked): void {}

export function handleTransferBatch(event: TransferBatch): void {
    //event.params.operator
    //event.params.from
    //event.params.to
    //event.params.ids
    //event.params.values

    // From
    let account_from = new Account(event.params.from.toHex())
    account_from.save()
    // To
    let account_to = new Account(event.params.to.toHex())
    account_to.save()
    for (let n=0; n<event.params.ids.length; n++) {
        let ids = event.params.ids
        let values = event.params.values
        handleTransfer(event.params.from, event.params.to, ids[n], values[n])
    }
}

export function handleTransferSingle(event: TransferSingle): void {
    //event.params.operator
    //event.params.from
    //event.params.to
    //event.params.ids
    //event.params.values

    // From
    let account_from = new Account(event.params.from.toHex())
    account_from.save()
    // To
    let account_to = new Account(event.params.to.toHex())
    account_to.save()
    handleTransfer(event.params.from, event.params.to, event.params.id, event.params.value)
}

function handleTransfer(from: Address, to: Address, id: BigInt, value: BigInt): void {
    // Collectible
    let collectible = new Collectible(id.toHex())
    collectible.save()
    //
    let accountCollectibleFrom_id = from.toHexString() + "-" + id.toHexString()
    let accountCollectibleFrom = AccountCollectible.load(accountCollectibleFrom_id)
    if (accountCollectibleFrom == null) {
        //This sould only happen for 0x0
        accountCollectibleFrom = new AccountCollectible(accountCollectibleFrom_id)
        accountCollectibleFrom.amount = BigInt.fromI32(0)
        accountCollectibleFrom.account = from.toHex()
        accountCollectibleFrom.collectible = id.toHex()
    }
    if (accountCollectibleFrom.amount >= value) {
        accountCollectibleFrom.amount = accountCollectibleFrom.amount - BigInt.fromI32(value.toI32())
    }
    accountCollectibleFrom.save()
    //
    let accountCollectibleTo_id = to.toHexString() + "-" + id.toHexString()
    let accountCollectibleTo = AccountCollectible.load(accountCollectibleTo_id)
    if (accountCollectibleTo == null) {
        accountCollectibleTo = new AccountCollectible(accountCollectibleTo_id)
        accountCollectibleTo.amount = BigInt.fromI32(0)
        accountCollectibleTo.account = to.toHex()
        accountCollectibleTo.collectible = id.toHex()
    }
    accountCollectibleTo.amount = accountCollectibleTo.amount + BigInt.fromI32(value.toI32())
    accountCollectibleTo.save()
}

export function handleURI(event: URI): void {}

export function handleUnpaused(event: Unpaused): void {}
