import { Controller, Get, HttpStatus, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return "Hello World1!"
  }
  @Get('users1')
  getUsers(): any{
    return {
      "users": 
        {
          "id": 1,
          "name": "John Doe"
        },

    }
  }

  @Get('users1')
  getUserCustom(@Req() req,@Res() res,): any{
    res.status(HttpStatus.CREATED).json({
      "users":{
        "id": 1,
      }
    })

  }


}
