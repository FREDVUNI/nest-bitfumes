import { Controller, Delete, Get, Param, Patch, Post, Req, Body, ParseIntPipe } from '@nestjs/common';
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
    getUser(@Param('userId',ParseIntPipe) userId: number){
        return this.userService.user(userId)
    }

    @Patch('/:userId')
    updateUser(@Body() body:updateUserDto, @Param('userId',ParseIntPipe) userId:number){
        return this.userService.update(body,userId)
    }

    @Delete('/:userId')
    deleteUser(@Param() param:{userId:number}){
        return this.userService.delete(param)
    }

}
