import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Contact } from "./entities/contact.entity";
import { Repository } from "typeorm";
import { ContactEmail } from "./entities/email-contact.entity";
import { ContactPhone } from "./entities/phone-contact.entity";
import { UserService } from "src/user/user.service";
import { CreateContactDTO } from "./dto/create-contact.dto";

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,

    @InjectRepository(ContactEmail)
    private contactEmailRepository: Repository<ContactEmail>,

    @InjectRepository(ContactPhone)
    private contactPhoneRepository: Repository<ContactPhone>,

    private readonly userService: UserService,
  ) {}

  public async create({ user_id, name, emails, phones }: CreateContactDTO) {
    const user = await this.userService.findUser(user_id);

    const contact = this.contactRepository.create({
      name,
      user,
    });

    await this.contactRepository.save(contact);

    await Promise.all(emails.map(item => this.createContactEmails(item, contact)));
    await Promise.all(phones.map(item => this.createContactPhones(item, contact)));

    return contact;
  }

  public async find(user_id: string) {
    const user = await this.userService.findUser(user_id);
    console.log(user.contacts);
    const queryBuilder = this.contactRepository
      .createQueryBuilder("contacts")
      .leftJoinAndSelect("contacts.contactEmails", "contactEmails")
      .leftJoinAndSelect("contacts.contactPhones", "contactPhones")
      .where("user_id = :id", { id: user.id });
    const contacts = await queryBuilder.getMany();
    console.log(contacts);
    return contacts;
  }

  public async update() {}
  public async delete() {}

  private async createContactEmails(email: string, contact: Contact) {
    const validEmail = this.contactEmailRepository.create({ email, contact });
    await this.contactEmailRepository.save(validEmail);
  }

  private async createContactPhones(phone: string, contact: Contact) {
    const validPhone = this.contactPhoneRepository.create({ phone, contact });
    await this.contactPhoneRepository.save(validPhone);
  }
}
