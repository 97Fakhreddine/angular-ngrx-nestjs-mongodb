import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Product } from 'src/db/shcema/product.schema';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_MODEL')
    private productModel: Model<Product>,
  ) {}

  async create(newProduct: Product): Promise<Error | string> {
    try {
      if (newProduct) {
        const createdProduct = await new this.productModel(newProduct);
        await createdProduct.save();
        return 'done';
      }
      return new Error();
    } catch (error) {
      return new Error(error.message);
    }
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }
  async findById(id: string): Promise<Error | Product> {
    try {
      const oneProduct = await this.productModel.findById(id);
      return oneProduct;
    } catch (error) {
      return new Error(error.message);
    }
  }
  async updateOneProduct(updatedProduct, id): Promise<Error | string> {
    try {
      await this.productModel.findByIdAndUpdate(id, updatedProduct);
      return 'updated';
    } catch (error) {
      return new Error(error.message);
    }
  }

  async deleteOneProduct(id: string): Promise<Error | Product> {
    try {
      return await this.productModel.findByIdAndRemove(id);
    } catch (error) {
      return new Error(error.message);
    }
  }

  async createMany(newListOfProducts): Promise<Error | string> {
    try {
      await this.productModel.insertMany(newListOfProducts);
      return 'done';
    } catch (error) {
      return new Error(error.message);
    }
  }
}
