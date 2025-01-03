import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  findAll() {
    return this.employeesService.findAll();
  }

  @Get(':id')
  findOne(@Res() res, @Param('id') id: string) {
    const employee = this.employeesService.findOne(id);

    if (employee === undefined) {
      res.status(HttpStatus.NOT_FOUND).send();
    } else {
      res.status(HttpStatus.OK).json(employee).send();
    }
  }
}
