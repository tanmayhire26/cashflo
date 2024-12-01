import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesService } from './categories.service';
import { CategoriesRepository } from './repository/categories.repository';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { getModelToken } from '@nestjs/mongoose';
import { Category, CategorySchema } from './schemas/category.schema';
import { Model } from 'mongoose';

describe('CategoriesService', () => {
  let service: CategoriesService;
  let categoriesRepository: CategoriesRepository;
  let categoryModel: Model<Category>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesService,
        CategoriesRepository,
        {
          provide: getModelToken(Category.name),
          useValue: {
            create: jest.fn().mockResolvedValue({ _id: '123' }),
            find: jest.fn().mockResolvedValue([]),
            findById: jest.fn().mockResolvedValue({ _id: '123' }),
            findByIdAndUpdate: jest
              .fn()
              .mockResolvedValue({ _id: '123' }),
            findByIdAndDelete: jest.fn().mockResolvedValue({ _id: '123' }),
          },
        },
      ],
    }).compile();

    service = module.get<CategoriesService>(CategoriesService);
    categoriesRepository = module.get<CategoriesRepository>(CategoriesRepository);
    categoryModel = module.get<Model<Category>>(getModelToken(Category.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new category', async () => {
      const createCategoryDto: CreateCategoryDto = {
        name: 'Test Category',
        parent_category_id: '123',
      };
      const result = await service.create(createCategoryDto);
      expect(result).toEqual({ _id: '123' });
      expect(categoryModel.create).toHaveBeenCalledWith(createCategoryDto);
    });
  });

  describe('findAll', () => {
    it('should return all categories', async () => {
      const result = await service.findAll();
      expect(result).toEqual([]);
      expect(categoryModel.find).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a category by id', async () => {
      const id = 1;
      const result = await service.findOne(id);
      expect(result).toEqual(`This action returns a #${id} category`);
    });
  });

  describe('update', () => {
    it('should update a category by id', async () => {
      const id = 1;
      const updateCategoryDto: UpdateCategoryDto = {
        name: 'Updated Category',
      };
      const result = await service.update(id, updateCategoryDto);
      expect(result).toEqual(`This action updates a #${id} category`);
      expect(categoryModel.findByIdAndUpdate).toHaveBeenCalledWith(
        id,
        updateCategoryDto,
      );
    });
  });

  describe('remove', () => {
    it('should remove a category by id', async () => {
      const id = 1;
      const result = await service.remove(id);
      expect(result).toEqual(`This action removes a #${id} category`);
      expect(categoryModel.findByIdAndDelete).toHaveBeenCalledWith(id);
    });
  });
});