import { Body, Controller, Post, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ZodValidationPipe } from "nestjs-zod";
import { AuthLoginDTO, loginSchema } from "./dto/auth-login.dto";
import { ResponseAuthDTO } from "./dto/response-auth.dto";

@Controller("login")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  public async login(@Res() res, @Body(new ZodValidationPipe(loginSchema)) authLoginDTO: AuthLoginDTO): Promise<ResponseAuthDTO> {
    const auth = await this.authService.login(authLoginDTO);
    return res.json(auth);
  }
}
