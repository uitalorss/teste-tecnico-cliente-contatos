import { createZodDto } from "nestjs-zod";
import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string({ required_error: "Campo nome é obrigatório." }).trim().min(1, "Campo não pode ficar vazio."),
  username: z
    .string({ required_error: "Campo username é obrigatório" })
    .trim()
    .min(5, "Campo precisa ter mais de 5 caracteres")
    .max(15, "campo precisa ter menos de 15 caracteres"),
  emails: z.array(z.string().trim().email({ message: "Email inválido" })).nonempty("Campo não pode ficar vazio"),
  phones: z.array(z.string().regex(/^\(\d{2}\)\s?\d{4,5}-?\d{4}$/, { message: "Favor informar números de telefones válidos" })).nonempty("Campo não pode ficar vazio"),
});

export class CreateUserDTO extends createZodDto(createUserSchema) {}
