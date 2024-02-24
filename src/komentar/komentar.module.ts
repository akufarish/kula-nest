import { Module } from '@nestjs/common';
import { KomentarService } from './komentar.service';
import { KomentarController } from './komentar.controller';

@Module({
  providers: [KomentarService],
  controllers: [KomentarController]
})
export class KomentarModule {}
