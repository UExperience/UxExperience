import express from 'express';
import bodyParser from 'body-parser';
import { PrismaClient } from '@prisma/client';
import areaInteresseRoutes from './routes/areaInteresseRoutes';
import areaAcademicaRoutes from './routes/areaAcademicaRoutes';

const app = express();
const port = process.env.PORT || 3000;
const prisma = new PrismaClient();

app.use(bodyParser.json());

app.use([
    areaInteresseRoutes,
    areaAcademicaRoutes
]);


app.listen(port, () => {
    console.log(`Servidor está ouvindo na porta ${port}`);
  });

// Certifique-se de fechar a conexão do Prisma ao encerrar o aplicativo
process.on('beforeExit', () => {
  prisma.$disconnect();
});
