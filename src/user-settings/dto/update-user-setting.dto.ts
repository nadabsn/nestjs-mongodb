import { PartialType } from '@nestjs/swagger';
import { CreateUserSettingsDto } from './create-user-setting.dto';

export class UpdateUserSettingDto extends PartialType(CreateUserSettingsDto) {}
