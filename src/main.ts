import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v2');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Si se establece en verdadero, el validador eliminará el objeto validado de cualquier propiedad que no tenga decoradores.
      forbidNonWhitelisted: true, // Si se establece en verdadero, en lugar de eliminar las propiedades no incluidas en la lista blanca, el validador arrojará un error
      transform: true, // Transforma la data de los parametos de ruta ej pasa de "1" a 1
      transformOptions: {
        enableImplicitConversion: true, // Si se establece en verdadero, el transformador de clase intentará la conversión según el tipo reflejado de TS
      },
    }),
  );
  await app.listen(process.env.PORT);
  console.log(`App runing on port ${process.env.PORT}`);
  
}
bootstrap();
