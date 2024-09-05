import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PeerCommunicationWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  receiverId?: StringNullableFilter;
  senderId?: StringNullableFilter;
  sentAt?: DateTimeNullableFilter;
};
