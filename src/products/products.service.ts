import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Product } from './schemas/product.schemas';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private productModel: Model<Product>,
  ) {}

  async createProduct(createProductDto: CreateProductDto) {
    const product = await this.productModel.create(createProductDto);
    return product;
  }

  async getAllProduct() {
    const product = await this.productModel.find();
    return product;
  }

  async getProductsByStatus(status: string) {
    const products = await this.productModel.find({ status });
    return products;
  }

  async changeProduct(id: string, updateProductDto: UpdateProductDto) {
    const changeResult = await this.productModel.updateOne(
      { _id: id },
      updateProductDto,
    );

    if (changeResult.modifiedCount === 1) {
      const updatedProduct = await this.productModel.findOne({ _id: id });
      return updatedProduct;
    } else {
      return { message: 'Ничего не было обновлено' };
    }
  }
}
