import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { ResponseUserDTO } from "src/user/dto/response-user.dto";
import { UserService } from "src/user/user.service";

@Injectable()
export class AdminService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}
  public async getAllUsers(): Promise<ResponseUserDTO[]> {
    const users = await this.userService.findAll();
    return users;
  }
}
