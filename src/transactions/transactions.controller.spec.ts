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
    transactionsService = module.get(TransactionsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should call transactionsService.create with the correct data', async () => {
      const createTransactionDto: CreateTransactionDto = {
        // ...mock data for CreateTransactionDto
      };
      await controller.create(createTransactionDto);
      expect(transactionsService.create).toHaveBeenCalledWith(
        createTransactionDto,
      );
    });

    it('should return the result of transactionsService.create', async () => {
      const createTransactionDto: CreateTransactionDto = {
        // ...mock data for CreateTransactionDto
      };
      const result = {
        // ...mock result from transactionsService.create
      };
      jest.spyOn(transactionsService, 'create').mockResolvedValue(result);
      expect(await controller.create(createTransactionDto)).toEqual(result);
    });
  });

  describe('findAll', () => {
    it('should call transactionsService.findAll', async () => {
      await controller.findAll();
      expect(transactionsService.findAll).toHaveBeenCalled();
    });

    it('should return the result of transactionsService.findAll', async () => {
      const result = [
        // ...mock result from transactionsService.findAll
      ];
      jest.spyOn(transactionsService, 'findAll').mockResolvedValue(result);
      expect(await controller.findAll()).toEqual(result);
    });
  });

  describe('findOne', () => {
    it('should call transactionsService.findOne with the correct id', () => {
      const id = '1';
      controller.findOne(id);
      expect(transactionsService.findOne).toHaveBeenCalledWith(+id);
    });

    it('should return the result of transactionsService.findOne', () => {
      const id = '1';
      const result = {
        // ...mock result from transactionsService.findOne
      };
      jest.spyOn(transactionsService, 'findOne').mockReturnValue(result);
      expect(controller.findOne(id)).toEqual(result);
    });
  });

  describe('update', () => {
    it('should call transactionsService.update with the correct id and data', () => {
      const id = '1';
      const updateTransactionDto: UpdateTransactionDto = {
        // ...mock data for UpdateTransactionDto
      };
      controller.update(id, updateTransactionDto);
      expect(transactionsService.update).toHaveBeenCalledWith(
        +id,
        updateTransactionDto,
      );
    });

    it('should return the result of transactionsService.update', () => {
      const id = '1';
      const updateTransactionDto: UpdateTransactionDto = {
        // ...mock data for UpdateTransactionDto
      };
      const result = {
        // ...mock result from transactionsService.update
      };
      jest.spyOn(transactionsService, 'update').mockReturnValue(result);
      expect(controller.update(id, updateTransactionDto)).toEqual(result);
    });
  });

  describe('remove', () => {
    it('should call transactionsService.remove with the correct id', () => {
      const id = '1';
      controller.remove(id);
      expect(transactionsService.remove).toHaveBeenCalledWith(+id);
    });
  });

  describe('getPrData', () => {
    it('should handle pull request event data', () => {
      const req = {
        headers: { 'x-github-event': 'pull_request' },
        body: {
          // ...mock pull request data
        },
      };
      controller.getPrData(req as any);
      expect(console.log).toHaveBeenCalled();
    });

    it('should not handle other event types', () => {
      const req = {
        headers: { 'x-github-event': 'push' },
        body: {},
      };
      controller.getPrData(req as any);
      expect(console.log).not.toHaveBeenCalled();
    });
  });
});