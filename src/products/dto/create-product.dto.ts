import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  readonly productName: string;

  @IsString()
  @IsNotEmpty()
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
