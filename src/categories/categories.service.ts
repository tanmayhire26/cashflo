import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoriesRepository } from './repository/categories.repository';
import mongoose from 'mongoose';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoriesRepo: CategoriesRepository) {}
  async create(createCategoryDto: CreateCategoryDto) {
    createCategoryDto['parent_category_id'] = new mongoose.Types.ObjectId(
      createCategoryDto['parent_category_id'],
    );
    const category = await this.categoriesRepo.create(createCategoryDto);
    return category;
  }

  async findAll() {
    const categories = await this.categoriesRepo.find();
    console.log(categories);
    return categories;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  async remove(id: number) {
    const response = `This action removes a #${id} category`;
    console.log(response);
    return response;
  }
}