import { IsString,IsNotEmpty } from "class-validator/types/decorator/decorators";

export class updateCategoryDto{
    @IsNotEmpty()
    @IsString()
    category: string;
}