import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database/database.module";
import { UserModule } from "./user/user.module";
import { ContactService } from './contact/contact.service';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [DatabaseModule, UserModule, ContactModule],
  controllers: [],
  providers: [ContactService],
})
export class AppModule {}
