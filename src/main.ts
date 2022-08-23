import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Removes extra data to fit the dto fields
      forbidNonWhitelisted: true, //Throws a bad request if any other arguments exists
      }),
  )
  await app.listen(3000);
}
bootstrap();
