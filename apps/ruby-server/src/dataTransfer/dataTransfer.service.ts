import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DataTransferServiceBase } from "./base/dataTransfer.service.base";

@Injectable()
export class DataTransferService extends DataTransferServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
