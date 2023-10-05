import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateProductDto {
  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly buyDate: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly status: string;
}