import { EmailWhereUniqueInput } from "../email/EmailWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type AttachmentUpdateInput = {
  email?: EmailWhereUniqueInput | null;
  fileContent?: InputJsonValue;
  fileSize?: number | null;
  fileType?: string | null;
  filename?: string | null;
};
