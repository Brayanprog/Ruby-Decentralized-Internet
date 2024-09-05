import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PeerCommunicationModuleBase } from "./base/peerCommunication.module.base";
import { PeerCommunicationService } from "./peerCommunication.service";
import { PeerCommunicationController } from "./peerCommunication.controller";
import { PeerCommunicationResolver } from "./peerCommunication.resolver";

@Module({
  imports: [PeerCommunicationModuleBase, forwardRef(() => AuthModule)],
  controllers: [PeerCommunicationController],
  providers: [PeerCommunicationService, PeerCommunicationResolver],
  exports: [PeerCommunicationService],
})
export class PeerCommunicationModule {}
