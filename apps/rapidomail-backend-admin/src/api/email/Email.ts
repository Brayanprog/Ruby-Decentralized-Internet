import { Attachment } from "../attachment/Attachment";

export type Email = {
  attachments?: Array<Attachment>;
  body: string | null;
  createdAt: Date;
  id: string;
  receivedAt: Date | null;
  recipient: string | null;
  sender: string | null;
  subject: string | null;
  updatedAt: Date;
};
