// AreaInteresse.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class AreaInteresse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;

  @Column()
  ativo: boolean;
}
