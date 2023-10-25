//AreaInteresse.js
const { Entity, PrimaryGeneratedColumn, Column } = require('typeorm');

@Entity()
class AreaInteresse {
  @PrimaryGeneratedColumn()
  id;

  @Column()
  descricao;

  @Column()
  ativo;
}

module.exports = AreaInteresse;
