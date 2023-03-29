import { Injectable } from '@nestjs/common'
import { Request } from 'express'
import { createCategoryDto } from './dto/create.category.dto'
import { updateCategoryDto } from './dto/update.category.dto'

@Injectable()

export class CategoryService{

    categories(){
        return { category:"Electronics" }
    }

    show(categoryId: number){
        return categoryId
    }

    store(body:createCategoryDto){
        return body
    }

    update(body:updateCategoryDto, categoryId: number){
        return { body, param: categoryId}
    }

    delete(categoryId: number){
        return categoryId
    }
}