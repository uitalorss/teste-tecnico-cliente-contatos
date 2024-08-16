import { createZodDto } from "nestjs-zod";
import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string({ required_error: "Campo nome é obrigatório." }).trim().min(1, "Campo não pode ficar vazio."),
  username: z
    .string({ required_error: "Campo username é obrigatório" })
    .trim()
    .min(5, "Campo precisa ter mais de 5 caracteres")
    .max(15, "campo precisa ter menos de 15 caracteres"),
  emails: z.string().array().nonempty("Campo não pode ficar vazio"),
  phones: z.string().length(11).array().nonempty("Campo não pode ficar vazio"),
});

export class CreateUserDTO extends createZodDto(createUserSchema) {}
