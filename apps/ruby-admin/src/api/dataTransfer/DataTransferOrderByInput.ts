import { SortOrder } from "../../util/SortOrder";

export type DataTransferOrderByInput = {
  createdAt?: SortOrder;
  data?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  transferTime?: SortOrder;
  updatedAt?: SortOrder;
};
