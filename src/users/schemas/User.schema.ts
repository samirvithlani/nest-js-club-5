//create user schema
import { MongooseModule, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
class UserSchema{

    name:string
    email:string
}
export const userSchema = SchemaFactory.createForClass(UserSchema);
