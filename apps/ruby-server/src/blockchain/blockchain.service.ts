import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BlockchainServiceBase } from "./base/blockchain.service.base";

@Injectable()
export class BlockchainService extends BlockchainServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
