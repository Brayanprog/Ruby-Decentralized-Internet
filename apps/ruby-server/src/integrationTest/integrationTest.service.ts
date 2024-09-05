import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IntegrationTestServiceBase } from "./base/integrationTest.service.base";

@Injectable()
export class IntegrationTestService extends IntegrationTestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
