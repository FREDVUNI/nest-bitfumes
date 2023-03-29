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
  show(@Param() param: { productId: number }) {
    return param;
  }
  update(@Body() body: updateProductDto, @Param() param: { productId: number }) {
    return { body, params: param };
  }
  delete(@Param() param: { productId: number }) {
    return param;
  }
}
