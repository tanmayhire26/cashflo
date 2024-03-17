import { Prop } from '@nestjs/mongoose';
import { Types } from 'mongoose';

export enum unitTypeEnum {
  kg = 'kg',
  litre = 'litre',
  no = 'no',
  plate = 'plate',
}

export class TransactionItem {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ type: String })
  description: string;

  @Prop({ type: String, required: true, enum: unitTypeEnum })
  unit: string;

  @Prop({ type: Number })
  quantity: number;

  @Prop({ type: Number })
  price_per_unit: number;

  @Prop({ type: Number })
  price: number;

  @Prop({ type: Types.ObjectId })
  category: Types.ObjectId;

  @Prop({ type: Types.ObjectId })
  subCategory: Types.ObjectId;
}
