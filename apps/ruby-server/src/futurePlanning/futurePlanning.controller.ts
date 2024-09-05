import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FuturePlanningService } from "./futurePlanning.service";
import { FuturePlanningControllerBase } from "./base/futurePlanning.controller.base";

@swagger.ApiTags("futurePlannings")
@common.Controller("futurePlannings")
export class FuturePlanningController extends FuturePlanningControllerBase {
  constructor(
    protected readonly service: FuturePlanningService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
