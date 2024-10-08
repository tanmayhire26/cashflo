import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Request } from 'express';

describe('TransactionsController', () => {
  let controller: TransactionsController;
  let transactionsService: TransactionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactionsController],
      providers: [
        {
          provide: TransactionsService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<TransactionsController>(TransactionsController);
    transactionsService = module.get<TransactionsService>(TransactionsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should call transactionsService.create', async () => {
      const createTransactionDto: CreateTransactionDto = {
        // Your DTO properties
      };
      await controller.create(createTransactionDto);
      expect(transactionsService.create).toHaveBeenCalledWith(createTransactionDto);
    });
  });

  describe('findAll', () => {
    it('should call transactionsService.findAll', async () => {
      await controller.findAll();
      expect(transactionsService.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should call transactionsService.findOne', () => {
      const id = '1';
      controller.findOne(id);
      expect(transactionsService.findOne).toHaveBeenCalledWith(+id);
    });
  });

  describe('update', () => {
    it('should call transactionsService.update', () => {
      const id = '1';
      const updateTransactionDto: UpdateTransactionDto = {
        // Your DTO properties
      };
      controller.update(id, updateTransactionDto);
      expect(transactionsService.update).toHaveBeenCalledWith(+id, updateTransactionDto);
    });
  });

  describe('remove', () => {
    it('should call transactionsService.remove', () => {
      const id = '1';
      controller.remove(id);
      expect(transactionsService.remove).toHaveBeenCalledWith(+id);
    });
  });

  describe('getPrData', () => {
    it('should handle pull request event', () => {
      const req: Request = {
        headers: { 'x-github-event': 'pull_request' },
        body: {
          // Mock pull request data
        },
      };
      controller.getPrData(req);
      expect(console.log).toHaveBeenCalledWith('Pull Request Event Received:', req.body);
    });

    it('should not handle non-pull request event', () => {
      const req: Request = {
        headers: { 'x-github-event': 'push' },
        body: {
          // Mock push data
        },
      };
      controller.getPrData(req);
      expect(console.log).not.toHaveBeenCalled();
    });
  });
});