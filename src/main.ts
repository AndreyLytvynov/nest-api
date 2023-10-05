import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // app.enableCors({
  //   origin: ['http://localhost:3000', 'https://finance-control-mu.vercel.app'],
  //   allowedHeaders: ['Accept', 'Content-Type'],
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  //   preflightContinue: false,
  //   optionsSuccessStatus: 204,
  //   credentials: true,
  // });
  app.enableCors({
    origin: function (origin, callback) {
      if (
        [
          'https://finance-control-mu.vercel.app',
          'http://localhost:3000',
        ].indexOf(origin) !== -1
      ) {
        console.log('allowed cors for:', origin);
        callback(null, true);
      } else {
        console.log('blocked cors for:', origin);
        callback(new Error('Not allowed by CORS'));
      }
    },
    allowedHeaders:
      'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe',
    methods: 'GET,PUT,POST,DELETE,UPDATE,OPTIONS',
    credentials: true,
  });
  await app.listen(3002);
}
bootstrap();
