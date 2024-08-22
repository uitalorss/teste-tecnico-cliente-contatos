import { forwardRef, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/user/user.service";
import { AuthLoginDTO } from "./dto/auth-login.dto";
import { ResponseAuthDTO } from "./dto/response-auth.dto";

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    @Inject(forwardRef(() => JwtService))
    private readonly jwtService: JwtService,
  ) {}

  public async login({ username }: AuthLoginDTO): Promise<ResponseAuthDTO> {
    const user = await this.userService.findUserByUserName(username);
    if (!user) {
      throw new NotFoundException("Usuário inválido");
    }
    const payload = {
      sub: user.id,
    };

    const tokenValue = await this.jwtService.signAsync(payload);
    return {
      token: tokenValue,
    };
  }
}
