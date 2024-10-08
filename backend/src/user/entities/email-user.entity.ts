import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity("userEmails")
export class UserEmail {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ type: "text" })
  email: string;
  @ManyToOne(() => User, user => user.userEmails, {
    cascade: true,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "user_id" })
  user: User;
}
