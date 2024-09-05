import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FuturePlanningWhereInput = {
  description?: StringNullableFilter;
  dueDate?: DateTimeNullableFilter;
  feature?: StringNullableFilter;
  id?: StringFilter;
};
