import { IsString } from 'class-validator';

export class updateProductDto {
  @IsString()
  product: string;

  @IsString()
  category: string;

  @IsString()
  price: number;

  @IsString()
  description: string;
}
