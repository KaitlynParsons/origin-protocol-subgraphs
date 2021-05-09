import {
  MarketplaceData as MarketplaceDataEvent,
  AffiliateAdded as AffiliateAddedEvent,
  AffiliateRemoved as AffiliateRemovedEvent,
  ListingCreated as ListingCreatedEvent,
  ListingUpdated as ListingUpdatedEvent,
  ListingWithdrawn as ListingWithdrawnEvent,
  ListingArbitrated as ListingArbitratedEvent,
  ListingData as ListingDataEvent,
  OfferCreated as OfferCreatedEvent,
  OfferAccepted as OfferAcceptedEvent,
  OfferFinalized as OfferFinalizedEvent,
  OfferWithdrawn as OfferWithdrawnEvent,
  OfferFundsAdded as OfferFundsAddedEvent,
  OfferDisputed as OfferDisputedEvent,
  OfferRuling as OfferRulingEvent,
  OfferData as OfferDataEvent,
  OwnershipRenounced as OwnershipRenouncedEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/V01_Marketplace/V01_Marketplace"
import {
  MarketplaceData,
  AffiliateAdded,
  AffiliateRemoved,
  ListingCreated,
  ListingUpdated,
  ListingWithdrawn,
  ListingArbitrated,
  ListingData,
  OfferCreated,
  OfferAccepted,
  OfferFinalized,
  OfferWithdrawn,
  OfferFundsAdded,
  OfferDisputed,
  OfferRuling,
  OfferData,
  OwnershipRenounced,
  OwnershipTransferred
} from "../generated/schema"

export function handleMarketplaceData(event: MarketplaceDataEvent): void {
  let entity = new MarketplaceData(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.party = event.params.party
  entity.ipfsHash = event.params.ipfsHash
  entity.save()
}

export function handleAffiliateAdded(event: AffiliateAddedEvent): void {
  let entity = new AffiliateAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.party = event.params.party
  entity.ipfsHash = event.params.ipfsHash
  entity.save()
}

export function handleAffiliateRemoved(event: AffiliateRemovedEvent): void {
  let entity = new AffiliateRemoved(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.party = event.params.party
  entity.ipfsHash = event.params.ipfsHash
  entity.save()
}

export function handleListingCreated(event: ListingCreatedEvent): void {
  let entity = new ListingCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.party = event.params.party
  entity.listingID = event.params.listingID
  entity.ipfsHash = event.params.ipfsHash
  entity.save()
}

export function handleListingUpdated(event: ListingUpdatedEvent): void {
  let entity = new ListingUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.party = event.params.party
  entity.listingID = event.params.listingID
  entity.ipfsHash = event.params.ipfsHash
  entity.save()
}

export function handleListingWithdrawn(event: ListingWithdrawnEvent): void {
  let entity = new ListingWithdrawn(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.party = event.params.party
  entity.listingID = event.params.listingID
  entity.ipfsHash = event.params.ipfsHash
  entity.save()
}

export function handleListingArbitrated(event: ListingArbitratedEvent): void {
  let entity = new ListingArbitrated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.party = event.params.party
  entity.listingID = event.params.listingID
  entity.ipfsHash = event.params.ipfsHash
  entity.save()
}

export function handleListingData(event: ListingDataEvent): void {
  let entity = new ListingData(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.party = event.params.party
  entity.listingID = event.params.listingID
  entity.ipfsHash = event.params.ipfsHash
  entity.save()
}

export function handleOfferCreated(event: OfferCreatedEvent): void {
  let entity = new OfferCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.party = event.params.party
  entity.listingID = event.params.listingID
  entity.offerID = event.params.offerID
  entity.ipfsHash = event.params.ipfsHash
  entity.save()
}

export function handleOfferAccepted(event: OfferAcceptedEvent): void {
  let entity = new OfferAccepted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.party = event.params.party
  entity.listingID = event.params.listingID
  entity.offerID = event.params.offerID
  entity.ipfsHash = event.params.ipfsHash
  entity.save()
}

export function handleOfferFinalized(event: OfferFinalizedEvent): void {
  let entity = new OfferFinalized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.party = event.params.party
  entity.listingID = event.params.listingID
  entity.offerID = event.params.offerID
  entity.ipfsHash = event.params.ipfsHash
  entity.save()
}

export function handleOfferWithdrawn(event: OfferWithdrawnEvent): void {
  let entity = new OfferWithdrawn(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.party = event.params.party
  entity.listingID = event.params.listingID
  entity.offerID = event.params.offerID
  entity.ipfsHash = event.params.ipfsHash
  entity.save()
}

export function handleOfferFundsAdded(event: OfferFundsAddedEvent): void {
  let entity = new OfferFundsAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.party = event.params.party
  entity.listingID = event.params.listingID
  entity.offerID = event.params.offerID
  entity.ipfsHash = event.params.ipfsHash
  entity.save()
}

export function handleOfferDisputed(event: OfferDisputedEvent): void {
  let entity = new OfferDisputed(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.party = event.params.party
  entity.listingID = event.params.listingID
  entity.offerID = event.params.offerID
  entity.ipfsHash = event.params.ipfsHash
  entity.save()
}

export function handleOfferRuling(event: OfferRulingEvent): void {
  let entity = new OfferRuling(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.party = event.params.party
  entity.listingID = event.params.listingID
  entity.offerID = event.params.offerID
  entity.ipfsHash = event.params.ipfsHash
  entity.ruling = event.params.ruling
  entity.save()
}

export function handleOfferData(event: OfferDataEvent): void {
  let entity = new OfferData(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.party = event.params.party
  entity.listingID = event.params.listingID
  entity.offerID = event.params.offerID
  entity.ipfsHash = event.params.ipfsHash
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
