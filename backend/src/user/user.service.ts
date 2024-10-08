import { BadRequestException, forwardRef, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { UserEmail } from "./entities/email-user.entity";
import { UserPhone } from "./entities/phone-user.entity";
import { ResponseUserDTO } from "./dto/response-user.dto";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";
import { ContactService } from "src/contact/contact.service";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(UserEmail)
    private userEmailRepository: Repository<UserEmail>,

    @InjectRepository(UserPhone)
    private userPhoneRepository: Repository<UserPhone>,

    @Inject(forwardRef(() => ContactService))
    private contactService: ContactService,
  ) {}

  public async findAll(): Promise<ResponseUserDTO[]> {
    const users = await this.userRepository.find({
      relations: {
        userEmails: true,
        userPhones: true,
        contacts: true,
      },
    });
    await Promise.all(
      users.map(async user => {
        return (user.contacts = await this.contactService.find(user));
      }),
    );

    return users;
  }

  public async findUser(id: string): Promise<ResponseUserDTO> {
    if (!id) {
      throw new BadRequestException("ID inválido");
    }

    const user = await this.userRepository.findOne({
      where: {
        id,
      },
      relations: {
        userEmails: true,
        userPhones: true,
      },
    });

    if (!user) {
      console.log("to aqui também");
      throw new NotFoundException("Usuário não encontrado.");
    }
    user.contacts = await this.contactService.find(user);
    return user;
  }

  public async findUserByUserName(username) {
    const user = await this.userRepository.findOne({
      where: {
        userName: username,
      },
    });
    return user;
  }

  public async create({ name, username, emails, phones }: CreateUserDTO): Promise<ResponseUserDTO> {
    const isUsernameExists = await this.userRepository.findOneBy({
      userName: username,
    });
    if (isUsernameExists) {
      throw new BadRequestException("Nome de usuário já existe.");
    }

    const user = this.userRepository.create({
      name,
      userName: username,
    });
    await this.userRepository.save(user);

    await Promise.all(emails.map(item => this.createEmails(item, user)));
    await Promise.all(phones.map(item => this.createPhones(item, user)));

    return user;
  }

  public async remove(id: string) {
    const user = await this.userRepository.findOneBy({
      id,
    });
    if (!user) {
      throw new NotFoundException("Usuário não encontrado.");
    }

    await this.userRepository.remove(user);
  }

  public async update({ user_id, name, username, emails, phones }: UpdateUserDTO) {
    const isUserExists = await this.userRepository.findOne({
      where: {
        id: user_id,
      },
      relations: {
        userEmails: true,
        userPhones: true,
      },
    });

    if (!isUserExists) {
      throw new NotFoundException("Usuário inválido.");
    }

    if (username && username !== isUserExists.userName) {
      const verifyUserName = await this.userRepository.findOne({
        where: {
          userName: username,
        },
      });
      if (verifyUserName) {
        throw new BadRequestException(`username ${username} já em uso`);
      }
    }

    const updateUser = await this.userRepository.preload({
      id: user_id,
      name,
      userName: username,
    });
    await this.userRepository.save(updateUser);

    if (emails) {
      await this.resetUserEmails(isUserExists);
      await Promise.all(emails.map(item => this.updateEmails(item, updateUser)));
    }

    if (phones) {
      await this.resetUserPhones(isUserExists);
      await Promise.all(phones.map(item => this.updatePhones(item, updateUser)));
    }
  }

  private async createEmails(email: string, user: User) {
    const isEmailExists = await this.userEmailRepository.findOneBy({
      email,
    });
    if (!isEmailExists) {
      const validEmail = this.userEmailRepository.create({ email, user });
      await this.userEmailRepository.save(validEmail);
    } else {
      await this.userRepository.remove(user);
      throw new BadRequestException(`email ${email} já pertence a outro usuário. Usuário não cadastrado.`);
    }
  }

  private async createPhones(phone: string, user: User) {
    const isPhoneExists = await this.userPhoneRepository.findOneBy({
      phone,
    });
    if (!isPhoneExists) {
      const validPhone = this.userPhoneRepository.create({ phone, user });
      await this.userPhoneRepository.save(validPhone);
    } else {
      await this.userRepository.remove(user);
      throw new BadRequestException(`Telefone ${phone} já pertence a outro usuário. Usuário não cadastrado.`);
    }
  }

  private async updateEmails(email: string, user: User) {
    const validEmail = this.userEmailRepository.create({ email, user });
    await this.userEmailRepository.save(validEmail);
  }

  private async updatePhones(phone: string, user: User) {
    const validPhone = this.userPhoneRepository.create({ phone, user });
    await this.userPhoneRepository.save(validPhone);
  }

  private async resetUserEmails(user: User) {
    user.userEmails.map(async item => this.userEmailRepository.remove(item));
  }

  private async resetUserPhones(user: User) {
    user.userPhones.map(async item => await this.userPhoneRepository.remove(item));
  }
}
