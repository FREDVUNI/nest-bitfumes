import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class AuthDto{
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email:string;

    @IsStrongPassword()
    @IsString()
    @IsNotEmpty()
    password:string;
}