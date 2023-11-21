
import { PrismaClient } from '@prisma/client';
import { server } from './server/Server'


const port = process.env.PORT || 3003;
const prisma = new PrismaClient();

server.listen(port, () => {
    console.log(`Servidor está ouvindo na porta ${port}`);
  });

// Certifique-se de fechar a conexão do Prisma ao encerrar o aplicativo
process.on('beforeExit', () => {
  prisma.$disconnect();
});
