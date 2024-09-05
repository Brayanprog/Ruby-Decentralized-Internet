import { SortOrder } from "../../util/SortOrder";

export type AttachmentOrderByInput = {
  createdAt?: SortOrder;
  emailId?: SortOrder;
  fileContent?: SortOrder;
  fileSize?: SortOrder;
  fileType?: SortOrder;
  filename?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
