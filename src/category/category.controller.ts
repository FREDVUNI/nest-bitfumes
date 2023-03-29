import { Controller,Get,Patch,Post,Delete,Param,Body } from '@nestjs/common'
import { CategoryService } from './category.service';
import { Request } from 'express';
import { createCategoryDto } from './dto/create.category.dto';
import { updateCategoryDto } from './dto/update.category.dto';

@Controller('category')
export class CategoryController{
    constructor(private categoryService:CategoryService){}

    @Get()
    getCategories(){
        return this.categoryService.categories()
    }

    @Get('/:categoryId')
    getCategory(@Param() param:{ categoryId:number }){
        return this.categoryService.show(param)
    }

    @Post()
    createCategory(@Body() body:createCategoryDto){
        return this.categoryService.store(body)
    }

    @Patch('/:categoryId')
    updateCategory(@Body() body:updateCategoryDto, @Param() param:{ categoryId:number }){
        return this.categoryService.update(body,param)
    }

    @Delete('/:categoryId')
    deleteCategory(@Param() param:{ categoryId:number }){
        return this.categoryService.delete(param)
    }
}