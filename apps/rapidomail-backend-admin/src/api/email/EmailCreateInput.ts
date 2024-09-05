import { AttachmentCreateNestedManyWithoutEmailsInput } from "./AttachmentCreateNestedManyWithoutEmailsInput";

export type EmailCreateInput = {
  attachments?: AttachmentCreateNestedManyWithoutEmailsInput;
  body?: string | null;
  receivedAt?: Date | null;
  recipient?: string | null;
  sender?: string | null;
  subject?: string | null;
};
