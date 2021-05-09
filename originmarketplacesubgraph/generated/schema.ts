// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class MarketplaceData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save MarketplaceData entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save MarketplaceData entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("MarketplaceData", id.toString(), this);
  }

  static load(id: string): MarketplaceData | null {
    return store.get("MarketplaceData", id) as MarketplaceData | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get party(): Bytes {
    let value = this.get("party");
    return value.toBytes();
  }

  set party(value: Bytes) {
    this.set("party", Value.fromBytes(value));
  }

  get ipfsHash(): Bytes {
    let value = this.get("ipfsHash");
    return value.toBytes();
  }

  set ipfsHash(value: Bytes) {
    this.set("ipfsHash", Value.fromBytes(value));
  }
}

export class AffiliateAdded extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save AffiliateAdded entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save AffiliateAdded entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("AffiliateAdded", id.toString(), this);
  }

  static load(id: string): AffiliateAdded | null {
    return store.get("AffiliateAdded", id) as AffiliateAdded | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get party(): Bytes {
    let value = this.get("party");
    return value.toBytes();
  }

  set party(value: Bytes) {
    this.set("party", Value.fromBytes(value));
  }

  get ipfsHash(): Bytes {
    let value = this.get("ipfsHash");
    return value.toBytes();
  }

  set ipfsHash(value: Bytes) {
    this.set("ipfsHash", Value.fromBytes(value));
  }
}

export class AffiliateRemoved extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save AffiliateRemoved entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save AffiliateRemoved entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("AffiliateRemoved", id.toString(), this);
  }

  static load(id: string): AffiliateRemoved | null {
    return store.get("AffiliateRemoved", id) as AffiliateRemoved | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get party(): Bytes {
    let value = this.get("party");
    return value.toBytes();
  }

  set party(value: Bytes) {
    this.set("party", Value.fromBytes(value));
  }

  get ipfsHash(): Bytes {
    let value = this.get("ipfsHash");
    return value.toBytes();
  }

  set ipfsHash(value: Bytes) {
    this.set("ipfsHash", Value.fromBytes(value));
  }
}

export class ListingCreated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ListingCreated entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ListingCreated entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ListingCreated", id.toString(), this);
  }

  static load(id: string): ListingCreated | null {
    return store.get("ListingCreated", id) as ListingCreated | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get party(): Bytes {
    let value = this.get("party");
    return value.toBytes();
  }

  set party(value: Bytes) {
    this.set("party", Value.fromBytes(value));
  }

  get listingID(): BigInt {
    let value = this.get("listingID");
    return value.toBigInt();
  }

  set listingID(value: BigInt) {
    this.set("listingID", Value.fromBigInt(value));
  }

  get ipfsHash(): Bytes {
    let value = this.get("ipfsHash");
    return value.toBytes();
  }

  set ipfsHash(value: Bytes) {
    this.set("ipfsHash", Value.fromBytes(value));
  }
}

export class ListingUpdated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ListingUpdated entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ListingUpdated entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ListingUpdated", id.toString(), this);
  }

  static load(id: string): ListingUpdated | null {
    return store.get("ListingUpdated", id) as ListingUpdated | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get party(): Bytes {
    let value = this.get("party");
    return value.toBytes();
  }

  set party(value: Bytes) {
    this.set("party", Value.fromBytes(value));
  }

  get listingID(): BigInt {
    let value = this.get("listingID");
    return value.toBigInt();
  }

  set listingID(value: BigInt) {
    this.set("listingID", Value.fromBigInt(value));
  }

  get ipfsHash(): Bytes {
    let value = this.get("ipfsHash");
    return value.toBytes();
  }

  set ipfsHash(value: Bytes) {
    this.set("ipfsHash", Value.fromBytes(value));
  }
}

