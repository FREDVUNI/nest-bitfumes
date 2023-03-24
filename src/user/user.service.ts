import { Injectable,Param } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class UserService {

    get(){
        return { name:"vuni",email:"fredvuni809@gmail.com" }
    }

    store(req:Request){
        return req.body
    }

    user(param: {userId:number}){
        return param
    }

    update(req:Request,param:{userId:number}){
        return {body:req.body,param:param}
    }

    delete(params: {userId:number}){
        return params
    }
}
