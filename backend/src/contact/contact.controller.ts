import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Res } from "@nestjs/common";
import { ContactService } from "./contact.service";
import { CreateContactRequestDTO } from "./dto/create-contact.dto";
import { instanceToInstance } from "class-transformer";
import { ZodValidationPipe } from "nestjs-zod";
import { partialContactSchema, updateContactRequestDTO } from "./dto/update-contact.dto";

@Controller("user/:user_id/contact")
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @HttpCode(201)
  public async create(@Res() res, @Param("user_id") user_id: string, @Body() createContactRequest: CreateContactRequestDTO) {
    await this.contactService.create({ user_id: user_id, name: createContactRequest.name, emails: createContactRequest.emails, phones: createContactRequest.phones });
    return res.json({ message: "contato criado com sucesso." });
  }

  /*@Get(":id")
  public async find(@Res() res, @Param("id") id: string) {
    const contacts = await this.contactService.find(id);
    return res.json(instanceToInstance(contacts));
  }*/

  @Delete(":user_id/:contact_id")
  @HttpCode(204)
  public async remove(@Res() res, @Param("user_id") user_id: string, @Param("contact_id") contact_id: string) {
    await this.contactService.remove({ contact_id, user_id });
    return res.send();
  }

  @Put(":user_id/:contact_id")
  @HttpCode(204)
  public async update(
    @Res() res,
    @Param("user_id") user_id: string,
    @Param("contact_id") contact_id,
    @Body(new ZodValidationPipe(partialContactSchema)) updateContactRequest: updateContactRequestDTO,
  ) {
    await this.contactService.update({
      user_id,
      contact_id,
      name: updateContactRequest.name,
      emails: updateContactRequest.emails,
      phones: updateContactRequest.phones,
    });

    return res.send();
  }
}
