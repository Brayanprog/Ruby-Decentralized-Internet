/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IntegrationTestWhereUniqueInput } from "./IntegrationTestWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { IntegrationTestUpdateInput } from "./IntegrationTestUpdateInput";

@ArgsType()
class UpdateIntegrationTestArgs {
  @ApiProperty({
    required: true,
    type: () => IntegrationTestWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => IntegrationTestWhereUniqueInput)
  @Field(() => IntegrationTestWhereUniqueInput, { nullable: false })
  where!: IntegrationTestWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => IntegrationTestUpdateInput,
  })
  @ValidateNested()
  @Type(() => IntegrationTestUpdateInput)
  @Field(() => IntegrationTestUpdateInput, { nullable: false })
  data!: IntegrationTestUpdateInput;
}

export { UpdateIntegrationTestArgs as UpdateIntegrationTestArgs };
