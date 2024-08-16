import { Contact } from "src/contact/entities/contact.entity";
import { UserEmail } from "../entities/email-user.entity";
import { UserPhone } from "../entities/phone-user.entity";

export class ResponseUserDTO {
  id: string;
  name: string;
  userName: string;
  userEmails: UserEmail[];
  userPhones: UserPhone[];
  contacts: Contact[];
  created_at: Date;
}
