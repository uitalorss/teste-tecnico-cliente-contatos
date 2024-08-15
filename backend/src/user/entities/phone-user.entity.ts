import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

export class UserPhone {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ type: "text" })
  phone: string;
  @ManyToOne(() => User, user => user.userPhones, {
    cascade: true,
  })
  @JoinColumn({ name: "user_id" })
  user: User;
}
