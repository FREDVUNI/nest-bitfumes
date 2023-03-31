import { Injectable, Body, Param } from '@nestjs/common';
import { Request } from 'express';
import { createProductDto } from './dto/create.product.dto';
import { updateProductDto } from './dto/update.product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { Product } from './entity/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}
  create(@Body() createProductDto: createProductDto) {
    return this.productRepository.save(createProductDto);
  }
  get():Promise<Product[]> {
    return this.productRepository.find();
  }
  show(productId: number) {
    return this.productRepository.findOne({where: {id:productId}});
  }
  update(@Body() updateProductDto: updateProductDto, productId: number) {
    return this.productRepository.update(productId,updateProductDto);
  }
  delete(productId: number) {
    return this.productRepository.delete(productId);
  }
}
