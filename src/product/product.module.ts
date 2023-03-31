import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entity/product.entity';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
    controllers:[ProductController],
    providers:[ProductService],
    imports:[TypeOrmModule.forFeature([Product])]
})
export class ProductModule {}
