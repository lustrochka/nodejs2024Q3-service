import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { User } from './user.interface';
import { validate } from 'uuid';

@Injectable()
export class UserService {
  private users = [
    {
      id: '0f57daa0-7cde-4fc0-80b6-6d9c50c42851',
      login: 'John Doe',
      password: 'aaa',
      version: 1,
      createdAt: 1678539505000,
      updatedAt: 1678539505111,
    },
    {
      id: 'db7e0e1b-c56e-43c4-9018-d7c6183eb2a4',
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

  getUser(id: string): User {
    if (!validate(id)) throw new BadRequestException('Invalid id');
    const targetUser = this.users.find((user) => user.id === id);
    if (!targetUser) throw new NotFoundException('User does not exist');
    return targetUser;
  }
}
