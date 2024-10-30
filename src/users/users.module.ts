import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../schemas/user.schema';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {
  UserSettings,
  UserSettingsSchema,
} from '../schemas/userSettings.schema';
import { UserSettingsService } from '../user-settings/user-settings.service';
import { PostSchema, Post } from '../schemas/post.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([
      { name: UserSettings.name, schema: UserSettingsSchema },
    ]),
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService, UserSettingsService],
})
export class UsersModule {}
