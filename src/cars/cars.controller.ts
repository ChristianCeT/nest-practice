import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

//es quien escucha las peticiones del cliente y emite una respuesta
@Controller('cars')
export class CarsController {
  //inyeccion de dependencias
  constructor(private readonly carsService: CarsService) {}

  //decorador get
  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  //decorador de el id
  //decorador con parametro
  //cualquier dato por la query es string
  //los pipes sirven para convertir algo en un numero o string o cualquier cosa que desees
  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.findOneById(id);
  }

  //agregar
  @Post()
  createCar(@Body() body: any) {
    return body;
  }

  //actualizar
  @Patch(':id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return body;
  }

  //borrar
  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      message: 'delete',
      id,
    };
  }
}
