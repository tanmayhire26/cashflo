import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { TransactionsRepository } from './repository/transactions.repository';
import { TransactionsSchema } from './schemas/transaction.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService, TransactionsRepository],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Transactions',
        schema: TransactionsSchema,
      },
    ]),
  ],
})
export class TransactionsModule {}
