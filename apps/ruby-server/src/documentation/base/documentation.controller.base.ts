/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { DocumentationService } from "../documentation.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DocumentationCreateInput } from "./DocumentationCreateInput";
import { Documentation } from "./Documentation";
import { DocumentationFindManyArgs } from "./DocumentationFindManyArgs";
import { DocumentationWhereUniqueInput } from "./DocumentationWhereUniqueInput";
import { DocumentationUpdateInput } from "./DocumentationUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class DocumentationControllerBase {
  constructor(
    protected readonly service: DocumentationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Documentation })
  @nestAccessControl.UseRoles({
    resource: "Documentation",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createDocumentation(
    @common.Body() data: DocumentationCreateInput
  ): Promise<Documentation> {
    return await this.service.createDocumentation({
      data: data,
      select: {
        content: true,
        createdAt: true,
        docType: true,
        id: true,
        updatedAt: true,
        version: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Documentation] })
  @ApiNestedQuery(DocumentationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Documentation",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async documentations(
    @common.Req() request: Request
  ): Promise<Documentation[]> {
    const args = plainToClass(DocumentationFindManyArgs, request.query);
    return this.service.documentations({
      ...args,
      select: {
        content: true,
        createdAt: true,
        docType: true,
        id: true,
        updatedAt: true,
        version: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Documentation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Documentation",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async documentation(
    @common.Param() params: DocumentationWhereUniqueInput
  ): Promise<Documentation | null> {
    const result = await this.service.documentation({
      where: params,
      select: {
        content: true,
        createdAt: true,
        docType: true,
        id: true,
        updatedAt: true,
        version: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Documentation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Documentation",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateDocumentation(
    @common.Param() params: DocumentationWhereUniqueInput,
    @common.Body() data: DocumentationUpdateInput
  ): Promise<Documentation | null> {
    try {
      return await this.service.updateDocumentation({
        where: params,
        data: data,
        select: {
          content: true,
          createdAt: true,
          docType: true,
          id: true,
          updatedAt: true,
          version: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Documentation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Documentation",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteDocumentation(
    @common.Param() params: DocumentationWhereUniqueInput
  ): Promise<Documentation | null> {
    try {
      return await this.service.deleteDocumentation({
        where: params,
        select: {
          content: true,
          createdAt: true,
          docType: true,
          id: true,
          updatedAt: true,
          version: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
