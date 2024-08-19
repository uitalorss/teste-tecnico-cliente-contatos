import { createZodDto } from "nestjs-zod";
import { createUserSchema } from "./create-user.dto";

export const partialUserSchema = createUserSchema.partial();

export class UpdateUserRequestDTO extends createZodDto(partialUserSchema) {}

export class UpdateUserDTO {
  user_id: string;
  name: string;
  username: string;
  emails: string[];
  phones: string[];
}
