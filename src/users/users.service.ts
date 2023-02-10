import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    
    getAllUsers(){
        return {
            "users": [
                {
                    "id": 1,
                    "name": "John Doe"
                },
                {
                    "id": 2,
                    "name": "Jane Doe"
                },
                {
                    "id": 3,
                    "name": "John Smith"
                }
            ]
        }
    }

}
