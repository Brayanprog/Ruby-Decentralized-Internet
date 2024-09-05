import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type DataTransferWhereInput = {
  data?: StringNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  transferTime?: DateTimeNullableFilter;
};
