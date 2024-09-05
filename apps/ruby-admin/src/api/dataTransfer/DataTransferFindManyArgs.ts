import { DataTransferWhereInput } from "./DataTransferWhereInput";
import { DataTransferOrderByInput } from "./DataTransferOrderByInput";

export type DataTransferFindManyArgs = {
  where?: DataTransferWhereInput;
  orderBy?: Array<DataTransferOrderByInput>;
  skip?: number;
  take?: number;
};
