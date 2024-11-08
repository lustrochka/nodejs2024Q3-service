import {
  Injectable,
  BadRequestException,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { User } from './user.interface';
import { validate } from 'uuid';
import { UserDto } from './user.dto';
import { plainToClass } from 'class-transformer';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';
import { v4 } from 'uuid';

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
    return this.users.map((user) => plainToClass(UserDto, user));
  }

  getUser(id: string): User {
    if (!validate(id)) throw new BadRequestException('Invalid id');
    const targetUser = this.users.find((user) => user.id === id);
    if (!targetUser) throw new NotFoundException('User does not exist');
    const userDto = plainToClass(UserDto, targetUser);
    return userDto;
  }

  createUser(CreateUserDto: CreateUserDto): User {
    const { login, password } = CreateUserDto;
    const newUser: User = {
      id: v4(),
      login,
      password,
      version: 1,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    this.users.push(newUser);

    const userDto = plainToClass(UserDto, newUser);
    return userDto;
  }

  updateUser(updateUserDto: UpdateUserDto, id: string) {
    const { oldPassword, newPassword } = updateUserDto;
    if (!validate(id)) throw new BadRequestException('Invalid id');
    const targetUser = this.users.find((user) => user.id === id);
    if (!targetUser) throw new NotFoundException('User does not exist');
    if (targetUser.password !== oldPassword)
      throw new ForbiddenException('Wrong old password');

    targetUser.password = newPassword;
    targetUser.version++;
    targetUser.updatedAt = Date.now();

    const userDto = plainToClass(UserDto, targetUser);
    return userDto;
  }

  deleteUser(id: string) {
    if (!validate(id)) throw new BadRequestException('Invalid id');
    const targetUser = this.users.findIndex((user) => user.id === id);
    if (targetUser === -1) throw new NotFoundException('User does not exist');
    this.users.splice(targetUser, 1);
  }
}
