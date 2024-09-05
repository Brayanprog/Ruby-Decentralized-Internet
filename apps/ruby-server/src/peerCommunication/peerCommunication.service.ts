import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PeerCommunicationServiceBase } from "./base/peerCommunication.service.base";

@Injectable()
export class PeerCommunicationService extends PeerCommunicationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
