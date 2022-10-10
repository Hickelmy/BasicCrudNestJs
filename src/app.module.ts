import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
 import { AppController } from './app.controller';
 import { AppService } from './app.service';

import { TaskModule } from './task/task.module';


@Module({
  imports: [
    MongooseModule.forRoot(
      '',
      // {
      //   useNewUrlParser: true,
      //   useCreateIndex: true,
      //   useUnifiedTopology: true,
      //   useFindAndModify: false,
      // },
    ),
    TaskModule,
  ],
  controllers: [AppController],
  providers:[AppService],
})
export class AppModule {}


