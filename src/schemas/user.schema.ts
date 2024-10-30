import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { UserSettings } from './userSettings.schema';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class User {
  @Prop({ unique: true, required: true })
  username: string;

  @ApiProperty()
  @Prop({ required: false })
  displayName?: string;

  @ApiProperty()
  @Prop({ required: false })
  avatarUrl?: string;

  @ApiProperty()
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UserSettings' })
  settings?: UserSettings;
}

export const UserSchema = SchemaFactory.createForClass(User);
