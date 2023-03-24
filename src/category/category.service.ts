import { Injectable,Param,Req } from '@nestjs/common'
import { Request } from 'express'

@Injectable()

export class CategoryService{

    categories(){
        return { category:"Electronics" }
    }

    show(@Param() param:{ categoryId: number }){
        return param
    }

    store(@Req() req:Request){
        return req.body
    }

    update(@Req() req:Request, @Param() param:{categoryId:number}){
        return { body:req.body, param: param}
    }

    delete(@Param() param:{categoryId:number}){
        return param
    }
}