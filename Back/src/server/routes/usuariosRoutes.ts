import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { usuariosControler } from '../controllers'

const router = Router();


router.post('/cadastrar',usuariosControler.createValidation,usuariosControler.create)
router.post('/entrar',usuariosControler.singInValidation,usuariosControler.singIn)

// Definindo rotas para diferentes tipos de consultas
router.get('/users/email/:email?', usuariosControler.getByEmailValidation, usuariosControler.getByEmail);
router.get('/users/nome/:nome?/:sobrenome?', usuariosControler.getByNameValidation, usuariosControler.getByName);
router.get('/users/id/:id?', usuariosControler.getByIdValidation, usuariosControler.getById);
router.get('/users', usuariosControler.getAllValidation, usuariosControler.getAll);




export  {router};