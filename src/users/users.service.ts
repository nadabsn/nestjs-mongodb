import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.schema';
import mongoose, { Model } from 'mongoose';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UserSettingsService } from '../user-settings/user-settings.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private userSettingsService: UserSettingsService,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const { settings, ...rest } = createUserDto;
    if (settings) {
      const setting = await this.userSettingsService.findById(settings);
      if (!setting) throw new HttpException('Setting not found', 404);
      const user = new this.userModel({ ...rest, settings: setting });
      return user.save();
    }
    const user = new this.userModel(createUserDto);
    return user.save();
  }

  findAll() {
    return this.userModel.find().populate('settings');
  }

  async findById(id: string) {
    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId) throw new HttpException('User not found', 404);
    const user = await this.userModel
      .findById(id)
      .populate(['settings', 'posts']);
    if (!user) throw new HttpException('User not found', 404);
    return user;
  }
  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId) throw new HttpException('Invalid ID', 400);
    const user = await this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });
    if (!user) throw new HttpException('User not found', 404);
    return user;
  }

  async deleteUser(id: string) {
    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId) throw new HttpException('Invalid ID', 400);
    const user = await this.userModel.findByIdAndDelete(id);
    if (!user) throw new HttpException('User not found', 404);
    return user;
  }
}
