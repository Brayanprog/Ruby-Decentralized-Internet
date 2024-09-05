import { DataTransfer as TDataTransfer } from "../api/dataTransfer/DataTransfer";

export const DATATRANSFER_TITLE_FIELD = "id";

export const DataTransferTitle = (record: TDataTransfer): string => {
  return record.id?.toString() || String(record.id);
};
