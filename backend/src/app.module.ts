import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database/database.module";
import { UserModule } from "./user/user.module";
import { ContactModule } from "./contact/contact.module";

@Module({
  imports: [DatabaseModule, UserModule, ContactModule],
  providers: [],
})
export class AppModule {}
