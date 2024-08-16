import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { UserEmail } from "./entities/email-user.entity";
import { UserPhone } from "./entities/phone-user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User, UserEmail, UserPhone])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
