// areaAcademicaRoutes.ts
import { Router } from 'express';
import { Request, Response } from 'express';
import { EntityManager, getRepository } from 'typeorm';
import AreaAcademica from '../entities/AreaAcademica';

const router = Router();
const areaAcademicaRepository = getRepository(AreaAcademica);

router.post('/areas-academicas', async (req: Request, res: Response) => {
  try {
    const { descricao, ativo } = req.body;
    const areaAcademica = new AreaAcademica();
    areaAcademica.descricao = descricao;
    areaAcademica.ativo = ativo;
    await areaAcademicaRepository.save(areaAcademica);
    res.json(areaAcademica);
  } catch (error) {
    console.error('Erro ao cadastrar Área Acadêmica:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

router.put('/areas-academicas/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { descricao, ativo } = req.body;
    const areaAcademica = await areaAcademicaRepository.findOne(parseInt(id, 10));
    if (!areaAcademica) {
      return res.status(404).send('Área Acadêmica não encontrada');
    }
    areaAcademica.descricao = descricao;
    areaAcademica.ativo = ativo;
    await areaAcademicaRepository.save(areaAcademica);
    res.json(areaAcademica);
  } catch (error) {
    console.error('Erro ao editar Área Acadêmica:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

router.get('/areas-academicas', async (req: Request, res: Response) => {
  try {
    const areasAcademicas = await areaAcademicaRepository.find();
    res.json(areasAcademicas);
  } catch (error) {
    console.error('Erro ao listar áreas acadêmicas:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

export default router;
