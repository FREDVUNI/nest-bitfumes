import { Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('user')
export class UserController {

    @Get()
    getUsers(){
        return { name:"vuni",email:"fredvuni809@gmail.com" }    
    }

    @Post()
    createUser(@Req() req:Request){
        return req.body
    }

    @Get('/:userId')
    getUser(@Param() params: {userId: Number}){
        return params
    }

    @Patch('/:userId')
    updateUser(@Req() req:Request){
        return req.body
    }

    @Delete('/:userId')
    deleteUser(@Param() params:{userId:Number}){
        return params
    }

}
