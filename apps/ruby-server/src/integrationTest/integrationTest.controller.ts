import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IntegrationTestService } from "./integrationTest.service";
import { IntegrationTestControllerBase } from "./base/integrationTest.controller.base";

@swagger.ApiTags("integrationTests")
@common.Controller("integrationTests")
export class IntegrationTestController extends IntegrationTestControllerBase {
  constructor(
    protected readonly service: IntegrationTestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
