import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "../users/users.model";

interface TaskCreationAttrs {
  title: string;
  shortDescription: string;
  description: string;
  userId: number;
}

export enum Status {
  DONE = "DONE",
  CANCELED = "CANCELED",
  UPCOMING = "UPCOMING",
}

@Table({ tableName: "task" })
export class Task extends Model<Task, TaskCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.STRING, allowNull: false })
  shortDescription: string;

  @Column({ type: DataType.STRING })
  description: string;

  @Column({ type: DataType.INTEGER })
  duration: number;

  @Column({
    type: DataType.ENUM("DONE", "CANCLED", "UPCOMING"),
    allowNull: false,
  })
  status: Status;

  @Column({ type: DataType.DATE })
  dueTime: Date;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
