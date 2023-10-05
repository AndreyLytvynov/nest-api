import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: ['http://localhost:3000', 'https://finance-control-mu.vercel.app'],
    allowedHeaders: ['Accept', 'Content-Type'],
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  });
  await app.listen(3002);
}
bootstrap();
