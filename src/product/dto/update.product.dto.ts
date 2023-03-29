import { IsNotEmpty, IsString } from "class-validator/types/decorator/decorators";

export class updateProductDto{
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