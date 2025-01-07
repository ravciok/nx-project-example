import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  findAll() {
    return this.employeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const employee = this.employeesService.findOne(id);

    if (employee === undefined) {
      throw new NotFoundException(`Employee with id: ${id} doesn't exists`);
    }

    return employee;
  }
}
