import { Test, TestingModule } from '@nestjs/testing';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';

describe('CourseController', () => {
  let courseController: CourseController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CourseController],
      providers: [CourseService],
    }).compile();

    courseController = app.get<CourseController>(CourseController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(courseController.getHello()).toBe('Hello World!');
    });
  });
});
