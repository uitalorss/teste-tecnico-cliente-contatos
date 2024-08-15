import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

export class UserEmail {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ type: "text" })
  email: string;
  @ManyToOne(() => User, user => user.userEmails, {
    cascade: true,
  })
  @JoinColumn({ name: "user_id" })
  user: User;
}
