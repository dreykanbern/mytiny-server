import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const message = 'Привет, мир!';
    console.log('Сервис возвращает сообщение:', message);
    return message;
  }
}