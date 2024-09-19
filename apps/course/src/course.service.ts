import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
  getHello(): string {
    return 'Hello World!';
  }
}
