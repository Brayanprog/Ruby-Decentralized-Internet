import { DomainWhereInput } from "./DomainWhereInput";
import { DomainOrderByInput } from "./DomainOrderByInput";

export type DomainFindManyArgs = {
  where?: DomainWhereInput;
  orderBy?: Array<DomainOrderByInput>;
  skip?: number;
  take?: number;
};
