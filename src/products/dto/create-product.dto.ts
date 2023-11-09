import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  readonly productName: string;

  @IsNotEmpty()
  @IsNumber()
  readonly date: number;

  @IsString()
  @IsNotEmpty()
  readonly status: string;

  @IsString()
  @IsNotEmpty()
  readonly person: string;

  @IsString()
  readonly avatar: string;
}
