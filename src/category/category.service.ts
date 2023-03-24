import { Injectable } from '@nestjs/common'
import { Request } from 'express'

@Injectable()

export class CategoryService{

    categories(){
        return { category:"Electronics" }
    }

    show(param:{ categoryId: number }){
        return param
    }

    store(req:Request){
        return req.body
    }

    update(req:Request, param:{categoryId:number}){
        return { body:req.body, param: param}
    }

    delete(param:{categoryId:number}){
        return param
    }
}