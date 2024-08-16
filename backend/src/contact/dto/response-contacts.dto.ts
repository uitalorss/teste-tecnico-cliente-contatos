import { ContactEmail } from "../entities/email-contact.entity";
import { ContactPhone } from "../entities/phone-contact.entity";

export class ResponseContactsDTO {
  name: string;
  emails: ContactEmail[];
  phones: ContactPhone[];
}
