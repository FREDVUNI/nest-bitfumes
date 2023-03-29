import {
  Controller,
  Param,
  Post,
  Req,
  Get,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Request } from 'express';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Post()
  createProduct(@Req() req: Request) {
    return this.productService.create(req);
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
  updateProduct(@Req() req: Request, @Param() param: { productId: number }) {
    return this.productService.update(req, param);
  }
  @Delete('/:productId')
  deleteProduct(@Param() param: { productId: number }) {
    return this.productService.delete(param);
  }
}
