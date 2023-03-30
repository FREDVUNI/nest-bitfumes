import { IsString,IsNotEmpty } from "class-validator";

export class createCategoryDto{
    @IsNotEmpty()
    @IsString()
    category: string;
}