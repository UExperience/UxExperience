import { Router } from 'express';
import { usuariosControler } from '../controllers'

const router = Router();

router.post('/login', usuariosControler.create)

export default router;
