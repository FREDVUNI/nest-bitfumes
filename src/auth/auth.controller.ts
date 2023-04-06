import { Controller,Post,Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')

export class AuthController {
    constructor(private authService:AuthService){}
    @Post('/login')

    async login(@Body() LoginDto:LoginDto){
        return this.authService.validate_user(LoginDto.email,LoginDto.password)
    }
}
