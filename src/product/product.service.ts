import { Injectable,Body,Param } from '@nestjs/common';
import { Request } from 'express';
import { createProductDto } from './dto/create.product.dto';
import { updateProductDto } from './dto/update.product.dto';

@Injectable()
export class ProductService {
  create(@Body() body: createProductDto) {
    return body;
  }
  get() {
    return { product: 'Refrigerator' };
  }
  show(productId: number) {
    return productId;
  }
  update(@Body() body: updateProductDto, productId: number) {
    return { body, params: productId };
  }
  delete(productId: number) {
    return productId;
  }
}
