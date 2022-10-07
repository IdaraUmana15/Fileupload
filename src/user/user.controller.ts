import { Controller, FileTypeValidator, HttpStatus, MaxFileSizeValidator, ParseFilePipe, Post, Res, UploadedFile, UseInterceptors} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import { UserService } from './user.service';



@Controller('user')
export class UserController {
  // constructor(private readonly userService:UserService){}

    //without validation
//     @Post('upload')
// @UseInterceptors(FileInterceptor('file'))
// uploadFile(@UploadedFile() file: Express.Multer.File) {
//   console.log(file);
// }
// }



//how to validate your files
// @Post('upload')
// @UseInterceptors(FileInterceptor('file'))
// uploadFile(@UploadedFile(
// new ParseFilePipe({
//     validators: [
//       new MaxFileSizeValidator({ maxSize: 10000000 }),
//       new FileTypeValidator({ fileType: 'jpeg' }),
//     ],
//   }),
// )
// file: Express.Multer.File) {
//   // console.log(file)

// }

@Post('upload')
@UseInterceptors(FileInterceptor('image',{
  storage: diskStorage({
    destination: './src/uploadedFiles',
    filename: (req, file, callBack) => {
      //storing the file originalname
      const fileName = path.parse(file.originalname).name.
      replace(/\s/g, '') +Date.now();

      //storing the file extension
const extension = path.parse(file.originalname).ext;
callBack(null, `${fileName}${extension}`);
    }
  })
}))

//sending a response
fileUpload(@Res()res, @UploadedFile(

  //adding validation to the file
  new ParseFilePipe({
      validators: [
          new MaxFileSizeValidator({ maxSize:1000000}),
          new FileTypeValidator({ fileType: 'jpeg'}),
      ],
  }),
)file){
  //returning an HTTP response to the user with the file path
  return res.status(HttpStatus.OK).json({
      success:true,
      data: file.path
  })
}




}
