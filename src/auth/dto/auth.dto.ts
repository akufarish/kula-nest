import { IsNotEmpty } from 'class-validator';

export class AuthDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  kelas: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
