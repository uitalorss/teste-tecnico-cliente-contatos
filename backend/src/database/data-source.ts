import "dotenv/config";
import { Contact } from "src/contact/entities/contact.entity";
import { ContactEmail } from "src/contact/entities/email-contact.entity";
import { ContactPhone } from "src/contact/entities/phone-contact.entity";
import { UserEmail } from "src/user/entities/email-user.entity";
import { UserPhone } from "src/user/entities/phone-user.entity";
import { User } from "src/user/entities/user.entity";
import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: false,
  entities: [User, UserEmail, UserPhone, Contact, ContactEmail, ContactPhone],
};

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: ["./src/database/migrations/*.{ts,js}"],
});
