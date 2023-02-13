import { Document } from "mongoose";

export interface iTask extends Document{
    title: string;
    description: string;
    status: string;
}