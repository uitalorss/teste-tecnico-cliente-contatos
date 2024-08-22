import { Body, Controller, Delete, Get, HttpCode, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { ZodValidationPipe } from "nestjs-zod";
import { CreateUserDTO, createUserSchema } from "./dto/create-user.dto";
import { instanceToInstance } from "class-transformer";
import { ResponseUserDTO } from "./dto/response-user.dto";
import { partialUserSchema, UpdateUserDTO } from "./dto/update-user.dto";
import { AuthGuard } from "src/auth/auth.guard";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  /*@Get()
  public async findAll(@Res() res) {
    const users = await this.userService.findAll();
    return res.json(instanceToInstance(users));
  }*/

  @UseGuards(AuthGuard)
  @Get()
  public async findOne(@Req() req, @Res() res): Promise<ResponseUserDTO> {
    const user = await this.userService.findUser(req.user);
    return res.json(instanceToInstance(user));
  }

  @Post()
  public async create(@Res() res, @Body(new ZodValidationPipe(createUserSchema)) createUserDTO: CreateUserDTO) {
    const newUser = await this.userService.create(createUserDTO);
    return res.json(instanceToInstance(newUser));
  }

  @UseGuards(AuthGuard)
  @HttpCode(204)
  @Delete()
  public async delete(@Req() req, @Res() res) {
    await this.userService.remove(req.user);
    return res.send();
  }

  @UseGuards(AuthGuard)
  @HttpCode(204)
  @Put()
  public async update(@Req() req, @Res() res, @Body(new ZodValidationPipe(partialUserSchema)) updateUserDTO: UpdateUserDTO) {
    await this.userService.update({ user_id: req.user, name: updateUserDTO.name, username: updateUserDTO.username, emails: updateUserDTO.emails, phones: updateUserDTO.phones });
    return res.send();
  }
}
