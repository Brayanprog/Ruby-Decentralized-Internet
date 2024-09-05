import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DomainServiceBase } from "./base/domain.service.base";

@Injectable()
export class DomainService extends DomainServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
