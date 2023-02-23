import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  port: parseInt(config.dbPort as string),
  dialect: "postgres",
  storage: ":memory:",
});
