import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DocumentationWhereInput = {
  content?: StringNullableFilter;
  docType?: "Option1";
  id?: StringFilter;
  version?: StringNullableFilter;
};
