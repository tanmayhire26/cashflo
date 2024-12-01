import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesService } from './categories.service';
import { CategoriesRepository } from './repository/categories.repository';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { getModelToken } from '@nestjs/mongoose';
import { Category, CategorySchema } from './schemas/category.schema';
import { Model } from 'mongoose';

const mockCategoriesRepository = {
  create: jest.fn().mockResolvedValue({
    _id: 'test_id',
    name: 'Test Category',
    description: 'Test Description',
    parent_category_id: 'parent_id',
  }),
  find: jest.fn().mockResolvedValue([
    {
      _id: 'test_id',
      name: 'Test Category',
      description: 'Test Description',
      parent_category_id: 'parent_id',
    },
  ]),
};

describe('CategoriesService', () => {
  let service: CategoriesService;
  let categoryModel: Model<Category>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesService,
        {
          provide: CategoriesRepository,
          useValue: mockCategoriesRepository,
        },
        {
          provide: getModelToken(Category.name),
          useValue: {
            create: jest.fn().mockResolvedValue({
              _id: 'test_id',
              name: 'Test Category',
              description: 'Test Description',
              parent_category_id: 'parent_id',
            }),
            find: jest.fn().mockResolvedValue([
              {
                _id: 'test_id',
                name: 'Test Category',
                description: 'Test Description',
                parent_category_id: 'parent_id',
              },
            ]),
          },
        },
      ],
    }).compile();

    service = module.get<CategoriesService>(CategoriesService);
    categoryModel = module.get<Model<Category>>(getModelToken(Category.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new category', async () => {
      const createCategoryDto: CreateCategoryDto = {
        name: 'Test Category',
        description: 'Test Description',
        parent_category_id: 'parent_id',
      };
      const category = await service.create(createCategoryDto);
      expect(category).toEqual({
        _id: 'test_id',
        name: 'Test Category',
        description: 'Test Description',
        parent_category_id: 'parent_id',
      });
      expect(mockCategoriesRepository.create).toHaveBeenCalledWith(
        createCategoryDto,
      );
      expect(categoryModel.create).toHaveBeenCalledWith(createCategoryDto);
    });
  });

  describe('findAll', () => {
    it('should return all categories', async () => {
      const categories = await service.findAll();
      expect(categories).toEqual([
        {
          _id: 'test_id',
          name: 'Test Category',
          description: 'Test Description',
          parent_category_id: 'parent_id',
        },
      ]);
      expect(mockCategoriesRepository.find).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a category by id', () => {
      const id = 1;
      const result = service.findOne(id);
      expect(result).toBe(`This action returns a #${id} category`);
    });
  });

  describe('update', () => {
    it('should update a category', () => {
      const id = 1;
      const updateCategoryDto: UpdateCategoryDto = {
        name: 'Updated Category',
      };
      const result = service.update(id, updateCategoryDto);
      expect(result).toBe(`This action updates a #${id} category`);
    });
  });

  describe('remove', () => {
    it('should remove a category', () => {
      const id = 1;
      const result = service.remove(id);
      expect(result).toBe(`This action removes a #${id} category`);
    });
  });
});