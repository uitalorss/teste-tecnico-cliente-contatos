import { createZodDto } from "nestjs-zod";
import { z } from "zod";

export const createContactSchema = z.object({
  name: z.string({ required_error: "Campo nome é obrigatório." }).trim().min(1, "Campo não pode ficar vazio."),
  emails: z.array(z.string().email({ message: "Email inválido" }).trim()).nonempty("Campo não pode ficar vazio"),
  phones: z.array(z.string().regex(/^\(\d{2}\)\s?\d{4,5}-?\d{4}$/, { message: "Favor informar números de telefones válidos" })).nonempty("Campo não pode ficar vazio"),
});

export class CreateContactRequestDTO extends createZodDto(createContactSchema) {}

export class CreateContactDTO {
  user_id: string;
  name: string;
  emails: string[];
  phones: string[];
}
