import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FuturePlanningResolverBase } from "./base/futurePlanning.resolver.base";
import { FuturePlanning } from "./base/FuturePlanning";
import { FuturePlanningService } from "./futurePlanning.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FuturePlanning)
export class FuturePlanningResolver extends FuturePlanningResolverBase {
  constructor(
    protected readonly service: FuturePlanningService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
