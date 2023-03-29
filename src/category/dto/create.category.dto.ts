import { IsString } from "class-validator/types/decorator/decorators";

export class createCategoryDto{
    @IsString()
    category: string;
}