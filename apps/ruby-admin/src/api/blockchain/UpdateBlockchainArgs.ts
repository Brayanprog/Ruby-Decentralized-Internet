import { BlockchainWhereUniqueInput } from "./BlockchainWhereUniqueInput";
import { BlockchainUpdateInput } from "./BlockchainUpdateInput";

export type UpdateBlockchainArgs = {
  where: BlockchainWhereUniqueInput;
  data: BlockchainUpdateInput;
};
