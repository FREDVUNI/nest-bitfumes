import { IsString } from "class-validator/types/decorator/decorators";

export class updateCategoryDto{
    @IsString()
    category: string;
}