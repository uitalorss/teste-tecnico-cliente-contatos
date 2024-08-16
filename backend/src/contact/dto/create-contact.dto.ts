import { createZodDto } from "nestjs-zod";
import { z } from "zod";

export const createContactSchema = z.object({
  name: z.string({ required_error: "Campo nome é obrigatório." }).trim().min(1, "Campo não pode ficar vazio."),
  emails: z.string().array().nonempty("Campo não pode ficar vazio"),
  phones: z.string().length(11).array().nonempty("Campo não pode ficar vazio"),
});

export class CreateContactRequestDTO extends createZodDto(createContactSchema) {}

export class CreateContactDTO {
  user_id: string;
  name: string;
  emails: string[];
  phones: string[];
}
