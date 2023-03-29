import { Controller,Get,Patch,Post,Delete,Param,Body, ParseIntPipe } from '@nestjs/common'
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
    getCategory(@Param('categoryId',ParseIntPipe) categoryId:number){
        return this.categoryService.show(categoryId)
    }

    @Post()
    createCategory(@Body() body:createCategoryDto){
        return this.categoryService.store(body)
    }

    @Patch('/:categoryId')
    updateCategory(@Body() body:updateCategoryDto, @Param('categoryId',ParseIntPipe) categoryId:number){
        return this.categoryService.update(body,categoryId)
    }

    @Delete('/:categoryId')
    deleteCategory(@Param('categoryId',ParseIntPipe) categoryId:number){
        return this.categoryService.delete(categoryId)
    }
}