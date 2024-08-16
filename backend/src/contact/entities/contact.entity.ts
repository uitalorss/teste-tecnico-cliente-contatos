import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ContactEmail } from "./email-contact.entity";
import { ContactPhone } from "./phone-contact.entity";

@Entity("contacts")
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ type: "text" })
  name: string;
  @OneToMany(() => ContactEmail, contactEmail => contactEmail.contact)
  contactEmails: ContactEmail[];
  @OneToMany(() => ContactPhone, contactPhone => contactPhone.contact)
  contactPhones: ContactPhone[];
  @ManyToOne(() => User, user => user.contacts, {
    cascade: true,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "user_id" })
  user: User;
}
