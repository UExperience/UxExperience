// ormconfig.js
module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: '12343421',
  database: 'UX',
  synchronize: true,
  entities: [
    './src/back/entities/AreaInteresse.ts',
    './src/back/entities/AreaAcademica.ts',
  ],
};
