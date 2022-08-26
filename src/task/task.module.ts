import { Module } from "@nestjs/common";
import { TasksService } from "./task.service";
import { TasksController } from "./task.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "../users/users.model";
import { Task } from "./task.model";
import { AuthModule } from "../auth/auth.module";

@Module({
  providers: [TasksService],
  controllers: [TasksController],
  imports: [SequelizeModule.forFeature([User, Task]), AuthModule],
})
export class TasksModule {}
