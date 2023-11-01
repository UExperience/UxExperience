//areaInteresseRoutes
import { Router } from 'express';
import { Request, Response } from 'express';
import { EntityManager, getRepository } from 'typeorm';
import AreaInteresse from '../entities/AreaInteresse';

const router = Router();
const areaInteresseRepository = getRepository(AreaInteresse);

router.post('/areas-interesse', async (req: Request, res: Response) => {
  try {
    const { descricao, ativo } = req.body;
    const areaInteresse = new AreaInteresse();
    areaInteresse.descricao = descricao;
    areaInteresse.ativo = ativo;
    await areaInteresseRepository.save(areaInteresse);
    res.json(areaInteresse);
  } catch (error) {
    console.error('Erro ao cadastrar Área de Interesse:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

router.put('/areas-interesse/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { descricao, ativo } = req.body;
    const areaInteresse = await areaInteresseRepository.findOne(parseInt(id, 10));
    if (!areaInteresse) {
      return res.status(404).send('Área de Interesse não encontrada');
    }
    areaInteresse.descricao = descricao;
    areaInteresse.ativo = ativo;
    await areaInteresseRepository.save(areaInteresse);
    res.json(areaInteresse);
  } catch (error) {
    console.error('Erro ao editar Área de Interesse:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

router.get('/areas-interesse', async (req: Request, res: Response) => {
  try {
    const areasInteresse = await areaInteresseRepository.find();
    res.json(areasInteresse);
  } catch (error) {
    console.error('Erro ao listar áreas de interesse:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

export default router;
