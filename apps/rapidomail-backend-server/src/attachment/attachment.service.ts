import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AttachmentServiceBase } from "./base/attachment.service.base";

@Injectable()
export class AttachmentService extends AttachmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
