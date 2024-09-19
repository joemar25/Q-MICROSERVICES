import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller()
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @MessagePattern('createCourse')
  create(@Payload() createCourseDto: CreateCourseDto) {
    return this.courseService.create(createCourseDto);
  }

  @MessagePattern('findAllCourse')
  findAll() {
    return this.courseService.findAll();
  }

  @MessagePattern('findOneCourse')
  findOne(@Payload() id: number) {
    return this.courseService.findOne(id);
  }

  @MessagePattern('updateCourse')
  update(@Payload() updateCourseDto: UpdateCourseDto) {
    return this.courseService.update(updateCourseDto.id, updateCourseDto);
  }

  @MessagePattern('removeCourse')
  remove(@Payload() id: number) {
    return this.courseService.remove(id);
  }
}
