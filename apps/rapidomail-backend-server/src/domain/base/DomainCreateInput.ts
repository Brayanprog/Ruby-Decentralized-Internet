/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength, IsOptional, IsEnum } from "class-validator";
import { EnumDomainStatus } from "./EnumDomainStatus";

@InputType()
class DomainCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumDomainStatus,
  })
  @IsEnum(EnumDomainStatus)
  @IsOptional()
  @Field(() => EnumDomainStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { DomainCreateInput as DomainCreateInput };
