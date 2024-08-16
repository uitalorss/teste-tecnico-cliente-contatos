import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { UserService } from "./user.service";
import { ZodValidationPipe } from "nestjs-zod";
import { CreateUserDTO, createUserSchema } from "./dto/create-user.dto";
import { instanceToInstance } from "class-transformer";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  public async findAll(@Res() res) {
    const users = await this.userService.findAll();
    return res.json(instanceToInstance(users));
  }

  @Post()
  public async create(@Res() res, @Body(new ZodValidationPipe(createUserSchema)) createUserDTO: CreateUserDTO) {
    const newUser = await this.userService.create(createUserDTO);
    return res.json(instanceToInstance(newUser));
  }
}
