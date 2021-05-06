import {
  SubstrateBlock,
  SubstrateEvent,
  SubstrateExtrinsic,
} from "@subql/types";
import { ExtrinsicHandler } from "./extrinsic";
import { BlockHandler } from "./block";
import { EventHandler } from "./event";

export async function handleBlock(block: SubstrateBlock): Promise<void> {
  const handler = new BlockHandler(block);
  console.log(block.specVersion);

  await handler.save();
}

export async function handleEvent(event: SubstrateEvent): Promise<void> {
  const handler = new EventHandler(event);

  await handler.save();
}

export async function handleCall(extrinsic: SubstrateExtrinsic): Promise<void> {
  const handler = new ExtrinsicHandler(extrinsic);

  await handler.save();
}
