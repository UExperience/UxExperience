import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.post('/areas-academicas', async (req, res) => {
  try {
    const { descricao, ativo } = req.body;

    const areaAcademica = await prisma.areaAcademica.create({
      data: {
        descricao,
        ativo,
      },
    });

    res.json(areaAcademica);
  } catch (error) {
    console.error('Erro ao cadastrar Área Acadêmica:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

router.put('/areas-academicas/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { descricao, ativo } = req.body;

    const areaAcademica = await prisma.areaAcademica.update({
      where: {
        id: parseInt(id, 10),
      },
      data: {
        descricao,
        ativo,
      },
    });

    if (!areaAcademica) {
      return res.status(404).send('Área Acadêmica não encontrada');
    }

    res.json(areaAcademica);
  } catch (error) {
    console.error('Erro ao editar Área Acadêmica:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

router.get('/areas-academicas', async (req, res) => {
  try {
    const areasAcademicas = await prisma.areaAcademica.findMany();
    res.json(areasAcademicas);
  } catch (error) {
    console.error('Erro ao listar áreas acadêmicas:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

export default router;
