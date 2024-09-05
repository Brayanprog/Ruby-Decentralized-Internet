import { InputJsonValue } from "../../types";

export type BlockchainCreateInput = {
  blockData?: InputJsonValue;
  hash?: string | null;
  previousHash?: string | null;
  timestamp?: Date | null;
};
