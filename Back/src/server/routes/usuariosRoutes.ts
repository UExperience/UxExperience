import { Router } from 'express';
import { usuariosControler } from '../controllers';
import { ensureAuthenticated, recoveryAuthenticated } from '../shared/middlewares';

const router = Router();

router.post('/esqueceu',usuariosControler.forgotPassWordValidation,usuariosControler.forgotPassWord);
router.put('/esqueceu', recoveryAuthenticated,usuariosControler.putKeyValidation,usuariosControler.putKey);


router.post('/cadastrar',usuariosControler.createValidation,usuariosControler.create);
router.post('/entrar',usuariosControler.singInValidation,usuariosControler.singIn);


router.get('/users', ensureAuthenticated, usuariosControler.getUsersValidation,usuariosControler.getUsers);

export  {router};