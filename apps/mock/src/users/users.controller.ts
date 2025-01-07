import {
  BadRequestException,
  Body,
  Controller,
  Param,
  Post,
} from '@nestjs/common';
import { Status, UserOffboardActionBodyContract } from '@nx-project-example/contracts';
import { EmployeesService } from '../employees/employees.service';

@Controller('users/:id')
export class UsersController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post('offboard')
  async offboardAction(
    @Param('id') id: string,
    @Body() body: UserOffboardActionBodyContract
  ) {
    console.log('body:', body);

    const employee = await this.employeesService.updateOne(id, {
      status: Status.OFFBOARDED,
    });

    if (employee === undefined) {
      throw new BadRequestException(`Employee with id: ${id} doesn't exists`);
    } else {
      return {};
    }
  }
}
