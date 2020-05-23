import { Module } from '@nestjs/common';
import * as knexfile from "./knexfile";
import { ObjectionModule } from "@willsoto/nestjs-objection";

@Module({
    imports: [
        ObjectionModule.register({
            config: knexfile[process.env.NODE_ENV || "development"],
        }),
    ],
    exports: [ObjectionModule]
})
export class DatabaseModule { }
