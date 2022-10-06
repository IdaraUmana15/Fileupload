import { Controller, FileTypeValidator, MaxFileSizeValidator, ParseFilePipe, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';


@Controller('user')
export class UserController {
UserService: any;


    //without validation
//     @Post('upload')
// @UseInterceptors(FileInterceptor('file'))
// uploadFile(@UploadedFile() file: Express.Multer.File) {
//   console.log(file);
// }
// }



//how to validate your files
@Post('upload')
@UseInterceptors(FileInterceptor('file',{
  storage:diskStorage({})
}))
uploadFile(@UploadedFile(
new ParseFilePipe({
    validators: [
      new MaxFileSizeValidator({ maxSize: 10000000 }),
      new FileTypeValidator({ fileType: 'jpeg' }),
    ],
  }),
)
file: Express.Multer.File) {
  // console.log(file)
  return this.UserService.saveFile(file);
}

}
