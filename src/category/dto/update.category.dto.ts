import { IsString,IsNotEmpty } from "class-validator";

export class updateCategoryDto{
    @IsNotEmpty()
    @IsString()
    category: string;
}