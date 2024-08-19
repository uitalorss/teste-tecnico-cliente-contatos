import { createZodDto } from "nestjs-zod";
import { createContactSchema } from "./create-contact.dto";

export const partialContactSchema = createContactSchema.partial();

export class updateContactRequestDTO extends createZodDto(partialContactSchema) {}

export class UpdateContactDTO {
  user_id: string;
  contact_id: string;
  name: string;
  phones: string[];
  emails: string[];
}
