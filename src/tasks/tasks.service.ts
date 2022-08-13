import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './tasks.model';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task) private postRepository: typeof Task) {}

  async create(dto: CreateTaskDto) {
    const task = await this.postRepository.create({ ...dto });
    return task;
  }
}
