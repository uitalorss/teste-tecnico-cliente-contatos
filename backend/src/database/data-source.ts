import "dotenv/config";
import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: false,
  entities: [],
};

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: ["./backend/src/database/migrations/*.{ts,js}"],
});
