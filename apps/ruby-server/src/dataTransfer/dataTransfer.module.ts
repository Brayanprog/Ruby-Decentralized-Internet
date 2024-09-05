import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DataTransferModuleBase } from "./base/dataTransfer.module.base";
import { DataTransferService } from "./dataTransfer.service";
import { DataTransferController } from "./dataTransfer.controller";
import { DataTransferResolver } from "./dataTransfer.resolver";

@Module({
  imports: [DataTransferModuleBase, forwardRef(() => AuthModule)],
  controllers: [DataTransferController],
  providers: [DataTransferService, DataTransferResolver],
  exports: [DataTransferService],
})
export class DataTransferModule {}
