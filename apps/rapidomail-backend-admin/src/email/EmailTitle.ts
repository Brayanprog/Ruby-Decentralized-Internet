import { Email as TEmail } from "../api/email/Email";

export const EMAIL_TITLE_FIELD = "recipient";

export const EmailTitle = (record: TEmail): string => {
  return record.recipient?.toString() || String(record.id);
};
