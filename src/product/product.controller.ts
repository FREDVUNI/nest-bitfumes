import {
  Controller,
  Param,
  Post,
  Req,
  Get,
  Patch,
  Delete,
  Body,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Request } from 'express';
import { createProductDto } from './dto/create.product.dto';
import { updateProductDto } from './dto/update.product.dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Post()
  createProduct(@Body() body: createProductDto) {
    return this.productService.create(body);
  }
  @Get()
  getProducts() {
    return this.productService.get();
  }
  @Get('/:productId')
  getProduct(@Param() param: { productId: number }) {
    return this.productService.show(param);
  }
  @Patch('/:productId')
  updateProduct(@Req() body: updateProductDto, @Param() param: { productId: number }) {
    return this.productService.update(body, param);
  }
  @Delete('/:productId')
  deleteProduct(@Param() param: { productId: number }) {
    return this.productService.delete(param);
  }
}
