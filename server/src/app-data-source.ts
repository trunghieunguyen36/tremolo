import { DataSource } from "typeorm";
require("dotenv").config();

export const mySQLDataSource = new DataSource({
  type: "mysql",
  host: process.env.DATABASE_HOST,
  port: 3306,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [__dirname + "/../**/*.entity.{js,ts}"],
  logging: true,
  synchronize: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});
