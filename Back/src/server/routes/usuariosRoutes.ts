import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { usuariosControler } from '../controllers'

const router = Router();


router.post('/login',usuariosControler.createValidation,usuariosControler.create)

router.get('/users',usuariosControler.getAllValidation, usuariosControler.getAll)


export  {router};
