import { JsonValue } from "type-fest";

export type Blockchain = {
  blockData: JsonValue;
  createdAt: Date;
  hash: string | null;
  id: string;
  previousHash: string | null;
  timestamp: Date | null;
  updatedAt: Date;
};
