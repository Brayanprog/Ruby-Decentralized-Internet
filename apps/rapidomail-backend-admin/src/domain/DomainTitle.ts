import { Domain as TDomain } from "../api/domain/Domain";

export const DOMAIN_TITLE_FIELD = "name";

export const DomainTitle = (record: TDomain): string => {
  return record.name?.toString() || String(record.id);
};
