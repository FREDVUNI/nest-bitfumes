import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [
    AppController,
    UserController,
    CategoryController,
    ProductController,
  ],
  providers: [AppService, UserService, CategoryService, ProductService],

  imports: [
    UserModule,
    ProductModule,
    CategoryModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest',
      entities: [],
      synchronize: true, //should not be used in production or you'll lose the data
    }),
  ],
})
export class AppModule {}
