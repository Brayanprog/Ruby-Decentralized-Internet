import { Email } from "../email/Email";
import { JsonValue } from "type-fest";

export type Attachment = {
  createdAt: Date;
  email?: Email | null;
  fileContent: JsonValue;
  fileSize: number | null;
  fileType: string | null;
  filename: string | null;
  id: string;
  updatedAt: Date;
};
