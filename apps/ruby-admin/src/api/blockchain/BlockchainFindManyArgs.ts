import { BlockchainWhereInput } from "./BlockchainWhereInput";
import { BlockchainOrderByInput } from "./BlockchainOrderByInput";

export type BlockchainFindManyArgs = {
  where?: BlockchainWhereInput;
  orderBy?: Array<BlockchainOrderByInput>;
  skip?: number;
  take?: number;
};
