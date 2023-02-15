import { Body, Controller, Delete, Get, HttpException, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { CreateTicketDto } from './dto/ticket.dto';
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

    @Get(":id")
    async getTicketById(@Req() req,@Res() res){
        return res.status(HttpStatus.OK).json({
            message: 'Ticket retrieved successfully',
            data: await this.service.getTicketById(req.params.id)
        })
    }
    @Delete(":id")
    async deleteTicketById(@Req() req,@Res() res){
        return res.status(HttpStatus.OK).json({
            message: 'Ticket deleted successfully',
            data: await this.service.deleteTicketById(req.params.id)
        })
    }

    @Post()
    async createTicket(@Body() createTicketDto:CreateTicketDto,@Req() req,@Res() res){
        
        res.status(HttpStatus.CREATED).json({
            message: 'Ticket created successfully',
            data:await this.service.createTicket(createTicketDto)
        })

    }

}
