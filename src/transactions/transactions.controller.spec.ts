import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

describe('TransactionsController', () => {
  let controller: TransactionsController;
  let service: TransactionsService;

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
    service = module.get<TransactionsService>(TransactionsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should call service.create with the provided dto', async () => {
      const createTransactionDto: CreateTransactionDto = {
        // Add your data here
      };
      const result = {};
      jest.spyOn(service, 'create').mockResolvedValueOnce(result);
      expect(await controller.create(createTransactionDto)).toBe(result);
      expect(service.create).toHaveBeenCalledWith(createTransactionDto);
    });
  });

  describe('findAll', () => {
    it('should call service.findAll and return the result', async () => {
      const result = [];
      jest.spyOn(service, 'findAll').mockResolvedValueOnce(result);
      expect(await controller.findAll()).toBe(result);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should call service.findOne with the provided id', () => {
      const id = '1';
      jest.spyOn(service, 'findOne').mockReturnValueOnce({});
      controller.findOne(id);
      expect(service.findOne).toHaveBeenCalledWith(+id);
    });
  });

  describe('update', () => {
    it('should call service.update with the provided id and dto', () => {
      const id = '1';
      const updateTransactionDto: UpdateTransactionDto = {
        // Add your data here
      };
      jest.spyOn(service, 'update').mockReturnValueOnce({});
      controller.update(id, updateTransactionDto);
      expect(service.update).toHaveBeenCalledWith(+id, updateTransactionDto);
    });
  });

  describe('remove', () => {
    it('should call service.remove with the provided id', () => {
      const id = '1';
      jest.spyOn(service, 'remove').mockReturnValueOnce({});
      controller.remove(id);
      expect(service.remove).toHaveBeenCalledWith(+id);
    });
  });

  describe('getPrData', () => {
    it('should handle pull request event and log data', () => {
      const req = {
        headers: {
          'x-github-event': 'pull_request',
        },
        body: {
          // Add your data here
        },
      };
      const consoleSpy = jest.spyOn(console, 'log');
      controller.getPrData(req as any);
      expect(consoleSpy).toHaveBeenCalled();
    });
  });
});