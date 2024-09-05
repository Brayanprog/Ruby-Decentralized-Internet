import { SortOrder } from "../../util/SortOrder";

export type EmailOrderByInput = {
  body?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  receivedAt?: SortOrder;
  recipient?: SortOrder;
  sender?: SortOrder;
  subject?: SortOrder;
  updatedAt?: SortOrder;
};
