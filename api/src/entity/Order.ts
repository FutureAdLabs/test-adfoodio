import { PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, Entity, ManyToMany, JoinTable } from 'typeorm';

import { User } from './Costumer';
import { Food, Product } from './Food';

@Entity({ name: 'order' })
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createDateTime: Date;

  @ManyToOne(type => Costumer, costumer => costumer.orders)
  costumer: Costumer;

  @ManyToMany(type => Food)
  @JoinTable()
  food: Food[];
}