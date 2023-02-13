import { Document } from "mongoose";

export interface iTicket  extends Document{

    title: string;
    description: string;
    status: string;
}