import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema({ collection: 'categories', timestamps: true })
export class Categories extends Document {
  @Prop({ required: true, unique: true })
  title: string;

  @Prop({ type: String })
  description: string;

  @Prop({ type: mongoose.Types.ObjectId })
  parent_category: mongoose.Types.ObjectId;
}

export const CategoriesSchema = SchemaFactory.createForClass(Categories);
