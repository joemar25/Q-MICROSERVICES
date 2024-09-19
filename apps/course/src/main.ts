import { NestFactory } from '@nestjs/core';
import { CourseModule } from './course.module';

async function bootstrap() {
  const app = await NestFactory.create(CourseModule);
  await app.listen(3000);
}
bootstrap();
