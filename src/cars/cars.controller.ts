import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

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
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findOneById(id);
  }

  //agregar
  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  //actualizar
  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    return this.carsService.update(id, updateCarDto);
  }

  //borrar
  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}