export class ListingWithdrawn extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ListingWithdrawn entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ListingWithdrawn entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ListingWithdrawn", id.toString(), this);
  }

  static load(id: string): ListingWithdrawn | null {
    return store.get("ListingWithdrawn", id) as ListingWithdrawn | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get party(): Bytes {
    let value = this.get("party");
    return value.toBytes();
  }

  set party(value: Bytes) {
    this.set("party", Value.fromBytes(value));
  }

  get listingID(): BigInt {
    let value = this.get("listingID");
    return value.toBigInt();
  }

  set listingID(value: BigInt) {
    this.set("listingID", Value.fromBigInt(value));
  }

  get ipfsHash(): Bytes {
    let value = this.get("ipfsHash");
    return value.toBytes();
  }

  set ipfsHash(value: Bytes) {
    this.set("ipfsHash", Value.fromBytes(value));
  }
}

export class ListingArbitrated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ListingArbitrated entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ListingArbitrated entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ListingArbitrated", id.toString(), this);
  }

  static load(id: string): ListingArbitrated | null {
    return store.get("ListingArbitrated", id) as ListingArbitrated | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get party(): Bytes {
    let value = this.get("party");
    return value.toBytes();
  }

  set party(value: Bytes) {
    this.set("party", Value.fromBytes(value));
  }

  get listingID(): BigInt {
    let value = this.get("listingID");
    return value.toBigInt();
  }

  set listingID(value: BigInt) {
    this.set("listingID", Value.fromBigInt(value));
  }

  get ipfsHash(): Bytes {
    let value = this.get("ipfsHash");
    return value.toBytes();
  }

  set ipfsHash(value: Bytes) {
    this.set("ipfsHash", Value.fromBytes(value));
  }
}

export class ListingData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ListingData entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ListingData entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ListingData", id.toString(), this);
  }

  static load(id: string): ListingData | null {
    return store.get("ListingData", id) as ListingData | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get party(): Bytes {
    let value = this.get("party");
    return value.toBytes();
  }

  set party(value: Bytes) {
    this.set("party", Value.fromBytes(value));
  }

  get listingID(): BigInt {
    let value = this.get("listingID");
    return value.toBigInt();
  }

  set listingID(value: BigInt) {
    this.set("listingID", Value.fromBigInt(value));
  }

  get ipfsHash(): Bytes {
    let value = this.get("ipfsHash");
    return value.toBytes();
  }

  set ipfsHash(value: Bytes) {
    this.set("ipfsHash", Value.fromBytes(value));
  }
}

export class OfferCreated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save OfferCreated entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save OfferCreated entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("OfferCreated", id.toString(), this);
  }

  static load(id: string): OfferCreated | null {
    return store.get("OfferCreated", id) as OfferCreated | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get party(): Bytes {
    let value = this.get("party");
    return value.toBytes();
  }

  set party(value: Bytes) {
    this.set("party", Value.fromBytes(value));
  }

  get listingID(): BigInt {
    let value = this.get("listingID");
    return value.toBigInt();
  }

  set listingID(value: BigInt) {
    this.set("listingID", Value.fromBigInt(value));
  }

  get offerID(): BigInt {
    let value = this.get("offerID");
    return value.toBigInt();
  }

  set offerID(value: BigInt) {
    this.set("offerID", Value.fromBigInt(value));
  }

  get ipfsHash(): Bytes {
    let value = this.get("ipfsHash");
    return value.toBytes();
  }

  set ipfsHash(value: Bytes) {
    this.set("ipfsHash", Value.fromBytes(value));
  }
}

export class OfferAccepted extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save OfferAccepted entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save OfferAccepted entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("OfferAccepted", id.toString(), this);
  }

  static load(id: string): OfferAccepted | null {
    return store.get("OfferAccepted", id) as OfferAccepted | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get party(): Bytes {
    let value = this.get("party");
    return value.toBytes();
  }

  set party(value: Bytes) {
    this.set("party", Value.fromBytes(value));
  }

  get listingID(): BigInt {
    let value = this.get("listingID");
    return value.toBigInt();
  }

  set listingID(value: BigInt) {
    this.set("listingID", Value.fromBigInt(value));
  }

  get offerID(): BigInt {
    let value = this.get("offerID");
    return value.toBigInt();
  }

  set offerID(value: BigInt) {
    this.set("offerID", Value.fromBigInt(value));
  }

  get ipfsHash(): Bytes {
    let value = this.get("ipfsHash");
    return value.toBytes();
  }

  set ipfsHash(value: Bytes) {
    this.set("ipfsHash", Value.fromBytes(value));
  }
}

