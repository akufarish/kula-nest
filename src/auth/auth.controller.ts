import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @HttpCode(200)
  Login(@Body() dto: AuthDto) {
    return this.authService.doLogin(dto);
  }

  @Post('register')
  @HttpCode(201)
  Register(@Body() dto: AuthDto) {
    return this.authService.doRegister(dto);
  }
}
