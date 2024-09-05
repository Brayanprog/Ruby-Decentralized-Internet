import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FuturePlanningModuleBase } from "./base/futurePlanning.module.base";
import { FuturePlanningService } from "./futurePlanning.service";
import { FuturePlanningController } from "./futurePlanning.controller";
import { FuturePlanningResolver } from "./futurePlanning.resolver";

@Module({
  imports: [FuturePlanningModuleBase, forwardRef(() => AuthModule)],
  controllers: [FuturePlanningController],
  providers: [FuturePlanningService, FuturePlanningResolver],
  exports: [FuturePlanningService],
})
export class FuturePlanningModule {}
