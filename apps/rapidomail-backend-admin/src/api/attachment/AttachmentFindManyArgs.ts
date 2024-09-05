import { AttachmentWhereInput } from "./AttachmentWhereInput";
import { AttachmentOrderByInput } from "./AttachmentOrderByInput";

export type AttachmentFindManyArgs = {
  where?: AttachmentWhereInput;
  orderBy?: Array<AttachmentOrderByInput>;
  skip?: number;
  take?: number;
};
