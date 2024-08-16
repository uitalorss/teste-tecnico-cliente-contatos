import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { UserEmail } from "./entities/email-user.entity";
import { UserPhone } from "./entities/phone-user.entity";
import { ResponseUserDTO } from "./dto/response-user.dto";
import { CreateUserDTO } from "./dto/create-user.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(UserEmail)
    private userEmailRepository: Repository<UserEmail>,

    @InjectRepository(UserPhone)
    private userPhoneRepository: Repository<UserPhone>,
  ) {}

  public async findAll(): Promise<ResponseUserDTO[]> {
    const users = await this.userRepository.find({
      relations: {
        userEmails: true,
        userPhones: true,
      },
    });
    return users;
  }

  public async create({ name, username, emails, phones }: CreateUserDTO): Promise<ResponseUserDTO> {
    const user = this.userRepository.create({
      name,
      userName: username,
    });

    await this.userRepository.save(user);

    await Promise.all(emails.map(item => this.createEmails(item, user)));

    await Promise.all(phones.map(item => this.createPhones(item, user)));

    return user;
  }

  private async createEmails(email: string, user: User) {
    const isEmailExists = await this.userEmailRepository.findOneBy({
      email,
    });
    if (isEmailExists) {
      throw new BadRequestException("Email já pertence a outro usuário.");
    }

    const validEmail = this.userEmailRepository.create({ email, user });
    await this.userEmailRepository.save(validEmail);
  }

  private async createPhones(phone: string, user: User) {
    const isPhoneExists = await this.userPhoneRepository.findOneBy({
      phone,
    });
    if (isPhoneExists) {
      throw new BadRequestException("Telefone já pertence a outro usuário.");
    }

    const validPhone = this.userPhoneRepository.create({ phone, user });
    await this.userPhoneRepository.save(validPhone);
  }
}
