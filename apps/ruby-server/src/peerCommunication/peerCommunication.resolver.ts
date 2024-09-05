import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PeerCommunicationResolverBase } from "./base/peerCommunication.resolver.base";
import { PeerCommunication } from "./base/PeerCommunication";
import { PeerCommunicationService } from "./peerCommunication.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PeerCommunication)
export class PeerCommunicationResolver extends PeerCommunicationResolverBase {
  constructor(
    protected readonly service: PeerCommunicationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
