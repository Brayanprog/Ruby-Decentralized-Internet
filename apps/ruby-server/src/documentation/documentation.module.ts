import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DocumentationModuleBase } from "./base/documentation.module.base";
import { DocumentationService } from "./documentation.service";
import { DocumentationController } from "./documentation.controller";
import { DocumentationResolver } from "./documentation.resolver";

@Module({
  imports: [DocumentationModuleBase, forwardRef(() => AuthModule)],
  controllers: [DocumentationController],
  providers: [DocumentationService, DocumentationResolver],
  exports: [DocumentationService],
})
export class DocumentationModule {}
