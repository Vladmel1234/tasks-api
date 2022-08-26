import { Body, Controller, Delete, Post, Put, UseGuards } from "@nestjs/common";
import { CreateTaskDto, UpdateTaskDto } from "./dto/create-task.dto";
import { TasksService } from "./task.service";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller("task")
export class TasksController {
  constructor(private TaskService: TasksService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  createTask(@Body() dto: CreateTaskDto) {
    return this.TaskService.create(dto);
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  deleteTask(@Body() id: number) {
    return this.TaskService.delete(id);
  }

  @Put()
  @UseGuards(JwtAuthGuard)
  updateTask(@Body() dto: UpdateTaskDto) {
    return this.TaskService.update(dto);
  }
}
