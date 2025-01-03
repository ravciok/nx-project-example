import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { EmployeesService } from '../employees/employees.service';

@Module({
  controllers: [UsersController],
  providers: [EmployeesService],
})
export class UsersModule {}
