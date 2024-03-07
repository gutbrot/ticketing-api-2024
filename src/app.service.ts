import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getPersonalisedHello(name: string, day: string){
    return `Hello ${name}, have a nice day ${day}!`;
  }
}
