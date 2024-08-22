import { z } from "zod";

export const loginSchema = z.object({
  username: z.string({ required_error: "Campo obrigatório" }).trim().min(5, { message: "Nome de usuário muito curto" }).max(15, { message: "Nome de usuário muito longo" }),
});

export class AuthLoginDTO {
  username: string;
}
