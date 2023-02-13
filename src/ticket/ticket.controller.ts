import { Controller, Get, HttpException, HttpStatus, Req, Res } from '@nestjs/common';
import { TicketService } from './ticket.service';

@Controller('ticket')
export class TicketController {

    constructor(private service:TicketService){}

    @Get()
    async getTickets(@Req() req,@Res() res){
        return res.status(HttpStatus.OK).json({
            message: 'Tickets retrieved successfully',
            data: await this.service.getTickets()
        })
    }

}
