import { SortOrder } from "../../util/SortOrder";

export type IntegrationTestOrderByInput = {
  component?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  result?: SortOrder;
  testedAt?: SortOrder;
  updatedAt?: SortOrder;
};
