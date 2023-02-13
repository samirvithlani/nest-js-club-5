import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { iTicket } from './interfaces/ticket.interface';

@Injectable()
export class TicketService {

    constructor(@InjectModel('Ticket') private readonly ticketModel:Model<iTicket>){}

    async getTickets():Promise<iTicket[]>{
        const tickets = await this.ticketModel.find();
        return tickets;
    }
}
