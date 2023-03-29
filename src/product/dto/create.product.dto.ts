import { IsNotEmpty, IsString } from "class-validator";

export class createProductDto{
    @IsString()
    @IsNotEmpty()
    product:string;

    @IsString()
    @IsNotEmpty()
    price:string;

    @IsString()
    @IsNotEmpty()
    details:string;
}