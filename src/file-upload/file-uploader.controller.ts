import { Controller, Get, Post } from '@nestjs/common';
import { ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Files')
@Controller('file-uploader')
export class FileUploaderController {
  constructor() {}

  @Post('/file')
  @ApiOperation({ summary: 'Uploads a single file' })
  @ApiConsumes('multipart/form-data')
  singleFile() {
    return console.log('Hello');
  }

  @Post('/files')
  @ApiOperation({ summary: 'Uploads multiple files' })
  @ApiConsumes('multipart/form-data')
  multipleFiles() {
    return console.log('World');
  }

  @Get('/')
  @ApiOperation({ summary: 'Uploads multiple files' })
  @ApiConsumes('multipart/form-data')
  healthCheck() {
    console.log('World');

    return { success: true };
  }
}
