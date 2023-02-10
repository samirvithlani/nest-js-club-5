import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './products/ProductController';
import { userSchema } from './users/schemas/User.schema';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule,MongooseModule.forRoot('mongodb://127.0.0.1/nest-club-5'),
  MongooseModule.forFeature([{name:'user',schema:userSchema}])
],
  controllers: [AppController,ProductController],
  providers: [AppService],
})
export class AppModule {}
