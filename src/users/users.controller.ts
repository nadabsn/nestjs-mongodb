import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/updateUser.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from '../schemas/user.schema';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Post()
  @ApiOperation({
    summary: 'Create a new user',
    description: 'Create a new user ',
  })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
    type: User,
  })
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.createUser(createUserDto);
  }
  @Get()
  getUser() {
    return this.usersService.findAll();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.findById(id);
  }
  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}
