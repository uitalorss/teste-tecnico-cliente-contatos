import { forwardRef, Module } from "@nestjs/common";
import { ContactController } from "./contact.controller";
import { ContactService } from "./contact.service";
import { UserModule } from "src/user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Contact } from "./entities/contact.entity";
import { ContactEmail } from "./entities/email-contact.entity";
import { ContactPhone } from "./entities/phone-contact.entity";

@Module({
  imports: [forwardRef(() => UserModule), TypeOrmModule.forFeature([Contact, ContactEmail, ContactPhone])],
  controllers: [ContactController],
  providers: [ContactService],
  exports: [ContactService],
})
export class ContactModule {}
