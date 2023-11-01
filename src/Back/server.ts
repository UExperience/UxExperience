import express from 'express';
import { Express } from 'express';
import bodyParser from 'body-parser';
import { createConnection } from 'typeorm';
import areaInteresseRoutes from './back/routes/areaInteresseRoutes';
import areaAcademicaRoutes from './back/routes/areaAcademicaRoutes';

const app: Express = express();
const port = process.env.PORT || 5173;

app.use(bodyParser.json());

createConnection()
  .then(() => {
    app.use('/api', areaInteresseRoutes);
    app.use('/api', areaAcademicaRoutes);

    app.listen(port, () => {
      console.log(`Servidor está ouvindo na porta ${port}`);
    });
  })
  .catch((error) => {
    console.error('Erro na conexão com o banco de dados:', error);
  });
