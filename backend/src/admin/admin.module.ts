import { forwardRef, Module } from "@nestjs/common";
import { AdminController } from "./admin.controller";
import { UserModule } from "src/user/user.module";
import { AdminService } from "./admin.service";

@Module({
  imports: [forwardRef(() => UserModule)],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
