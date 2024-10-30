import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { UserSettingsModule } from './user-settings/user-settings.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    UsersModule,
    UserSettingsModule,
    PostsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
