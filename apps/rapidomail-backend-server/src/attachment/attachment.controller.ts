import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AttachmentService } from "./attachment.service";
import { AttachmentControllerBase } from "./base/attachment.controller.base";

@swagger.ApiTags("attachments")
@common.Controller("attachments")
export class AttachmentController extends AttachmentControllerBase {
  constructor(
    protected readonly service: AttachmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
