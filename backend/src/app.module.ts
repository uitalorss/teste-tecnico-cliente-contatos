import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database/database.module";
import { UserModule } from "./user/user.module";
import { ContactModule } from "./contact/contact.module";
import { AuthModule } from "./auth/auth.module";
import { AdminModule } from "./admin/admin.module";

@Module({
  imports: [DatabaseModule, UserModule, ContactModule, AuthModule, AdminModule],
})
export class AppModule {}
