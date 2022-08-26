import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateTaskDto, UpdateTaskDto } from "./dto/create-task.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Task } from "./task.model";

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task) private taskRepository: typeof Task) {}

  async create(dto: CreateTaskDto) {
    const task = await this.taskRepository.create({ ...dto });
    return task;
  }

  async delete(id: number) {
    try {
      const task = await this.taskRepository.findOne({
        where: {
          id,
        },
      });
      if (task) {
        await task.destroy();
      }
    } catch (error) {
      throw new HttpException(
        "Such Task Dose not exist",
        HttpStatus.BAD_REQUEST
      );
    }
  }

  async update(dto: UpdateTaskDto) {
    try {
      const task = await this.taskRepository.update(dto, {
        where: {
          id: dto.id,
          userId: dto.userId,
        },
      });

      return task;
    } catch (error) {
      throw new HttpException(
        "Such Task Dose not exist",
        HttpStatus.BAD_REQUEST
      );
    }
  }
}
