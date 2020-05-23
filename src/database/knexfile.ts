// Update with your config settings.
import {Config} from "knex";
import * as path from "path";
import { knexSnakeCaseMappers } from "objection";


module.exports = {
  
  development: {
    client: "postgresql",
    connection: "postgres://kwabenaberko@localhost:5432/nestjs_objection",
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      extension: "ts",
      directory: path.join(__dirname, "migrations"),
      tableName: "knex_migrations"
    },
    ...knexSnakeCaseMappers()
  }

} as Config;
