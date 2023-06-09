import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  product: string;

  @Column()
  price: number;

  @Column()
  category: string;

  @Column()
  description: string;
}
