import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Post {
  @Prop({ required: true })
  title: string;

  @ApiProperty()
  @Prop({ required: true })
  contents: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
