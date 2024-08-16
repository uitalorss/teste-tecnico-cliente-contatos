import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database/database.module";
import { UserModule } from "./user/user.module";
import { ContactService } from './contact/contact.service';

@Module({
  imports: [DatabaseModule, UserModule],
  controllers: [],
  providers: [ContactService],
})
export class AppModule {}
