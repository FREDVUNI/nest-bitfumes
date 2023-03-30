import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { User } from './user/entity/user.entity';
import { Category } from './category/entity/category.entity';

@Module({
  controllers: [
    AppController,
  ],
  providers:[AppService],
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
      entities: [User,Category],
      synchronize: true, //should not be used in production or you'll lose the data
    }),
  ],
})
export class AppModule {}
