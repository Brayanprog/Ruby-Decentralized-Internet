import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BlockchainResolverBase } from "./base/blockchain.resolver.base";
import { Blockchain } from "./base/Blockchain";
import { BlockchainService } from "./blockchain.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Blockchain)
export class BlockchainResolver extends BlockchainResolverBase {
  constructor(
    protected readonly service: BlockchainService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
