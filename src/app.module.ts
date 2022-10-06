import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';

@Module({
  
  imports: [
    
    UserModule],
  controllers: [],
  providers: [],
  
})
export class AppModule {}
