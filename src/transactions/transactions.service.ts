import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionsRepository } from './repository/transactions.repository';

@Injectable()
export class TransactionsService {
  constructor(private readonly transactionRepo: TransactionsRepository) {}
  async create(createTransactionDto: CreateTransactionDto) {
    return await this.transactionRepo.create(createTransactionDto);
  }

  async findAll() {
    return await this.transactionRepo.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
