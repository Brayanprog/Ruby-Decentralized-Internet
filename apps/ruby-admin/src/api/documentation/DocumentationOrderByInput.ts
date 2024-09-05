import { SortOrder } from "../../util/SortOrder";

export type DocumentationOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  docType?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  version?: SortOrder;
};
