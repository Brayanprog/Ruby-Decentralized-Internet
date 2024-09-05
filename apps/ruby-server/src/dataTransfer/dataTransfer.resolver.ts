import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DataTransferResolverBase } from "./base/dataTransfer.resolver.base";
import { DataTransfer } from "./base/DataTransfer";
import { DataTransferService } from "./dataTransfer.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DataTransfer)
export class DataTransferResolver extends DataTransferResolverBase {
  constructor(
    protected readonly service: DataTransferService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
