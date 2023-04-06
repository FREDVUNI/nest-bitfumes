import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async validate_user(email: string, password: string) {
    const user = await this.userService.findEmail(email);

    if (user) {
      if (user && user.password === password) {
        return user;
      }
    }
    return null;
  }

  async login(user:any){
    const payload = { username: user.username,email: user.email, sub: user.id };
    return {
        token: await this.jwtService.signAsync(payload),
      };
  }
}
