import { AttachmentUpdateManyWithoutEmailsInput } from "./AttachmentUpdateManyWithoutEmailsInput";

export type EmailUpdateInput = {
  attachments?: AttachmentUpdateManyWithoutEmailsInput;
  body?: string | null;
  receivedAt?: Date | null;
  recipient?: string | null;
  sender?: string | null;
  subject?: string | null;
};
