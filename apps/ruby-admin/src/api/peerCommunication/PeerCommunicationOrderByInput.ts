import { SortOrder } from "../../util/SortOrder";

export type PeerCommunicationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  receiverId?: SortOrder;
  senderId?: SortOrder;
  sentAt?: SortOrder;
  updatedAt?: SortOrder;
};
