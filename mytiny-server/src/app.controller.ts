import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const message = this.appService.getHello();
    console.log('Запрос на главный маршрут / выполнен');
    return message;
  }
}