import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DocumentationService } from "./documentation.service";
import { DocumentationControllerBase } from "./base/documentation.controller.base";

@swagger.ApiTags("documentations")
@common.Controller("documentations")
export class DocumentationController extends DocumentationControllerBase {
  constructor(
    protected readonly service: DocumentationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
