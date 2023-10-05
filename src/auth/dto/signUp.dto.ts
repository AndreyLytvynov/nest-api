import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
export class SignUpDto {
  @IsString()
  @MinLength(2)
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  readonly password: string;
}
