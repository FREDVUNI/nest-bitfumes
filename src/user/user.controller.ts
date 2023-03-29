import { Controller, Delete, Get, Param, Patch, Post, Req, Body } from '@nestjs/common';
import { Request } from 'express';
import { createUserDto } from './dto/create.user.dto';
import { updateUserDto } from './dto/update.user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor (private userService:UserService){}

    @Get()
    getUsers(){
        return this.userService.get()    
    }

    @Post()
    createUser(@Body() body:createUserDto){
        return this.userService.store(body)
    }

    @Get('/:userId')
    getUser(@Param() param: {userId: number}){
        return this.userService.user(param)
    }

    @Patch('/:userId')
    updateUser(@Body() body:updateUserDto, @Param() param:{ userId:number }){
        return this.userService.update(body,param)
    }

    @Delete('/:userId')
    deleteUser(@Param() param:{userId:number}){
        return this.userService.delete(param)
    }

}
