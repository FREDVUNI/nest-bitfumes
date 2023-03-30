import { IsString } from "class-validator";

export class updateCategoryDto{
    @IsString()
    category: string;
}