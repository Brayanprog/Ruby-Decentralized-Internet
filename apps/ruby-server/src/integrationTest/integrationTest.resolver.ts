import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { IntegrationTestResolverBase } from "./base/integrationTest.resolver.base";
import { IntegrationTest } from "./base/IntegrationTest";
import { IntegrationTestService } from "./integrationTest.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => IntegrationTest)
export class IntegrationTestResolver extends IntegrationTestResolverBase {
  constructor(
    protected readonly service: IntegrationTestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
