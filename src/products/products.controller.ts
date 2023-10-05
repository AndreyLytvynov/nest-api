import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productsService.createProduct(createProductDto);
  }

  @Get()
  GetAllProducts() {
    return this.productsService.getAllProduct();
  }

  @Get(':status')
  GetAllPendingProducts(@Param('status') status: string) {
    return this.productsService.getProductsByStatus(status);
  }

  @Put(':id')
  changeProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.changeProduct(id, updateProductDto);
  }
}
