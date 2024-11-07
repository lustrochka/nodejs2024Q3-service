import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './types';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers(): User[] {
    return this.appService.getUsers();
  }
}
