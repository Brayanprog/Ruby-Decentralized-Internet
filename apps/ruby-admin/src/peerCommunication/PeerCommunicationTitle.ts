import { PeerCommunication as TPeerCommunication } from "../api/peerCommunication/PeerCommunication";

export const PEERCOMMUNICATION_TITLE_FIELD = "receiverId";

export const PeerCommunicationTitle = (record: TPeerCommunication): string => {
  return record.receiverId?.toString() || String(record.id);
};
