import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getUsers(){
    const users = await this.appService.getUsers();
    return users;
  }

  @Post()
  async createUser(@Body() data:object){
    const user = await this.appService.createUser(data);
    return user;
  }
}
