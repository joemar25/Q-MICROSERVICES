import { Module } from '@nestjs/common';
import { CourseModule } from './course/course.module';

@Module({
  imports: [CourseModule],
  controllers: [],
  providers: [],
})
export class CourseModule {}
