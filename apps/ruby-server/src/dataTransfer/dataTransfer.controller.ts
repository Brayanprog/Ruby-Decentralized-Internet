import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DataTransferService } from "./dataTransfer.service";
import { DataTransferControllerBase } from "./base/dataTransfer.controller.base";

@swagger.ApiTags("dataTransfers")
@common.Controller("dataTransfers")
export class DataTransferController extends DataTransferControllerBase {
  constructor(
    protected readonly service: DataTransferService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
