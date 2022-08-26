import { Status } from "../task.model";

export class CreateTaskDto {
  readonly title: string;
  readonly shotDescription: string;
  readonly status: Status;
  readonly userId: number;
  readonly description?: string;
  readonly dueTime?: Date;
  readonly duration?: number;
}

export class UpdateTaskDto {
  readonly id: number;
  readonly userId: number;
  readonly title?: string;
  readonly shotDescription?: string;
  readonly status?: Status;
  readonly description?: string;
  readonly dueTime?: Date;
  readonly duration?: number;
}
