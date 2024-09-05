import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IntegrationTestModuleBase } from "./base/integrationTest.module.base";
import { IntegrationTestService } from "./integrationTest.service";
import { IntegrationTestController } from "./integrationTest.controller";
import { IntegrationTestResolver } from "./integrationTest.resolver";

@Module({
  imports: [IntegrationTestModuleBase, forwardRef(() => AuthModule)],
  controllers: [IntegrationTestController],
  providers: [IntegrationTestService, IntegrationTestResolver],
  exports: [IntegrationTestService],
})
export class IntegrationTestModule {}
