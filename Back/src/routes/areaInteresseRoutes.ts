import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.post('/areas-interesse', async (req, res) => {
  try {
    const { descricao, ativo } = req.body;
    
    const areaInteresse = await prisma.areaInteresse.create({
      data: {
        descricao,
        ativo,
      },
    });

    res.json(areaInteresse);
  } catch (error) {
    console.error('Erro ao cadastrar Área de Interesse:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

router.put('/areas-interesse/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { descricao, ativo } = req.body;

    const areaInteresse = await prisma.areaInteresse.update({
      where: {
        id: parseInt(id, 10),
      },
      data: {
        descricao,
        ativo,
      },
    });

    if (!areaInteresse) {
      return res.status(404).send('Área de Interesse não encontrada');
    }

    res.json(areaInteresse);
  } catch (error) {
    console.error('Erro ao editar Área de Interesse:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

router.get('/areas-interesse', async (req, res) => {
  try {
    const areasInteresse = await prisma.areaInteresse.findMany();
    res.json(areasInteresse);
  } catch (error) {
    console.error('Erro ao listar áreas de interesse:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

export default router;
