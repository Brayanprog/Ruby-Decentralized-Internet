import { AttachmentListRelationFilter } from "../attachment/AttachmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type EmailWhereInput = {
  attachments?: AttachmentListRelationFilter;
  body?: StringNullableFilter;
  id?: StringFilter;
  receivedAt?: DateTimeNullableFilter;
  recipient?: StringNullableFilter;
  sender?: StringNullableFilter;
  subject?: StringNullableFilter;
};
