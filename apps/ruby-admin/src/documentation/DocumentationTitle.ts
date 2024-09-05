import { Documentation as TDocumentation } from "../api/documentation/Documentation";

export const DOCUMENTATION_TITLE_FIELD = "version";

export const DocumentationTitle = (record: TDocumentation): string => {
  return record.version?.toString() || String(record.id);
};
