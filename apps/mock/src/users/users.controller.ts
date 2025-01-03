import { Body, Controller, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { Status, UserOffboardActionBody } from '@nx-project-example/contracts';
import { EmployeesService } from '../employees/employees.service';

@Controller('users/:id')
export class UsersController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post('offboard')
  async offboardAction(
    @Res() res,
    @Param('id') id: string,
    @Body() body: UserOffboardActionBody
  ) {
    console.log('body:', body);

    const employee = await this.employeesService.updateOne(id, {
      status: Status.OFFBOARDED,
    });

    if (employee === undefined) {
      res.status(HttpStatus.BAD_REQUEST).send();
    } else {
      res.status(HttpStatus.OK).end();
    }
  }
}
