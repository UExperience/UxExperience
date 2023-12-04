import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { usuariosControler } from '../controllers'
import { ensureAuthenticated } from '../shared/middlewares';

const router = Router();

router.post('/esqueceu',usuariosControler.forgotPassWordValidation,usuariosControler.forgotPassWord)


router.post('/cadastrar',usuariosControler.createValidation,usuariosControler.create)
router.post('/entrar',usuariosControler.singInValidation,usuariosControler.singIn)

// Definindo rotas para diferentes tipos de consultas
router.get('/users/email/:email?', ensureAuthenticated ,usuariosControler.getByEmailValidation, usuariosControler.getByEmail);
router.get('/users/nome/:nome?/:sobrenome?', ensureAuthenticated ,usuariosControler.getByNameValidation, usuariosControler.getByName);
router.get('/users/id/:id?', ensureAuthenticated ,usuariosControler.getByIdValidation, usuariosControler.getById);
router.get('/users', ensureAuthenticated, usuariosControler.getAllValidation, usuariosControler.getAll);

export  {router};