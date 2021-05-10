import {
  AddCallSpenderWhitelist as AddCallSpenderWhitelistEvent,
  RemoveCallSpenderWhitelist as RemoveCallSpenderWhitelistEvent,
  SetWhitelistExpiration as SetWhitelistExpirationEvent,
  AllowedTransactorAdded as AllowedTransactorAddedEvent,
  AllowedTransactorRemoved as AllowedTransactorRemovedEvent,
  Pause as PauseEvent,
  Unpause as UnpauseEvent,
  Mint as MintEvent,
  MintFinished as MintFinishedEvent,
  OwnershipRenounced as OwnershipRenouncedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Burn as BurnEvent,
  Approval as ApprovalEvent,
  Transfer as TransferEvent
} from "../generated/originidentity/originidentity"
import {
  AddCallSpenderWhitelist,
  RemoveCallSpenderWhitelist,
  SetWhitelistExpiration,
  AllowedTransactorAdded,
  AllowedTransactorRemoved,
  Pause,
  Unpause,
  Mint,
  MintFinished,
  OwnershipRenounced,
  OwnershipTransferred,
  Burn,
  Approval,
  Transfer
} from "../generated/schema"

export function handleAddCallSpenderWhitelist(
  event: AddCallSpenderWhitelistEvent
): void {
  let entity = new AddCallSpenderWhitelist(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.enabler = event.params.enabler
  entity.spender = event.params.spender
  entity.save()
}

export function handleRemoveCallSpenderWhitelist(
  event: RemoveCallSpenderWhitelistEvent
): void {
  let entity = new RemoveCallSpenderWhitelist(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.disabler = event.params.disabler
  entity.spender = event.params.spender
  entity.save()
}

export function handleSetWhitelistExpiration(
  event: SetWhitelistExpirationEvent
): void {
  let entity = new SetWhitelistExpiration(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.expiration = event.params.expiration
  entity.save()
}

export function handleAllowedTransactorAdded(
  event: AllowedTransactorAddedEvent
): void {
  let entity = new AllowedTransactorAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.sender = event.params.sender
  entity.save()
}

export function handleAllowedTransactorRemoved(
  event: AllowedTransactorRemovedEvent
): void {
  let entity = new AllowedTransactorRemoved(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.sender = event.params.sender
  entity.save()
}

export function handlePause(event: PauseEvent): void {
  let entity = new Pause(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )

  entity.save()
}

export function handleUnpause(event: UnpauseEvent): void {
  let entity = new Unpause(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )

  entity.save()
}

export function handleMint(event: MintEvent): void {
  let entity = new Mint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}

export function handleMintFinished(event: MintFinishedEvent): void {
  let entity = new MintFinished(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )

  entity.save()
}

export function handleOwnershipRenounced(event: OwnershipRenouncedEvent): void {
  let entity = new OwnershipRenounced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleBurn(event: BurnEvent): void {
  let entity = new Burn(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.burner = event.params.burner
  entity.value = event.params.value
  entity.save()
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value
  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()
}
