import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

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
        // ...
      };
      await controller.create(createTransactionDto);
      expect(transactionsService.create).toHaveBeenCalledWith(
        createTransactionDto,
      );
    });
  });

  describe('findAll', () => {
    it('should call transactionsService.findAll', async () => {
      await controller.findAll();
      expect(transactionsService.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should call transactionsService.findOne', async () => {
      const id = '1';
      await controller.findOne(id);
      expect(transactionsService.findOne).toHaveBeenCalledWith(+id);
    });
  });

  describe('update', () => {
    it('should call transactionsService.update', async () => {
      const id = '1';
      const updateTransactionDto: UpdateTransactionDto = {
        // ...
      };
      await controller.update(id, updateTransactionDto);
      expect(transactionsService.update).toHaveBeenCalledWith(
        +id,
        updateTransactionDto,
      );
    });
  });

  describe('remove', () => {
    it('should call transactionsService.remove', async () => {
      const id = '1';
      await controller.remove(id);
      expect(transactionsService.remove).toHaveBeenCalledWith(+id);
    });
  });

  describe('getPrData', () => {
    it('should handle pull request event', async () => {
      const req = {
        headers: {
          'x-github-event': 'pull_request',
        },
        body: {
          // ...
        },
      };
      await controller.getPrData(req as any);
      expect(console.log).toHaveBeenCalled();
    });
  });
});