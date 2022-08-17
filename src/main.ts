import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//funcion al inicio de la app
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
