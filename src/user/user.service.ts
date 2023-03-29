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

    user(userId: number){
        return userId
    }

    update(body:updateUserDto,userId:number){
        return {body,param:userId}
    }

    delete(userId:number){
        return userId
    }
}
