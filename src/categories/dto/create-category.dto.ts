import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import mongoose from 'mongoose';

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

  @ApiProperty()
  parent_category_id: string | mongoose.Types.ObjectId;

  @ApiProperty()
  @IsString()
  categoryLevel: string;
}
