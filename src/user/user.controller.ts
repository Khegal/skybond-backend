import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';

import { User } from './schema/user.schema';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Get(':userId')
  async getUser(@Param('userId') userId: string): Promise<User> {
    return this.usersService.getUserById(userId);
  }

  @Get("")
  async getUsers(): Promise<User[]> {
      return this.usersService.getUsers();
  }
}