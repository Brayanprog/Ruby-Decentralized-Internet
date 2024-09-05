import { InputJsonValue } from "../../types";

export type BlockchainUpdateInput = {
  blockData?: InputJsonValue;
  hash?: string | null;
  previousHash?: string | null;
  timestamp?: Date | null;
};
