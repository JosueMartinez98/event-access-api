import 'dotenv/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CourseController } from './modules/course/course.controller';
import { GroupController } from './modules/group/group.controller';
import { RoleController } from './modules/role/role.controller';
import { SchoolController } from './modules/school/school.controller';
import { StudentController } from './modules/student/student.controller';
import { UserController } from './modules/user/user.controller';

import { AppService } from './app.service';
import { CourseService } from './modules/services/course.service';
import { GroupService } from './modules/services/group.service';
import { RoleService } from './modules/services/role.service';
import { SchoolService } from './modules/services/school.service';
import { StudentService } from './modules/services/student.service';
import { UserService } from './modules/services/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number.parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      retryDelay: 3000,
      retryAttempts: 10,
    }),
  ],
  controllers: [
    CourseController,
    GroupController,
    RoleController,
    SchoolController,
    StudentController,
    UserController,
  ],
  providers: [
    UserService,
    StudentService,
    SchoolService,
    RoleService,
    GroupService,
    CourseService,
    AppService,
  ],
})
export class AppModule {}
