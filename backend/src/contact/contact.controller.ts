import { Body, Controller, Get, HttpCode, Param, Post, Res } from "@nestjs/common";
import { ContactService } from "./contact.service";
import { CreateContactRequestDTO } from "./dto/create-contact.dto";
import { instanceToInstance } from "class-transformer";

@Controller("user/contact")
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post(":id")
  @HttpCode(201)
  public async create(@Res() res, @Param("id") id: string, @Body() createContactRequest: CreateContactRequestDTO) {
    await this.contactService.create({ user_id: id, name: createContactRequest.name, emails: createContactRequest.emails, phones: createContactRequest.phones });
    return res.json({ message: "contato criado com sucesso." });
  }

  @Get(":id")
  public async find(@Res() res, @Param("id") id: string) {
    const contacts = await this.contactService.find(id);
    return res.json(instanceToInstance(contacts));
  }
}
