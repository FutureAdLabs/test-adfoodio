import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";

@Entity()
export class Food {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  precio: number;

  @Column()
  description: string;

  @Column()
  category: string;

}