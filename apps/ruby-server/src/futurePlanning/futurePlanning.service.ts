import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FuturePlanningServiceBase } from "./base/futurePlanning.service.base";

@Injectable()
export class FuturePlanningService extends FuturePlanningServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
