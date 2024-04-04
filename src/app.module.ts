import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileUploadModule } from './file-upload/file-upload.module';
import { NestMulterModule } from '@app/nest-multer';

@Module({
  imports: [FileUploadModule, NestMulterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
