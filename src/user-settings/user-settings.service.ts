import { Injectable } from '@nestjs/common';
import { CreateUserSettingsDto } from './dto/create-user-setting.dto';
import { UpdateUserSettingDto } from './dto/update-user-setting.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UserSettings } from '../schemas/userSettings.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserSettingsService {
  constructor(
    @InjectModel(UserSettings.name)
    private userSettingsModel: Model<UserSettings>,
  ) {}
  create(createUserSettingDto: CreateUserSettingsDto) {
    const settings = new this.userSettingsModel(createUserSettingDto);
    return settings.save();
  }

  findAll() {
    return `This action returns all userSettings`;
  }

  async findById(id: string) {
    return this.userSettingsModel.findById(id);
  }
  update(id: number, updateUserSettingDto: UpdateUserSettingDto) {
    return `This action updates a #${id} userSetting`;
  }

  remove(id: number) {
    return `This action removes a #${id} userSetting`;
  }
}
