import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['https://spacemoaabom.com', 'https://www.spacemoaabom.com'],
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    credentials: true,
    exposedHeaders: ['Authorization'],
  });
  await app.listen(9090);
}
bootstrap();
