import { Injectable } from '@nestjs/common'
import { Request } from 'express'
import { createCategoryDto } from './dto/create.category.dto'
import { updateCategoryDto } from './dto/update.category.dto'
import { Category } from './entity/category.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()

export class CategoryService{
    constructor(
        @InjectRepository(Category)
        private categoryRepository: Repository<Category>
    ){}
    categories():Promise<Category[]>{
        return this.categoryRepository.find()
    }

    show(categoryId: number){
        return this.categoryRepository.findOne({where:{id:categoryId}})
    }

    store(createCategoryDto:createCategoryDto){
        return this.categoryRepository.save(createCategoryDto)
    }

    update(updateCategoryDto:updateCategoryDto, categoryId: number){
        return this.categoryRepository.update(categoryId,updateCategoryDto)
    }

    delete(categoryId: number){
        return this.categoryRepository.delete(categoryId)
    }
}