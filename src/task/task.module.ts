import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { taskSchema } from './schemas/task_schemas';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';



@Module({
  imports:[MongooseModule.forFeature([{ name: 'Task' , schema: taskSchema}])],
  controllers: [TaskController],
  providers: [TaskService]
})
export class TaskModule {}
