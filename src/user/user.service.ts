import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createUserDto } from './dto/create.user.dto';
import { updateUserDto } from './dto/update.user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  get(): Promise<User[]> {
    let users = this.userRepository.find();
    return users;
    // return { name:"vuni",email:"fredvuni809@gmail.com" }
  }

  store(createUserDto: createUserDto) {
    return this.userRepository.save(createUserDto);
  }

  user(userId: number) {
    let user = this.userRepository.findOne({ where: { id: userId } });
    return user;
  }

  update(updateUserDto: updateUserDto, userId: number) {
    return this.userRepository.update(updateUserDto, userId);
  }

  delete(userId: number) {
    return this.userRepository.delete(userId);
  }
}
