import { IntegrationTestWhereInput } from "./IntegrationTestWhereInput";
import { IntegrationTestOrderByInput } from "./IntegrationTestOrderByInput";

export type IntegrationTestFindManyArgs = {
  where?: IntegrationTestWhereInput;
  orderBy?: Array<IntegrationTestOrderByInput>;
  skip?: number;
  take?: number;
};
