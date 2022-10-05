//DTO = DATA TRANSFER OBJECT
//readonly = no puede ser cambiado

import { IsString } from 'class-validator';

export class CreateCarDto {
  @IsString()
  readonly brand: string;

  @IsString()
  readonly model: string;
}
