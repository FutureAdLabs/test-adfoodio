import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Costumer {
  @PrimaryGeneratedColumn()
  costumer_id: number;

  @Column()
  full_name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  username: string;

  @Column()
  password: string;
}

