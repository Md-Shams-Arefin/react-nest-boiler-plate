import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class AppService {

  constructor(@InjectRepository(User) private userRipo:Repository<User>){}

  getUsers(){
    return this.userRipo.find();
  }

  createUser(data){
    const user = this.userRipo.create(data);
    return this.userRipo.save(user);
  }
}
