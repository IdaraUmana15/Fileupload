import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule} from '@nestjs/typeorm'
import { User } from 'src/entities/userEntity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    MulterModule.register({
      dest:'./upload'
    }),
   
  TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'blog',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'files')
    }),],
    
    
  providers: [UserService],
  controllers:[UserController]
})
export class UserModule {}
