import { Injectable } from '@nestjs/common'
import { Request } from 'express'
import { createCategoryDto } from './dto/create.category.dto'
import { updateCategoryDto } from './dto/update.category.dto'

@Injectable()

export class CategoryService{

    categories(){
        return { category:"Electronics" }
    }

    show(param:{ categoryId: number }){
        return param
    }

    store(body:createCategoryDto){
        return body
    }

    update(body:updateCategoryDto, param:{categoryId:number}){
        return { body, param: param}
    }

    delete(param:{categoryId:number}){
        return param
    }
}