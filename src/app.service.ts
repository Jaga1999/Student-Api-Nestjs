import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getDeleteGreat(): string {
    return 'Hi this is from Delete';
  }

  getPutGreat(): string {
    return 'Hi this is from Put';
  }

  getPostGreat(): string {
    return 'Hi this is from Post';
  }

  getHello(): string {
    return 'Hello World!!! by Jagadeep S';
  }

  getGetGreat(): string {
    return 'Hi this is from Get';
  }
}
