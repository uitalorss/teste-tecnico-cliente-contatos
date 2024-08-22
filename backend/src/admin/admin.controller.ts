import { Controller, Get, Res } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { instanceToInstance } from "class-transformer";

@Controller("admin")
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  public async findAll(@Res() res) {
    const users = await this.adminService.getAllUsers();
    return res.json(instanceToInstance(users));
  }
}
