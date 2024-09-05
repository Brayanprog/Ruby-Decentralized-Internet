import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type IntegrationTestWhereInput = {
  component?: StringNullableFilter;
  id?: StringFilter;
  result?: "Option1";
  testedAt?: DateTimeNullableFilter;
};
