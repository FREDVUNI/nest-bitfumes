import { Controller,Post,Body } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')

export class AuthController {
    constructor(){}
    @Post('/login')
    async login(@Body() AuthDto:any){
        return
    }
}
