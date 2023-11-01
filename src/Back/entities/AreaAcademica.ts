// AreaAcademica.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class AreaAcademica {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;

  @Column()
  ativo: boolean;
}
