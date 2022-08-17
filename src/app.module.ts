import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';

//decorador para la clase AppModule
@Module({
  imports: [CarsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
