export type PeerCommunication = {
  createdAt: Date;
  id: string;
  message: string | null;
  receiverId: string | null;
  senderId: string | null;
  sentAt: Date | null;
  updatedAt: Date;
};
