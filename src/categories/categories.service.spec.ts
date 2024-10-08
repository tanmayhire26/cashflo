import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesService } from './categories.service';
import { CategoriesRepository } from './repository/categories.repository';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { getModelToken } from '@nestjs/mongoose';
import { Category, CategorySchema } from './entities/category.entity';
import { Model } from 'mongoose';

const mockCategory = {
  _id: new mongoose.Types.ObjectId(),
  name: 'Category Name',
  description: 'Category Description',
};

const mockCategories = [
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Category Name 1',
    description: 'Category Description 1',
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Category Name 2',
    description: 'Category Description 2',
  },
];

const mockCreateCategoryDto: CreateCategoryDto = {
  name: 'Category Name',
  description: 'Category Description',
  parent_category_id: '64d23b256222d4609592319e',
};

const mockUpdateCategoryDto: UpdateCategoryDto = {
  name: 'Updated Category Name',
  description: 'Updated Category Description',
};

describe('CategoriesService', () => {
  let service: CategoriesService;
  let categoriesRepository: CategoriesRepository;
  let categoryModel: Model<Category>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesService,
        {
          provide: CategoriesRepository,
          useValue: {
            create: jest.fn().mockResolvedValue(mockCategory),
            find: jest.fn().mockResolvedValue(mockCategories),
            findById: jest.fn().mockResolvedValue(mockCategory),
            update: jest.fn().mockResolvedValue(mockCategory),
            delete: jest.fn().mockResolvedValue(mockCategory),
          },
        },
        {
          provide: getModelToken(Category.name),
          useValue: {
            new: jest.fn().mockReturnValue({
              save: jest.fn().mockResolvedValue(mockCategory),
            }),
          },
        },
      ],
    }).compile();

    service = module.get<CategoriesService>(CategoriesService);
    categoriesRepository = module.get<CategoriesRepository>(
      CategoriesRepository,
    );
    categoryModel = module.get<Model<Category>>(getModelToken(Category.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new category', async () => {
      const category = await service.create(mockCreateCategoryDto);
      expect(categoriesRepository.create).toHaveBeenCalledWith(
        mockCreateCategoryDto,
      );
      expect(category).toEqual(mockCategory);
    });
  });

  describe('findAll', () => {
    it('should return all categories', async () => {
      const categories = await service.findAll();
      expect(categoriesRepository.find).toHaveBeenCalled();
      expect(categories).toEqual(mockCategories);
    });
  });

  describe('findOne', () => {
    it('should return a specific category', async () => {
      const id = '1';
      const category = await service.findOne(id);
      expect(categoriesRepository.findById).toHaveBeenCalledWith(id);
      expect(category).toEqual(`This action returns a #${id} category`);
    });
  });

  describe('update', () => {
    it('should update a category', async () => {
      const id = 1;
      const updatedCategory = await service.update(
        id,
        mockUpdateCategoryDto,
      );
      expect(categoriesRepository.update).toHaveBeenCalledWith(
        id,
        mockUpdateCategoryDto,
      );
      expect(updatedCategory).toEqual(`This action updates a #${id} category`);
    });
  });

  describe('remove', () => {
    it('should remove a category', async () => {
      const id = 1;
      const removedCategory = await service.remove(id);
      expect(categoriesRepository.delete).toHaveBeenCalledWith(id);
      expect(removedCategory).toEqual(`This action removes a #${id} category`);
    });
  });
});