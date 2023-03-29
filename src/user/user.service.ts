import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { createUserDto } from './dto/create.user.dto';
import { updateUserDto } from './dto/update.user.dto';

@Injectable()
export class UserService {

    get(){
        return { name:"vuni",email:"fredvuni809@gmail.com" }
    }

    store(body:createUserDto){
        return body
    }

    user(param: {userId:number}){
        return param
    }

    update(body:updateUserDto,param:{userId:number}){
        return {body,param:param}
    }

    delete(params: {userId:number}){
        return params
    }
}
