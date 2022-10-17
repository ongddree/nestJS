import { Injectable } from '@nestjs/common';

//공급자로 취급되어 의존성 주입이 가능하다
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
