import { Injectable, Param, Req } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class ProductService {
  create(@Req() req: Request) {
    return req.body;
  }
  get() {
    return { product: 'Refrigerator' };
  }
  show(@Param() param: { productId: number }) {
    return param;
  }
  update(@Req() req: Request, @Param() param: { productId: number }) {
    return { body: req.body, params: param };
  }
  delete(@Param() param: { productId: number }) {
    return param;
  }
}
