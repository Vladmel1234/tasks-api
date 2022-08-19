import { Body, Controller, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private TaskService: TasksService) {}

  @Post()
  createTask(@Body() dto: CreateTaskDto) {
    return this.TaskService.create(dto);
  }
}
