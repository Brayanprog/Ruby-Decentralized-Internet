import { PeerCommunicationWhereInput } from "./PeerCommunicationWhereInput";
import { PeerCommunicationOrderByInput } from "./PeerCommunicationOrderByInput";

export type PeerCommunicationFindManyArgs = {
  where?: PeerCommunicationWhereInput;
  orderBy?: Array<PeerCommunicationOrderByInput>;
  skip?: number;
  take?: number;
};
