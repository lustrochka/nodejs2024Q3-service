import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './types';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers(): User[] {
    return this.appService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.appService.getUser(id);
  }
}
