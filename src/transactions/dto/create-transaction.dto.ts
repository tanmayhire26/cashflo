import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { TransactionItem } from '../schemas/transaction-item.schema';

export class CreateTransactionDto {
  @ApiProperty()
  @IsNotEmpty()
  transactionCode: string;

  @ApiProperty()
  @IsNotEmpty()
  transactionDate: Date;

  @ApiProperty()
  @IsNotEmpty()
  paymentMode: string;

  @ApiProperty()
  @IsNotEmpty()
  item: TransactionItem;

  @ApiProperty()
  necessary: boolean;

  @ApiProperty()
  @IsNotEmpty()
  type: string;
}
