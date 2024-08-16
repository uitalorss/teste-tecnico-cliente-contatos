import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./contact.entity";

@Entity("contactPhones")
export class ContactPhone {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ type: "text" })
  phone: string;
  @ManyToOne(() => Contact, contact => contact.contactPhones, {
    cascade: true,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "contact_id" })
  contact: Contact;
}
