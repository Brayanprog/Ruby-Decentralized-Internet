import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BlockchainModuleBase } from "./base/blockchain.module.base";
import { BlockchainService } from "./blockchain.service";
import { BlockchainController } from "./blockchain.controller";
import { BlockchainResolver } from "./blockchain.resolver";

@Module({
  imports: [BlockchainModuleBase, forwardRef(() => AuthModule)],
  controllers: [BlockchainController],
  providers: [BlockchainService, BlockchainResolver],
  exports: [BlockchainService],
})
export class BlockchainModule {}
