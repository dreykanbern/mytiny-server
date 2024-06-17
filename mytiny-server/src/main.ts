import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Настройка статического хостинга для TinyMCE
  app.useStaticAssets(join(__dirname, '..', 'mytinymce'), {
    prefix: '/mytinymce',
  });

  await app.listen(3030);
  console.log(`Приложение запущено на: ${await app.getUrl()}`);
}
bootstrap();