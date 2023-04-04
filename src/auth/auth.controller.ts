import { Controller,Post,Body } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')

export class AuthController {
    constructor(private userService:UserService){}
    @Post('/login')
    async login(@Body() LoginDto:LoginDto){
        const user = await this.userService.findEmail(LoginDto.email)

        if(user){
            if(user.password === LoginDto.password){
                return user
            }
        }
        return "Unauthenticated"
    }
}
