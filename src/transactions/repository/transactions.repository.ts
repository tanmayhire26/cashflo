import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Transactions } from '../schemas/transaction.schema';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { Model } from 'mongoose';

@Injectable()
export class TransactionsRepository {
  constructor(
    @InjectModel('Transactions')
    private readonly transactionsModel: Model<Transactions>,
  ) {}

  async create(createDto: CreateTransactionDto) {
    const transaction = new this.transactionsModel(createDto);
    const savedTransaction = await transaction.save();
    return savedTransaction;
  }

  async find(queryObject) {
    const transactions = await this.transactionsModel
      .find(queryObject)
      .skip(0)
      .limit(10);
    return transactions;
  }
}


