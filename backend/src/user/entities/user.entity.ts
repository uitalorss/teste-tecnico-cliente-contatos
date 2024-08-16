import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserEmail } from "./email-user.entity";
import { UserPhone } from "./phone-user.entity";
import { Contact } from "src/contact/entities/contact.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ type: "text" })
  name: string;
  @Column({ type: "text" })
  userName: string;
  @OneToMany(() => UserEmail, userEmail => userEmail.user)
  userEmails: UserEmail[];
  @OneToMany(() => UserPhone, userPhone => userPhone.user)
  userPhones: UserPhone[];
  @OneToMany(() => Contact, contact => contact.user)
  contacts: Contact[];
  @CreateDateColumn({ type: "timestamptz" })
  created_at: Date;
}
