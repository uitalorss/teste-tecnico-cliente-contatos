import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database/database.module";
import { UserModule } from "./user/user.module";
import { ContactModule } from "./contact/contact.module";
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DatabaseModule, UserModule, ContactModule, AuthModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AppModule {}
