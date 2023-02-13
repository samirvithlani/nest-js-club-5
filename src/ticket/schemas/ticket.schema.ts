import mongoose from "mongoose";

export const TicketSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    status: {type: String, required: true}
});