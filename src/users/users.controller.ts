import { Controller, Get, HttpStatus, Req, Res } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    //service //dto

    constructor(private service:UsersService){}

    @Get("getuser")
    findAllUsers(@Req() req,@Res() res){
       
        return res.status(HttpStatus.OK).json({
            data:this.service.getAllUsers()
        })
        //db logic
        // return res.status(HttpStatus.OK).json({
        //     data: 'All users'
        // })
    }

}
