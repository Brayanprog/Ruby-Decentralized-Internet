import { Attachment as TAttachment } from "../api/attachment/Attachment";

export const ATTACHMENT_TITLE_FIELD = "filename";

export const AttachmentTitle = (record: TAttachment): string => {
  return record.filename?.toString() || String(record.id);
};
