import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Categories } from '../schemas/categories.schema';
import { CreateCategoryDto } from '../dto/create-category.dto';

@Injectable()
export class CategoriesRepository {
  constructor(
    @InjectModel('Categories')
    private readonly categoriesModel: Model<Categories>,
  ) {}

  async create(createDto: CreateCategoryDto) {
    const category = new this.categoriesModel(createDto);
    const savedCategory = await category.save();
    return savedCategory;
  }

  async find() {
    const categories = await this.categoriesModel.find();
    return categories;
  }
}
