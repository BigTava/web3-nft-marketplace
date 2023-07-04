import { BigInt, Address } from "@graphprotocol/graph-ts";
import {
  ItemBought as ItemBoughtEvent,
  ItemCanceled as ItemCanceledEvent,
  ItemListed as ItemListedEvent,
} from "../generated/NftMarketplace/NftMarketplace";
import { ItemBought, ItemCanceled, ItemListed } from "../generated/schema";

export function handleItemBought(event: ItemBoughtEvent): void {}

export function handleItemCanceled(event: ItemCanceledEvent): void {}

export function handleItemListed(event: ItemListedEvent): void {}

function getIdFromEventParams(tokenId: BigInt, nftAddress: Address): string {
  return tokenId.toHexString() + nftAddress.toHexString();
}