import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesService } from './categories.service';
import { CategoriesRepository } from './repository/categories.repository';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ObjectId } from 'mongodb';

const mockCategoriesRepository = {
  create: jest.fn(),
  find: jest.fn(),
};

describe('CategoriesService', () => {
  let service: CategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesService,
        {
          provide: CategoriesRepository,
          useValue: mockCategoriesRepository,
        },
      ],
    }).compile();

    service = module.get<CategoriesService>(CategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new category', async () => {
      const createCategoryDto: CreateCategoryDto = {
        name: 'Category 1',
        parent_category_id: '64e543f5338b217c806b3b97',
      };
      const newCategory = {
        _id: new ObjectId(),
        ...createCategoryDto,
      };
      mockCategoriesRepository.create.mockResolvedValue(newCategory);
      const result = await service.create(createCategoryDto);
      expect(result).toEqual(newCategory);
      expect(mockCategoriesRepository.create).toHaveBeenCalledWith(
        expect.objectContaining({
          parent_category_id: new ObjectId(
            createCategoryDto['parent_category_id'],
          ),
        }),
      );
    });
  });

  describe('findAll', () => {
    it('should return all categories', async () => {
      const categories = [
        { _id: new ObjectId(), name: 'Category 1' },
        { _id: new ObjectId(), name: 'Category 2' },
      ];
      mockCategoriesRepository.find.mockResolvedValue(categories);
      const result = await service.findAll();
      expect(result).toEqual(categories);
      expect(mockCategoriesRepository.find).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a category by id', () => {
      const id = 1;
      const result = service.findOne(id);
      expect(result).toEqual(`This action returns a #${id} category`);
    });
  });

  describe('update', () => {
    it('should update a category by id', () => {
      const id = 1;
      const updateCategoryDto: UpdateCategoryDto = {
        name: 'Updated Category',
      };
      const result = service.update(id, updateCategoryDto);
      expect(result).toEqual(`This action updates a #${id} category`);
    });
  });

  describe('remove', () => {
    it('should remove a category by id', () => {
      const id = 1;
      const result = service.remove(id);
      expect(result).toEqual(`This action removes a #${id} category`);
    });
  });
});