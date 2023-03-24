import { Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor (private userService:UserService){}

    @Get()
    getUsers(){
        return this.userService.get()    
    }

    @Post()
    createUser(@Req() req:Request){
        return this.userService.store(req)
    }

    @Get('/:userId')
    getUser(@Param() param: {userId: number}){
        return this.userService.user(param)
    }

    @Patch('/:userId')
    updateUser(@Req() req:Request, @Param() param:{ userId:number }){
        return this.userService.update(req,param)
    }

    @Delete('/:userId')
    deleteUser(@Param() param:{userId:number}){
        return this.userService.delete(param)
    }

}
