import { IsString,IsNotEmpty } from "class-validator/types/decorator/decorators";

export class createCategoryDto{
    @IsNotEmpty()
    @IsString()
    category: string;
}