import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ObjectionModule } from "@willsoto/nestjs-objection";
import { User } from './user.model';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
    imports: [
        DatabaseModule,
        ObjectionModule.forFeature([User])
    ],
    providers: [UserService],
    controllers: [UserController],
    
})
export class UserModule {}
