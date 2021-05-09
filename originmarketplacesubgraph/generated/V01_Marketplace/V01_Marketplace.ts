// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class MarketplaceData extends ethereum.Event {
  get params(): MarketplaceData__Params {
    return new MarketplaceData__Params(this);
  }
}

export class MarketplaceData__Params {
  _event: MarketplaceData;

  constructor(event: MarketplaceData) {
    this._event = event;
  }

  get party(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get ipfsHash(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class AffiliateAdded extends ethereum.Event {
  get params(): AffiliateAdded__Params {
    return new AffiliateAdded__Params(this);
  }
}

export class AffiliateAdded__Params {
  _event: AffiliateAdded;

  constructor(event: AffiliateAdded) {
    this._event = event;
  }

  get party(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get ipfsHash(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class AffiliateRemoved extends ethereum.Event {
  get params(): AffiliateRemoved__Params {
    return new AffiliateRemoved__Params(this);
  }
}

export class AffiliateRemoved__Params {
  _event: AffiliateRemoved;

  constructor(event: AffiliateRemoved) {
    this._event = event;
  }

  get party(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get ipfsHash(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class ListingCreated extends ethereum.Event {
  get params(): ListingCreated__Params {
    return new ListingCreated__Params(this);
  }
}

export class ListingCreated__Params {
  _event: ListingCreated;

  constructor(event: ListingCreated) {
    this._event = event;
  }

  get party(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get listingID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get ipfsHash(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class ListingUpdated extends ethereum.Event {
  get params(): ListingUpdated__Params {
    return new ListingUpdated__Params(this);
  }
}

export class ListingUpdated__Params {
  _event: ListingUpdated;

  constructor(event: ListingUpdated) {
    this._event = event;
  }

  get party(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get listingID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get ipfsHash(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class ListingWithdrawn extends ethereum.Event {
  get params(): ListingWithdrawn__Params {
    return new ListingWithdrawn__Params(this);
  }
}

export class ListingWithdrawn__Params {
  _event: ListingWithdrawn;

  constructor(event: ListingWithdrawn) {
    this._event = event;
  }

  get party(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get listingID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get ipfsHash(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class ListingArbitrated extends ethereum.Event {
  get params(): ListingArbitrated__Params {
    return new ListingArbitrated__Params(this);
  }
}

export class ListingArbitrated__Params {
  _event: ListingArbitrated;

  constructor(event: ListingArbitrated) {
    this._event = event;
  }

  get party(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get listingID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get ipfsHash(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class ListingData extends ethereum.Event {
  get params(): ListingData__Params {
    return new ListingData__Params(this);
  }
}

export class ListingData__Params {
  _event: ListingData;

  constructor(event: ListingData) {
    this._event = event;
  }

  get party(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get listingID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get ipfsHash(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class OfferCreated extends ethereum.Event {
  get params(): OfferCreated__Params {
    return new OfferCreated__Params(this);
  }
}

export class OfferCreated__Params {
  _event: OfferCreated;

  constructor(event: OfferCreated) {
    this._event = event;
  }

  get party(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get listingID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get offerID(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get ipfsHash(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class OfferAccepted extends ethereum.Event {
  get params(): OfferAccepted__Params {
    return new OfferAccepted__Params(this);
  }
}

export class OfferAccepted__Params {
  _event: OfferAccepted;

  constructor(event: OfferAccepted) {
    this._event = event;
  }

  get party(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get listingID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get offerID(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get ipfsHash(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class OfferFinalized extends ethereum.Event {
  get params(): OfferFinalized__Params {
    return new OfferFinalized__Params(this);
  }
}

export class OfferFinalized__Params {
  _event: OfferFinalized;

  constructor(event: OfferFinalized) {
    this._event = event;
  }

  get party(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get listingID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get offerID(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get ipfsHash(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class OfferWithdrawn extends ethereum.Event {
  get params(): OfferWithdrawn__Params {
    return new OfferWithdrawn__Params(this);
  }
}

export class OfferWithdrawn__Params {
  _event: OfferWithdrawn;

  constructor(event: OfferWithdrawn) {
    this._event = event;
  }

  get party(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get listingID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get offerID(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get ipfsHash(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class OfferFundsAdded extends ethereum.Event {
  get params(): OfferFundsAdded__Params {
    return new OfferFundsAdded__Params(this);
  }
}

export class OfferFundsAdded__Params {
  _event: OfferFundsAdded;

  constructor(event: OfferFundsAdded) {
    this._event = event;
  }

  get party(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get listingID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get offerID(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get ipfsHash(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class OfferDisputed extends ethereum.Event {
  get params(): OfferDisputed__Params {
    return new OfferDisputed__Params(this);
  }
}

export class OfferDisputed__Params {
  _event: OfferDisputed;

  constructor(event: OfferDisputed) {
    this._event = event;
  }

  get party(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get listingID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get offerID(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get ipfsHash(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class OfferRuling extends ethereum.Event {
  get params(): OfferRuling__Params {
    return new OfferRuling__Params(this);
  }
}

export class OfferRuling__Params {
  _event: OfferRuling;

  constructor(event: OfferRuling) {
    this._event = event;
  }

  get party(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get listingID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get offerID(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get ipfsHash(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get ruling(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class OfferData extends ethereum.Event {
  get params(): OfferData__Params {
    return new OfferData__Params(this);
  }
}

export class OfferData__Params {
  _event: OfferData;

  constructor(event: OfferData) {
    this._event = event;
  }

  get party(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get listingID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get offerID(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get ipfsHash(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class OwnershipRenounced extends ethereum.Event {
  get params(): OwnershipRenounced__Params {
    return new OwnershipRenounced__Params(this);
  }
}

export class OwnershipRenounced__Params {
  _event: OwnershipRenounced;

  constructor(event: OwnershipRenounced) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class V01_Marketplace__offersResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: Address;
  value4: Address;
  value5: Address;
  value6: Address;
  value7: BigInt;
  value8: i32;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: Address,
    value4: Address,
    value5: Address,
    value6: Address,
    value7: BigInt,
    value8: i32
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromAddress(this.value4));
    map.set("value5", ethereum.Value.fromAddress(this.value5));
    map.set("value6", ethereum.Value.fromAddress(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set(
      "value8",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value8))
    );
    return map;
  }
}

export class V01_Marketplace__listingsResult {
  value0: Address;
  value1: BigInt;
  value2: Address;

  constructor(value0: Address, value1: BigInt, value2: Address) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    return map;
  }
}

export class V01_Marketplace extends ethereum.SmartContract {
  static bind(address: Address): V01_Marketplace {
    return new V01_Marketplace("V01_Marketplace", address);
  }

  offers(param0: BigInt, param1: BigInt): V01_Marketplace__offersResult {
    let result = super.call(
      "offers",
      "offers(uint256,uint256):(uint256,uint256,uint256,address,address,address,address,uint256,uint8)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return new V01_Marketplace__offersResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toAddress(),
      result[4].toAddress(),
      result[5].toAddress(),
      result[6].toAddress(),
      result[7].toBigInt(),
      result[8].toI32()
    );
  }

  try_offers(
    param0: BigInt,
    param1: BigInt
  ): ethereum.CallResult<V01_Marketplace__offersResult> {
    let result = super.tryCall(
      "offers",
      "offers(uint256,uint256):(uint256,uint256,uint256,address,address,address,address,uint256,uint8)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new V01_Marketplace__offersResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toAddress(),
        value[4].toAddress(),
        value[5].toAddress(),
        value[6].toAddress(),
        value[7].toBigInt(),
        value[8].toI32()
      )
    );
  }

  tokenAddr(): Address {
    let result = super.call("tokenAddr", "tokenAddr():(address)", []);

    return result[0].toAddress();
  }

  try_tokenAddr(): ethereum.CallResult<Address> {
    let result = super.tryCall("tokenAddr", "tokenAddr():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  totalOffers(listingID: BigInt): BigInt {
    let result = super.call("totalOffers", "totalOffers(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(listingID)
    ]);

    return result[0].toBigInt();
  }

  try_totalOffers(listingID: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalOffers",
      "totalOffers(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(listingID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  allowedAffiliates(param0: Address): boolean {
    let result = super.call(
      "allowedAffiliates",
      "allowedAffiliates(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBoolean();
  }

  try_allowedAffiliates(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "allowedAffiliates",
      "allowedAffiliates(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  totalListings(): BigInt {
    let result = super.call("totalListings", "totalListings():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalListings(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalListings",
      "totalListings():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  updateListingWithSender(
    _seller: Address,
    listingID: BigInt,
    _ipfsHash: Bytes,
    _additionalDeposit: BigInt
  ): boolean {
    let result = super.call(
      "updateListingWithSender",
      "updateListingWithSender(address,uint256,bytes32,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_seller),
        ethereum.Value.fromUnsignedBigInt(listingID),
        ethereum.Value.fromFixedBytes(_ipfsHash),
        ethereum.Value.fromUnsignedBigInt(_additionalDeposit)
      ]
    );

    return result[0].toBoolean();
  }

  try_updateListingWithSender(
    _seller: Address,
    listingID: BigInt,
    _ipfsHash: Bytes,
    _additionalDeposit: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "updateListingWithSender",
      "updateListingWithSender(address,uint256,bytes32,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_seller),
        ethereum.Value.fromUnsignedBigInt(listingID),
        ethereum.Value.fromFixedBytes(_ipfsHash),
        ethereum.Value.fromUnsignedBigInt(_additionalDeposit)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  createListingWithSender(
    _seller: Address,
    _ipfsHash: Bytes,
    _deposit: BigInt,
    _depositManager: Address
  ): boolean {
    let result = super.call(
      "createListingWithSender",
      "createListingWithSender(address,bytes32,uint256,address):(bool)",
      [
        ethereum.Value.fromAddress(_seller),
        ethereum.Value.fromFixedBytes(_ipfsHash),
        ethereum.Value.fromUnsignedBigInt(_deposit),
        ethereum.Value.fromAddress(_depositManager)
      ]
    );

    return result[0].toBoolean();
  }

  try_createListingWithSender(
    _seller: Address,
    _ipfsHash: Bytes,
    _deposit: BigInt,
    _depositManager: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "createListingWithSender",
      "createListingWithSender(address,bytes32,uint256,address):(bool)",
      [
        ethereum.Value.fromAddress(_seller),
        ethereum.Value.fromFixedBytes(_ipfsHash),
        ethereum.Value.fromUnsignedBigInt(_deposit),
        ethereum.Value.fromAddress(_depositManager)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  listings(param0: BigInt): V01_Marketplace__listingsResult {
    let result = super.call(
      "listings",
      "listings(uint256):(address,uint256,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new V01_Marketplace__listingsResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toAddress()
    );
  }

  try_listings(
    param0: BigInt
  ): ethereum.CallResult<V01_Marketplace__listingsResult> {
    let result = super.tryCall(
      "listings",
      "listings(uint256):(address,uint256,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new V01_Marketplace__listingsResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toAddress()
      )
    );
  }
}

export class UpdateRefundCall extends ethereum.Call {
  get inputs(): UpdateRefundCall__Inputs {
    return new UpdateRefundCall__Inputs(this);
  }

  get outputs(): UpdateRefundCall__Outputs {
    return new UpdateRefundCall__Outputs(this);
  }
}

export class UpdateRefundCall__Inputs {
  _call: UpdateRefundCall;

  constructor(call: UpdateRefundCall) {
    this._call = call;
  }

  get listingID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get offerID(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _refund(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _ipfsHash(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class UpdateRefundCall__Outputs {
  _call: UpdateRefundCall;

  constructor(call: UpdateRefundCall) {
    this._call = call;
  }
}

export class AddDataCall extends ethereum.Call {
  get inputs(): AddDataCall__Inputs {
    return new AddDataCall__Inputs(this);
  }

  get outputs(): AddDataCall__Outputs {
    return new AddDataCall__Outputs(this);
  }
}

export class AddDataCall__Inputs {
  _call: AddDataCall;

  constructor(call: AddDataCall) {
    this._call = call;
  }

  get ipfsHash(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class AddDataCall__Outputs {
  _call: AddDataCall;

  constructor(call: AddDataCall) {
    this._call = call;
  }
}

export class SetTokenAddrCall extends ethereum.Call {
  get inputs(): SetTokenAddrCall__Inputs {
    return new SetTokenAddrCall__Inputs(this);
  }

  get outputs(): SetTokenAddrCall__Outputs {
    return new SetTokenAddrCall__Outputs(this);
  }
}

export class SetTokenAddrCall__Inputs {
  _call: SetTokenAddrCall;

  constructor(call: SetTokenAddrCall) {
    this._call = call;
  }

  get _tokenAddr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetTokenAddrCall__Outputs {
  _call: SetTokenAddrCall;

  constructor(call: SetTokenAddrCall) {
    this._call = call;
  }
}

export class MakeOfferCall extends ethereum.Call {
  get inputs(): MakeOfferCall__Inputs {
    return new MakeOfferCall__Inputs(this);
  }

  get outputs(): MakeOfferCall__Outputs {
    return new MakeOfferCall__Outputs(this);
  }
}

export class MakeOfferCall__Inputs {
  _call: MakeOfferCall;

  constructor(call: MakeOfferCall) {
    this._call = call;
  }

  get listingID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _ipfsHash(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _finalizes(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _affiliate(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _commission(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _value(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _currency(): Address {
    return this._call.inputValues[6].value.toAddress();
  }

  get _arbitrator(): Address {
    return this._call.inputValues[7].value.toAddress();
  }
}

export class MakeOfferCall__Outputs {
  _call: MakeOfferCall;

  constructor(call: MakeOfferCall) {
    this._call = call;
  }
}

export class SendDepositCall extends ethereum.Call {
  get inputs(): SendDepositCall__Inputs {
    return new SendDepositCall__Inputs(this);
  }

  get outputs(): SendDepositCall__Outputs {
    return new SendDepositCall__Outputs(this);
  }
}

export class SendDepositCall__Inputs {
  _call: SendDepositCall;

  constructor(call: SendDepositCall) {
    this._call = call;
  }

  get listingID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get target(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get ipfsHash(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SendDepositCall__Outputs {
  _call: SendDepositCall;

  constructor(call: SendDepositCall) {
    this._call = call;
  }
}

export class DisputeCall extends ethereum.Call {
  get inputs(): DisputeCall__Inputs {
    return new DisputeCall__Inputs(this);
  }

  get outputs(): DisputeCall__Outputs {
    return new DisputeCall__Outputs(this);
  }
}

export class DisputeCall__Inputs {
  _call: DisputeCall;

  constructor(call: DisputeCall) {
    this._call = call;
  }

  get listingID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get offerID(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _ipfsHash(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class DisputeCall__Outputs {
  _call: DisputeCall;

  constructor(call: DisputeCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class AddAffiliateCall extends ethereum.Call {
  get inputs(): AddAffiliateCall__Inputs {
    return new AddAffiliateCall__Inputs(this);
  }

  get outputs(): AddAffiliateCall__Outputs {
    return new AddAffiliateCall__Outputs(this);
  }
}

export class AddAffiliateCall__Inputs {
  _call: AddAffiliateCall;

  constructor(call: AddAffiliateCall) {
    this._call = call;
  }

  get _affiliate(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get ipfsHash(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class AddAffiliateCall__Outputs {
  _call: AddAffiliateCall;

  constructor(call: AddAffiliateCall) {
    this._call = call;
  }
}

export class AddFundsCall extends ethereum.Call {
  get inputs(): AddFundsCall__Inputs {
    return new AddFundsCall__Inputs(this);
  }

  get outputs(): AddFundsCall__Outputs {
    return new AddFundsCall__Outputs(this);
  }
}

export class AddFundsCall__Inputs {
  _call: AddFundsCall;

  constructor(call: AddFundsCall) {
    this._call = call;
  }

  get listingID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get offerID(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _ipfsHash(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get _value(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class AddFundsCall__Outputs {
  _call: AddFundsCall;

  constructor(call: AddFundsCall) {
    this._call = call;
  }
}

export class AddData1Call extends ethereum.Call {
  get inputs(): AddData1Call__Inputs {
    return new AddData1Call__Inputs(this);
  }

  get outputs(): AddData1Call__Outputs {
    return new AddData1Call__Outputs(this);
  }
}

export class AddData1Call__Inputs {
  _call: AddData1Call;

  constructor(call: AddData1Call) {
    this._call = call;
  }

  get listingID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get ipfsHash(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class AddData1Call__Outputs {
  _call: AddData1Call;

  constructor(call: AddData1Call) {
    this._call = call;
  }
}

export class AcceptOfferCall extends ethereum.Call {
  get inputs(): AcceptOfferCall__Inputs {
    return new AcceptOfferCall__Inputs(this);
  }

  get outputs(): AcceptOfferCall__Outputs {
    return new AcceptOfferCall__Outputs(this);
  }
}

export class AcceptOfferCall__Inputs {
  _call: AcceptOfferCall;

  constructor(call: AcceptOfferCall) {
    this._call = call;
  }

  get listingID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get offerID(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _ipfsHash(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class AcceptOfferCall__Outputs {
  _call: AcceptOfferCall;

  constructor(call: AcceptOfferCall) {
    this._call = call;
  }
}

export class RemoveAffiliateCall extends ethereum.Call {
  get inputs(): RemoveAffiliateCall__Inputs {
    return new RemoveAffiliateCall__Inputs(this);
  }

  get outputs(): RemoveAffiliateCall__Outputs {
    return new RemoveAffiliateCall__Outputs(this);
  }
}

export class RemoveAffiliateCall__Inputs {
  _call: RemoveAffiliateCall;

  constructor(call: RemoveAffiliateCall) {
    this._call = call;
  }

  get _affiliate(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get ipfsHash(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class RemoveAffiliateCall__Outputs {
  _call: RemoveAffiliateCall;

  constructor(call: RemoveAffiliateCall) {
    this._call = call;
  }
}

export class WithdrawListingCall extends ethereum.Call {
  get inputs(): WithdrawListingCall__Inputs {
    return new WithdrawListingCall__Inputs(this);
  }

  get outputs(): WithdrawListingCall__Outputs {
    return new WithdrawListingCall__Outputs(this);
  }
}

export class WithdrawListingCall__Inputs {
  _call: WithdrawListingCall;

  constructor(call: WithdrawListingCall) {
    this._call = call;
  }

  get listingID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _target(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _ipfsHash(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class WithdrawListingCall__Outputs {
  _call: WithdrawListingCall;

  constructor(call: WithdrawListingCall) {
    this._call = call;
  }
}

export class UpdateListingCall extends ethereum.Call {
  get inputs(): UpdateListingCall__Inputs {
    return new UpdateListingCall__Inputs(this);
  }

  get outputs(): UpdateListingCall__Outputs {
    return new UpdateListingCall__Outputs(this);
  }
}

export class UpdateListingCall__Inputs {
  _call: UpdateListingCall;

  constructor(call: UpdateListingCall) {
    this._call = call;
  }

  get listingID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _ipfsHash(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _additionalDeposit(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class UpdateListingCall__Outputs {
  _call: UpdateListingCall;

  constructor(call: UpdateListingCall) {
    this._call = call;
  }
}

export class ExecuteRulingCall extends ethereum.Call {
  get inputs(): ExecuteRulingCall__Inputs {
    return new ExecuteRulingCall__Inputs(this);
  }

  get outputs(): ExecuteRulingCall__Outputs {
    return new ExecuteRulingCall__Outputs(this);
  }
}

export class ExecuteRulingCall__Inputs {
  _call: ExecuteRulingCall;

  constructor(call: ExecuteRulingCall) {
    this._call = call;
  }

  get listingID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get offerID(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _ipfsHash(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get _ruling(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _refund(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class ExecuteRulingCall__Outputs {
  _call: ExecuteRulingCall;

  constructor(call: ExecuteRulingCall) {
    this._call = call;
  }
}

export class CreateListingCall extends ethereum.Call {
  get inputs(): CreateListingCall__Inputs {
    return new CreateListingCall__Inputs(this);
  }

  get outputs(): CreateListingCall__Outputs {
    return new CreateListingCall__Outputs(this);
  }
}

export class CreateListingCall__Inputs {
  _call: CreateListingCall;

  constructor(call: CreateListingCall) {
    this._call = call;
  }

  get _ipfsHash(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _deposit(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _depositManager(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class CreateListingCall__Outputs {
  _call: CreateListingCall;

  constructor(call: CreateListingCall) {
    this._call = call;
  }
}

export class UpdateListingWithSenderCall extends ethereum.Call {
  get inputs(): UpdateListingWithSenderCall__Inputs {
    return new UpdateListingWithSenderCall__Inputs(this);
  }

  get outputs(): UpdateListingWithSenderCall__Outputs {
    return new UpdateListingWithSenderCall__Outputs(this);
  }
}

export class UpdateListingWithSenderCall__Inputs {
  _call: UpdateListingWithSenderCall;

  constructor(call: UpdateListingWithSenderCall) {
    this._call = call;
  }

  get _seller(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get listingID(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _ipfsHash(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get _additionalDeposit(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class UpdateListingWithSenderCall__Outputs {
  _call: UpdateListingWithSenderCall;

  constructor(call: UpdateListingWithSenderCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class AddData2Call extends ethereum.Call {
  get inputs(): AddData2Call__Inputs {
    return new AddData2Call__Inputs(this);
  }

  get outputs(): AddData2Call__Outputs {
    return new AddData2Call__Outputs(this);
  }
}

export class AddData2Call__Inputs {
  _call: AddData2Call;

  constructor(call: AddData2Call) {
    this._call = call;
  }

  get listingID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get offerID(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get ipfsHash(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class AddData2Call__Outputs {
  _call: AddData2Call;

  constructor(call: AddData2Call) {
    this._call = call;
  }
}

export class CreateListingWithSenderCall extends ethereum.Call {
  get inputs(): CreateListingWithSenderCall__Inputs {
    return new CreateListingWithSenderCall__Inputs(this);
  }

  get outputs(): CreateListingWithSenderCall__Outputs {
    return new CreateListingWithSenderCall__Outputs(this);
  }
}

export class CreateListingWithSenderCall__Inputs {
  _call: CreateListingWithSenderCall;

  constructor(call: CreateListingWithSenderCall) {
    this._call = call;
  }

  get _seller(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _ipfsHash(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _deposit(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _depositManager(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class CreateListingWithSenderCall__Outputs {
  _call: CreateListingWithSenderCall;

  constructor(call: CreateListingWithSenderCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class WithdrawOfferCall extends ethereum.Call {
  get inputs(): WithdrawOfferCall__Inputs {
    return new WithdrawOfferCall__Inputs(this);
  }

  get outputs(): WithdrawOfferCall__Outputs {
    return new WithdrawOfferCall__Outputs(this);
  }
}

export class WithdrawOfferCall__Inputs {
  _call: WithdrawOfferCall;

  constructor(call: WithdrawOfferCall) {
    this._call = call;
  }

  get listingID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get offerID(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _ipfsHash(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class WithdrawOfferCall__Outputs {
  _call: WithdrawOfferCall;

  constructor(call: WithdrawOfferCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get _newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class FinalizeCall extends ethereum.Call {
  get inputs(): FinalizeCall__Inputs {
    return new FinalizeCall__Inputs(this);
  }

  get outputs(): FinalizeCall__Outputs {
    return new FinalizeCall__Outputs(this);
  }
}

export class FinalizeCall__Inputs {
  _call: FinalizeCall;

  constructor(call: FinalizeCall) {
    this._call = call;
  }

  get listingID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get offerID(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _ipfsHash(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class FinalizeCall__Outputs {
  _call: FinalizeCall;

  constructor(call: FinalizeCall) {
    this._call = call;
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _tokenAddr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
