import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  health(): object {
    throw new Error('Method not implemented.');
  }
  getHello(): string {
    return 'Hello World!';
  }

  getMyNewEndpoint(): string {
    return 'Hello desde MyNewEndpoint!';
  }

  getHealth(): any {
    return {
      service: 'Blog Backend Api',
      version: '0.0.1'
    };
  }
  
}
