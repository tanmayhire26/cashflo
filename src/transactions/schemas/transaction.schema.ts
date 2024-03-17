import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { TransactionItem } from './transaction-item.schema';

export enum PaymentModeEnum {
  cash = 'cash',
  creditCard = 'credit card',
  debitCard = 'debit card',
  phonpe = 'phonepe',
  amazonPay = 'amazon pay',
  lazypay = 'lazypay',
}

@Schema({ collection: 'transactions', timestamps: true })
export class Transactions extends Document {
  @Prop({ required: true, unique: true, type: String })
  transactionCode: string;

  @Prop({ required: true, type: Date })
  transactionDate: Date;

  @Prop({ required: true, enum: PaymentModeEnum, type: String })
  paymentMode: string;

  @Prop({ required: true })
  item: TransactionItem;

  @Prop({ type: Boolean })
  necessary: boolean;

  @Prop({ type: String, enum: ['earning', 'expense', 'investment'] })
  type: string;

  @Prop({ type: Boolean, default: true })
  isActive: boolean;
}
export const TransactionsSchema = SchemaFactory.createForClass(Transactions);
