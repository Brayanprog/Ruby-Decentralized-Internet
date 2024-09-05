import { IntegrationTest as TIntegrationTest } from "../api/integrationTest/IntegrationTest";

export const INTEGRATIONTEST_TITLE_FIELD = "component";

export const IntegrationTestTitle = (record: TIntegrationTest): string => {
  return record.component?.toString() || String(record.id);
};