export class OfferFinalized extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save OfferFinalized entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save OfferFinalized entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("OfferFinalized", id.toString(), this);
  }

  static load(id: string): OfferFinalized | null {
    return store.get("OfferFinalized", id) as OfferFinalized | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get party(): Bytes {
    let value = this.get("party");
    return value.toBytes();
  }

  set party(value: Bytes) {
    this.set("party", Value.fromBytes(value));
  }

  get listingID(): BigInt {
    let value = this.get("listingID");
    return value.toBigInt();
  }

  set listingID(value: BigInt) {
    this.set("listingID", Value.fromBigInt(value));
  }

  get offerID(): BigInt {
    let value = this.get("offerID");
    return value.toBigInt();
  }

  set offerID(value: BigInt) {
    this.set("offerID", Value.fromBigInt(value));
  }

  get ipfsHash(): Bytes {
    let value = this.get("ipfsHash");
    return value.toBytes();
  }

  set ipfsHash(value: Bytes) {
    this.set("ipfsHash", Value.fromBytes(value));
  }
}

export class OfferWithdrawn extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save OfferWithdrawn entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save OfferWithdrawn entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("OfferWithdrawn", id.toString(), this);
  }

  static load(id: string): OfferWithdrawn | null {
    return store.get("OfferWithdrawn", id) as OfferWithdrawn | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get party(): Bytes {
    let value = this.get("party");
    return value.toBytes();
  }

  set party(value: Bytes) {
    this.set("party", Value.fromBytes(value));
  }

  get listingID(): BigInt {
    let value = this.get("listingID");
    return value.toBigInt();
  }

  set listingID(value: BigInt) {
    this.set("listingID", Value.fromBigInt(value));
  }

  get offerID(): BigInt {
    let value = this.get("offerID");
    return value.toBigInt();
  }

  set offerID(value: BigInt) {
    this.set("offerID", Value.fromBigInt(value));
  }

  get ipfsHash(): Bytes {
    let value = this.get("ipfsHash");
    return value.toBytes();
  }

  set ipfsHash(value: Bytes) {
    this.set("ipfsHash", Value.fromBytes(value));
  }
}

export class OfferFundsAdded extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save OfferFundsAdded entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save OfferFundsAdded entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("OfferFundsAdded", id.toString(), this);
  }

  static load(id: string): OfferFundsAdded | null {
    return store.get("OfferFundsAdded", id) as OfferFundsAdded | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get party(): Bytes {
    let value = this.get("party");
    return value.toBytes();
  }

  set party(value: Bytes) {
    this.set("party", Value.fromBytes(value));
  }

  get listingID(): BigInt {
    let value = this.get("listingID");
    return value.toBigInt();
  }

  set listingID(value: BigInt) {
    this.set("listingID", Value.fromBigInt(value));
  }

  get offerID(): BigInt {
    let value = this.get("offerID");
    return value.toBigInt();
  }

  set offerID(value: BigInt) {
    this.set("offerID", Value.fromBigInt(value));
  }

  get ipfsHash(): Bytes {
    let value = this.get("ipfsHash");
    return value.toBytes();
  }

  set ipfsHash(value: Bytes) {
    this.set("ipfsHash", Value.fromBytes(value));
  }
}

