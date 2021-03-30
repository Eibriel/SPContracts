//import { BigInt, Address } from "@graphprotocol/graph-ts"
import {
    //Withdraw,
    //PriceSet,
    Vote,
    //EndTimeSet,
    Transfer
} from "../generated/MetaX/MetaX"
import { MetaX, Account, AccountMetaXVote } from "../generated/schema"

export function handleVote(event: Vote): void {
    //uint256 id
    //address account

    // Sender account
    let from = new Account(event.params.account.toHex())
    from.save()

    // MetaX id
    let metax = MetaX.load(event.params.id.toHex())
    if (metax == null) {
        metax = new MetaX(event.params.id.toHex())
        metax.vote_count = 0
    }
    metax.vote_count += 1
    metax.save()

    let accountMetaXVote_id = event.params.account.toHexString() + "-" + event.params.id.toHexString()

    let accountMetaXVote = AccountMetaXVote.load(accountMetaXVote_id)
    if (accountMetaXVote == null) {
        accountMetaXVote = new AccountMetaXVote(accountMetaXVote_id)
        accountMetaXVote.account = event.params.account.toHex()
        accountMetaXVote.metax = event.params.id.toHex()
    }
    accountMetaXVote.save()
}

export function handleTransfer(event: Transfer): void {
    //address from
    //address to
    //uint256 tokenId

    // From account
    let from = new Account(event.params.from.toHex())
    from.save()

    // To account
    let to = new Account(event.params.to.toHex())
    to.save()

    // MetaX id
    let metax = new MetaX(event.params.tokenId.toHex())
    if (metax.owner == null) {
        for (let n=0; n<metax.votes.length; n++) {
            let votes = metax.votes
            let accountMetaXVote = AccountMetaXVote.load(votes[n])
            let account = Account.load(accountMetaXVote.account)
            if (account.correct_votes == null) {
                account.correct_votes = 0
            }
            account.correct_votes += 1
            account.save()
        }
    }
    metax.owner = event.params.to.toHex()
    metax.save()
}
