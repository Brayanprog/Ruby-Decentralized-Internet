import { Blockchain as TBlockchain } from "../api/blockchain/Blockchain";

export const BLOCKCHAIN_TITLE_FIELD = "hash";

export const BlockchainTitle = (record: TBlockchain): string => {
  return record.hash?.toString() || String(record.id);
};
