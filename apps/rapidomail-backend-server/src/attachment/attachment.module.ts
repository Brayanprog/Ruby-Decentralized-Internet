import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AttachmentModuleBase } from "./base/attachment.module.base";
import { AttachmentService } from "./attachment.service";
import { AttachmentController } from "./attachment.controller";
import { AttachmentResolver } from "./attachment.resolver";

@Module({
  imports: [AttachmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [AttachmentController],
  providers: [AttachmentService, AttachmentResolver],
  exports: [AttachmentService],
})
export class AttachmentModule {}
