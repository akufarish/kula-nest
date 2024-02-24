import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async doLogin(dto: AuthDto) {
    try {
      const user = await this.prisma.user.findFirst({
        where: {
          username: dto.username,
        },
      });

      if (!user) {
        throw new NotFoundException('User not registered');
      }

      const password = await argon.verify(user.password, dto.password);

      if (!password) {
        throw new ForbiddenException('Password incorrect');
      }

      const payload = { sub: user.id, username: user.username };

      user.token = await this.jwtService.signAsync(payload);

      return {
        user: user,
      };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new ForbiddenException(error);
      }
    }
  }

  async doRegister(dto: AuthDto) {
    const hash = await argon.hash(dto.password);

    try {
      const user = await this.prisma.user.create({
        data: {
          username: dto.username,
          email: dto.email,
          password: hash,
          kelas: dto.kelas,
        },
        select: {
          id: true,
          username: true,
          email: true,
          kelas: true,
          token: true,
        },
      });

      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        console.log(error);
        throw new ForbiddenException(error);
      }
    }
  }
}
