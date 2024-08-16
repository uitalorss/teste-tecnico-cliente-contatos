import { UserEmail } from "../entities/email-user.entity";
import { UserPhone } from "../entities/phone-user.entity";

export class ResponseUserDTO {
  id: string;
  name: string;
  userName: string;
  userEmails: UserEmail[];
  userPhones: UserPhone[];
  created_at: Date;
}
