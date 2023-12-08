
import { PrismaClient } from '@prisma/client';
import { server } from './server/Server'

const port = process.env.PORT || 3003;
const prisma = new PrismaClient();
const cors = require('cors');
const app = server;

app.use(cors());

server.listen(port, () => {
    console.log(`Servidor está ouvindo na porta ${port}`);
  });

process.on('beforeExit', () => {
  prisma.$disconnect();
});
