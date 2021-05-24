import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { Product } from 'src/db/shcema/product.schema';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productRepository: ProductService) {}

  @Get('all')
  async findAll(): Promise<Error | Product[]> {
    return await this.productRepository.findAll();
  }
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Error | Product> {
    return this.productRepository.findById(id);
  }
  @Post()
  async create(@Body() newProduct: Product): Promise<Error | string> {
    return await this.productRepository.create(newProduct);
  }
  @Put(':id')
  async updateOneProduct(
    @Body() updatedProduct: Product,
    @Param('id') id: string,
  ): Promise<Error | string> {
    return this.productRepository.updateOneProduct(updatedProduct, id);
  }

  @Delete(':id')
  async deleteOneProduct(@Param('id') id: string): Promise<Error | Product> {
    return this.productRepository.deleteOneProduct(id);
  }
}
