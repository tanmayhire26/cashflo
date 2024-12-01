import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export enum CategoryLevel {
  L1 = 'l1',
  L2 = 'l2',
  L3 = 'l3',
}

@Schema({ collection: 'categories', timestamps: true })
export class Category extends Document {
  @Prop({ type: String, required: true, unique: true })
  title: string;

  @Prop({ type: String })
  description: string;

  @Prop({ type: mongoose.Types.ObjectId })
  parentCategory: mongoose.Types.ObjectId;

  @Prop({ type: String, enum: Object.values(CategoryLevel), required: true })
  categoryLevel: CategoryLevel;
}

export const CategorySchema = SchemaFactory.createForClass(Category);