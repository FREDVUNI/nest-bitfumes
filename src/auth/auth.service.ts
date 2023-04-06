import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}
  async validate_user(email: string, password: string) {
    const user = await this.userService.findEmail(email);

    if (user) {
      if (user && user.password === password) {
        return user;
      }
    }
    return null;
  }
}
