import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BlockchainService } from "./blockchain.service";
import { BlockchainControllerBase } from "./base/blockchain.controller.base";

@swagger.ApiTags("blockchains")
@common.Controller("blockchains")
export class BlockchainController extends BlockchainControllerBase {
  constructor(
    protected readonly service: BlockchainService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
