import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { ContactService } from "./contact.service";
import { CreateContactRequestDTO, createContactSchema } from "./dto/create-contact.dto";
import { ZodValidationPipe } from "nestjs-zod";
import { partialContactSchema, updateContactRequestDTO } from "./dto/update-contact.dto";
import { AuthGuard } from "src/auth/auth.guard";
import { instanceToInstance } from "class-transformer";

@Controller("user/contact")
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @UseGuards(AuthGuard)
  @Post()
  @HttpCode(201)
  public async create(@Res() res, @Body(new ZodValidationPipe(createContactSchema)) createContactRequest: CreateContactRequestDTO) {
    await this.contactService.create({ user_id: res.user, name: createContactRequest.name, emails: createContactRequest.emails, phones: createContactRequest.phones });
    return res.json({ message: "contato criado com sucesso." });
  }

  @UseGuards(AuthGuard)
  @Get()
  public async find(@Req() req, @Res() res) {
    const contacts = await this.contactService.findById(req.user);
    return res.json(instanceToInstance(contacts));
  }

  @UseGuards(AuthGuard)
  @Delete(":contact_id")
  @HttpCode(204)
  public async remove(@Req() req, @Res() res, @Param("contact_id") contact_id: string) {
    await this.contactService.remove({ contact_id, user_id: req.user });
    return res.send();
  }

  @UseGuards(AuthGuard)
  @Put(":contact_id")
  @HttpCode(204)
  public async update(@Req() req, @Res() res, @Param("contact_id") contact_id, @Body(new ZodValidationPipe(partialContactSchema)) updateContactRequest: updateContactRequestDTO) {
    await this.contactService.update({
      user_id: req.user,
      contact_id,
      name: updateContactRequest.name,
      emails: updateContactRequest.emails,
      phones: updateContactRequest.phones,
    });

    return res.send();
  }
}
