import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PeerCommunicationService } from "./peerCommunication.service";
import { PeerCommunicationControllerBase } from "./base/peerCommunication.controller.base";

@swagger.ApiTags("peerCommunications")
@common.Controller("peerCommunications")
export class PeerCommunicationController extends PeerCommunicationControllerBase {
  constructor(
    protected readonly service: PeerCommunicationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
