import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/userEntity';
import { Repository } from 'typeorm';


@Injectable()
export class UserService {
    constructor( @InjectRepository(User) private readonly userRepository: Repository<User>,){}


// async getFiles(): Promise<File[]>{
//     return await this.fileRepository.find();
// }
async saveFile(user:User){
    return await this.userRepository.save(user);

}
// async getFile(id: number): Promise<File> {
//     return this.fileRepository.findOneBy({ id });
//   }

//   async deleteFile(id: number): Promise<void> {
//     await this.fileRepository.delete(id);
//   }
}
