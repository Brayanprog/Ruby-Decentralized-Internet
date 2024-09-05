import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DomainModuleBase } from "./base/domain.module.base";
import { DomainService } from "./domain.service";
import { DomainController } from "./domain.controller";
import { DomainResolver } from "./domain.resolver";

@Module({
  imports: [DomainModuleBase, forwardRef(() => AuthModule)],
  controllers: [DomainController],
  providers: [DomainService, DomainResolver],
  exports: [DomainService],
})
export class DomainModule {}
