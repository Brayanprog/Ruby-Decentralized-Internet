import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DocumentationServiceBase } from "./base/documentation.service.base";

@Injectable()
export class DocumentationService extends DocumentationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
