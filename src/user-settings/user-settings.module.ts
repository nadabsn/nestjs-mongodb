import { Module } from '@nestjs/common';
import { UserSettingsService } from './user-settings.service';
import { UserSettingsController } from './user-settings.controller';
import {
  UserSettings,
  UserSettingsSchema,
} from '../schemas/userSettings.schema';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserSettings.name, schema: UserSettingsSchema },
    ]),
  ],
  controllers: [UserSettingsController],
  providers: [UserSettingsService],
})
export class UserSettingsModule {}