export class OfferDisputed extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save OfferDisputed entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save OfferDisputed entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("OfferDisputed", id.toString(), this);
  }

  static load(id: string): OfferDisputed | null {
    return store.get("OfferDisputed", id) as OfferDisputed | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get party(): Bytes {
    let value = this.get("party");
    return value.toBytes();
  }

  set party(value: Bytes) {
    this.set("party", Value.fromBytes(value));
  }

  get listingID(): BigInt {
    let value = this.get("listingID");
    return value.toBigInt();
  }

  set listingID(value: BigInt) {
    this.set("listingID", Value.fromBigInt(value));
  }

  get offerID(): BigInt {
    let value = this.get("offerID");
    return value.toBigInt();
  }

  set offerID(value: BigInt) {
    this.set("offerID", Value.fromBigInt(value));
  }

  get ipfsHash(): Bytes {
    let value = this.get("ipfsHash");
    return value.toBytes();
  }

  set ipfsHash(value: Bytes) {
    this.set("ipfsHash", Value.fromBytes(value));
  }
}

export class OfferRuling extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save OfferRuling entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save OfferRuling entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("OfferRuling", id.toString(), this);
  }

  static load(id: string): OfferRuling | null {
    return store.get("OfferRuling", id) as OfferRuling | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get party(): Bytes {
    let value = this.get("party");
    return value.toBytes();
  }

  set party(value: Bytes) {
    this.set("party", Value.fromBytes(value));
  }

  get listingID(): BigInt {
    let value = this.get("listingID");
    return value.toBigInt();
  }

  set listingID(value: BigInt) {
    this.set("listingID", Value.fromBigInt(value));
  }

  get offerID(): BigInt {
    let value = this.get("offerID");
    return value.toBigInt();
  }

  set offerID(value: BigInt) {
    this.set("offerID", Value.fromBigInt(value));
  }

  get ipfsHash(): Bytes {
    let value = this.get("ipfsHash");
    return value.toBytes();
  }

  set ipfsHash(value: Bytes) {
    this.set("ipfsHash", Value.fromBytes(value));
  }

  get ruling(): BigInt {
    let value = this.get("ruling");
    return value.toBigInt();
  }

  set ruling(value: BigInt) {
    this.set("ruling", Value.fromBigInt(value));
  }
}

export class OfferData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save OfferData entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save OfferData entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("OfferData", id.toString(), this);
  }

  static load(id: string): OfferData | null {
    return store.get("OfferData", id) as OfferData | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get party(): Bytes {
    let value = this.get("party");
    return value.toBytes();
  }

  set party(value: Bytes) {
    this.set("party", Value.fromBytes(value));
  }

  get listingID(): BigInt {
    let value = this.get("listingID");
    return value.toBigInt();
  }

  set listingID(value: BigInt) {
    this.set("listingID", Value.fromBigInt(value));
  }

  get offerID(): BigInt {
    let value = this.get("offerID");
    return value.toBigInt();
  }

  set offerID(value: BigInt) {
    this.set("offerID", Value.fromBigInt(value));
  }

  get ipfsHash(): Bytes {
    let value = this.get("ipfsHash");
    return value.toBytes();
  }

  set ipfsHash(value: Bytes) {
    this.set("ipfsHash", Value.fromBytes(value));
  }
}

export class OwnershipRenounced extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save OwnershipRenounced entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save OwnershipRenounced entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("OwnershipRenounced", id.toString(), this);
  }

  static load(id: string): OwnershipRenounced | null {
    return store.get("OwnershipRenounced", id) as OwnershipRenounced | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get previousOwner(): Bytes {
    let value = this.get("previousOwner");
    return value.toBytes();
  }

  set previousOwner(value: Bytes) {
    this.set("previousOwner", Value.fromBytes(value));
  }
}

export class OwnershipTransferred extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save OwnershipTransferred entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save OwnershipTransferred entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("OwnershipTransferred", id.toString(), this);
  }

  static load(id: string): OwnershipTransferred | null {
    return store.get("OwnershipTransferred", id) as OwnershipTransferred | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get previousOwner(): Bytes {
    let value = this.get("previousOwner");
    return value.toBytes();
  }

  set previousOwner(value: Bytes) {
    this.set("previousOwner", Value.fromBytes(value));
  }

  get newOwner(): Bytes {
    let value = this.get("newOwner");
    return value.toBytes();
  }

  set newOwner(value: Bytes) {
    this.set("newOwner", Value.fromBytes(value));
  }
}