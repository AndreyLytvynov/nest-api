import {
  IsEmail,
  // IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
// import { Role } from '../enum/role.enum';

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

  // @IsEnum(Role, { each: true })
  // readonly role: Array<string>;
}
