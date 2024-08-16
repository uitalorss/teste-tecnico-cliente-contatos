import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./contact.entity";

@Entity("contactEmails")
export class ContactEmail {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ type: "text" })
  email: string;
  @ManyToOne(() => Contact, contact => contact.contactEmails, {
    cascade: true,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "contact_id" })
  contact: Contact;
}
