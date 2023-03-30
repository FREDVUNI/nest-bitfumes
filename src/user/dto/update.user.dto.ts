import { IsString,IsEmail } from "class-validator";

export class updateUserDto{
    @IsString()
    username:string;

    @IsEmail()
    email:string;

    @IsString()
    password:string;
}