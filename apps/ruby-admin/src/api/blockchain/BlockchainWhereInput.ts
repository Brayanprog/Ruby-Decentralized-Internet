import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type BlockchainWhereInput = {
  blockData?: JsonFilter;
  hash?: StringNullableFilter;
  id?: StringFilter;
  previousHash?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
