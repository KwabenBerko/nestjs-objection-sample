import * as Knex from "knex";
import { User } from "../../user/user.model";


export async function up(knex: Knex): Promise<any> {
    const exists = await knex.schema.hasTable(User.tableName);
    if(!exists){
        await knex.schema.createTable(User.tableName, (table) => {
            table.increments("id");
            table.string("username");
        })
    }
}


export async function down(knex: Knex): Promise<any> {
    await knex.schema.dropTableIfExists(User.tableName);
}

