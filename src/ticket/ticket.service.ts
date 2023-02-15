import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTicketDto } from './dto/ticket.dto';
import { iTicket } from './interfaces/ticket.interface';

@Injectable()
export class TicketService {

    constructor(@InjectModel('Ticket') private readonly ticketModel:Model<iTicket>){}

    async getTickets():Promise<iTicket[]>{
        const tickets = await this.ticketModel.find();
        return tickets;
    }

    async deleteTicketById(id:string):Promise<iTicket>{
        const ticket = await this.ticketModel.findByIdAndDelete(id);
        if(!ticket){
            throw new HttpException("ticket not found",HttpStatus.NOT_FOUND)
        }
        else{
            return ticket;
        }
    }

    async getTicketById(id:string):Promise<iTicket>{

    const ticekt = await this.ticketModel.findById(id);
    if(!ticekt){
        throw new HttpException("ticket not found",HttpStatus.NOT_FOUND)
    }
    else{
        return ticekt;
    }



    }

    async createTicket(createTicketDto:CreateTicketDto):Promise<iTicket>{

        try{

              const ticket = new this.ticketModel({
                    title:createTicketDto.title,
                    description:createTicketDto.description,
                    status:createTicketDto.status
              })  
              return await ticket.save();

        }catch(err){

            throw new HttpException("error while creating ticket",HttpStatus.BAD_REQUEST)

        }



    }





}
