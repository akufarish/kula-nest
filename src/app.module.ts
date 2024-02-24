import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProjectModule } from './project/project.module';
import { PrismaModule } from './prisma/prisma.module';
import { KomentarModule } from './komentar/komentar.module';
import { ToolsModule } from './tools/tools.module';
import { GambarController } from './gambar/gambar.controller';
import { GambarService } from './gambar/gambar.service';
import { GambarController } from './gambar/gambar.controller';

@Module({
  imports: [AuthModule, UserModule, ProjectModule, PrismaModule, KomentarModule, ToolsModule],
  controllers: [AppController, GambarController],
  providers: [AppService, GambarService],
})
export class AppModule {}
