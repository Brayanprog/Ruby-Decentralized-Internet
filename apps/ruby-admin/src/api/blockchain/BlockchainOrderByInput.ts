import { SortOrder } from "../../util/SortOrder";

export type BlockchainOrderByInput = {
  blockData?: SortOrder;
  createdAt?: SortOrder;
  hash?: SortOrder;
  id?: SortOrder;
  previousHash?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
