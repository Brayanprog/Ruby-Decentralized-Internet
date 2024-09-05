import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DomainService } from "./domain.service";
import { DomainControllerBase } from "./base/domain.controller.base";

@swagger.ApiTags("domains")
@common.Controller("domains")
export class DomainController extends DomainControllerBase {
  constructor(
    protected readonly service: DomainService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
