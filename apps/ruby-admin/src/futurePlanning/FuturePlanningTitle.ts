import { FuturePlanning as TFuturePlanning } from "../api/futurePlanning/FuturePlanning";

export const FUTUREPLANNING_TITLE_FIELD = "feature";

export const FuturePlanningTitle = (record: TFuturePlanning): string => {
  return record.feature?.toString() || String(record.id);
};
