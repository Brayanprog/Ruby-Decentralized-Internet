import { EmailWhereUniqueInput } from "../email/EmailWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AttachmentWhereInput = {
  email?: EmailWhereUniqueInput;
  fileContent?: JsonFilter;
  fileSize?: IntNullableFilter;
  fileType?: StringNullableFilter;
  filename?: StringNullableFilter;
  id?: StringFilter;
};
