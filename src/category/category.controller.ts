import { Controller,Get,Patch,Post,Delete,Param,Req } from '@nestjs/common'
import { CategoryService } from './category.service';
import { Request } from 'express';

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
    createCategory(@Req() req:Request){
        return this.categoryService.store(req)
    }

    @Patch('/:categoryId')
    updateCategory(@Req() req:Request, @Param() param:{ categoryId:number }){
        return this.categoryService.update(req,param)
    }

    @Delete('/:categoryId')
    deleteCategory(@Param() param:{ categoryId:number }){
        return this.categoryService.delete(param)
    }
}