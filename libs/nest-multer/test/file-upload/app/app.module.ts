import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { FastifyMulterModule } from '@app/nest-multer/nest-multer.module';

@Module({
  imports: [FastifyMulterModule],
  controllers: [AppController],
})
export class AppModule {}
