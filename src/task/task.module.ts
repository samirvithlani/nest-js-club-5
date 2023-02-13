import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TaskSchema } from "./schemas/task.schema";
import { TaskService } from "./task.service";

@Module({
    imports:[
         
    ],
    controllers:[],
    providers:[TaskService]
})
export class TaskModule{

}