import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Contact } from "./entities/contact.entity";
import { Repository } from "typeorm";
import { ContactEmail } from "./entities/email-contact.entity";
import { ContactPhone } from "./entities/phone-contact.entity";
import { UserService } from "src/user/user.service";
import { CreateContactDTO } from "./dto/create-contact.dto";
import { DeleteContactDTO } from "./dto/delete-contact.dto";
import { UpdateContactDTO } from "./dto/update-contact.dto";

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
    const queryBuilder = this.contactRepository
      .createQueryBuilder("contacts")
      .leftJoinAndSelect("contacts.contactEmails", "contactEmails")
      .leftJoinAndSelect("contacts.contactPhones", "contactPhones")
      .where("user_id = :id", { id: user.id });
    const contacts = await queryBuilder.getMany();
    return contacts;
  }

  public async update({ user_id, contact_id, name, emails, phones }: UpdateContactDTO) {
    const contactAlreadyExists = await this.contactRepository.findOne({
      where: {
        id: contact_id,
      },
      relations: {
        contactEmails: true,
        contactPhones: true,
        user: true,
      },
    });

    if (!contactAlreadyExists) {
      throw new NotFoundException("Contato não existe.");
    }

    if (contactAlreadyExists.user.id !== user_id) {
      throw new BadRequestException("Contato inválido.");
    }

    const updateContact = await this.contactRepository.preload({
      id: contact_id,
      name,
    });

    await this.contactRepository.save(updateContact);
    if (emails) {
      await this.resetContactEmails(contactAlreadyExists);
      await Promise.all(emails.map(item => this.createContactEmails(item, updateContact)));
    }
    if (phones) {
      await this.resetContactPhones(contactAlreadyExists);
      await Promise.all(phones.map(item => this.createContactPhones(item, updateContact)));
    }
  }

  public async remove({ contact_id, user_id }: DeleteContactDTO) {
    const contact = await this.contactRepository.findOne({
      where: {
        id: contact_id,
      },
      relations: {
        user: true,
      },
    });
    if (!contact) {
      throw new NotFoundException("Contato não encontrado.");
    }
    if (contact.user.id !== user_id) {
      throw new BadRequestException("Contato não atribuído a sua conta.");
    }
    await this.contactRepository.remove(contact);
  }

  private async createContactEmails(email: string, contact: Contact) {
    const validEmail = this.contactEmailRepository.create({ email, contact });
    await this.contactEmailRepository.save(validEmail);
  }

  private async createContactPhones(phone: string, contact: Contact) {
    const validPhone = this.contactPhoneRepository.create({ phone, contact });
    await this.contactPhoneRepository.save(validPhone);
  }

  private async resetContactEmails(contact: Contact) {
    contact.contactEmails.map(async item => this.contactEmailRepository.remove(item));
  }

  private async resetContactPhones(contact: Contact) {
    contact.contactPhones.map(async item => await this.contactPhoneRepository.remove(item));
  }
}
