import { Column, CreateDateColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserEmail } from "./email-user.entity";
import { UserPhone } from "./phone-user.entity";

export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ type: "text" })
  name: string;
  @OneToMany(() => UserEmail, userEmail => userEmail.user)
  userEmails: UserEmail[];
  @OneToMany(() => UserPhone, userPhone => userPhone.user)
  userPhones: UserPhone[];
  @CreateDateColumn({ type: "timestamptz" })
  created_at: Date;
}
