import { IsNotEmpty, IsString, MaxLength } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50, { message: `"title" cannot exceed 50 charaters` })
  @ApiProperty()
  title: string;

  @IsString()
  @MaxLength(500, { message: `"description" cannot exceed 500 characters` })
  @ApiProperty()
  description: string;
}
