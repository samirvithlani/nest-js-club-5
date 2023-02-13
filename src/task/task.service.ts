import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { iTask } from './interfaces/task.interface';

@Injectable()
export class TaskService {

    //schema
    constructor(@InjectModel('Task') private readonly taskModel :Model<iTask>){}

    //get all tasks
    async getAllTasks():Promise<iTask[]>{
        return await this.taskModel.find();
    }
}
