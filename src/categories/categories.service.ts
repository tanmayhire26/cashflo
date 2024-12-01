import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoriesRepository } from './repository/categories.repository';
import { ObjectId } from 'mongodb';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoriesRepo: CategoriesRepository) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const { parent_category_id, ...rest } = createCategoryDto;
    const parentCategoryId = parent_category_id ? new ObjectId(parent_category_id) : undefined;
    const category = await this.categoriesRepo.create({ ...rest, parent_category_id: parentCategoryId });
    return category;
  }

  async findAll() {
    return await this.categoriesRepo.find();
  }

  findOne(id: string) {
    return this.categoriesRepo.findById(id);
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    await this.categoriesRepo.update(id, updateCategoryDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.categoriesRepo.remove(id);
  }
}