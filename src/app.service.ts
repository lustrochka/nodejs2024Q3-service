import { Injectable } from '@nestjs/common';
import { User } from './types';

@Injectable()
export class AppService {
  private users = [
    {
      id: '1',
      login: 'John Doe',
      password: 'aaa',
      version: 1,
      createdAt: 1678539505000,
      updatedAt: 1678539505111,
    },
    {
      id: '2',
      login: 'Jane Doe',
      password: 'zzz',
      version: 2,
      createdAt: 1678539505111,
      updatedAt: 1678539505111,
    },
  ];

  getUsers(): User[] {
    return this.users;
  }
}
