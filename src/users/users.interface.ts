import { Document } from 'mongoose';

export interface IUsers extends Document {
    readonly name: string;
    readonly email: string;
    
}
