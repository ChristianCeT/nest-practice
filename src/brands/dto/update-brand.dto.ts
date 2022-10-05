/* import { PartialType } from '@nestjs/mapped-types';
//ayuda a extender la propiedad con excepcion de la propiedad que extiende sea opcional

import { CreateBrandDto } from './create-brand.dto';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {} */

import { IsString, MinLength } from 'class-validator';

export class UpdateBrandDto {
  @IsString()
  @MinLength(1)
  name: string;
}
