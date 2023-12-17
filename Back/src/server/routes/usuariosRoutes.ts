import { Router } from 'express';
import { usuariosControler } from '../controllers';
import { ensureAuthenticated, recoveryAuthenticated } from '../shared/middlewares';

const routerUser = Router();

routerUser.post('/esqueceu',usuariosControler.forgotPassWordValidation,usuariosControler.forgotPassWord);
routerUser.put('/esqueceu', recoveryAuthenticated,usuariosControler.putKeyValidation,usuariosControler.putKey);


routerUser.post('/cadastrar',usuariosControler.createValidation,usuariosControler.create);
routerUser.post('/entrar',usuariosControler.singInValidation,usuariosControler.singIn);


routerUser.get('/users', ensureAuthenticated, usuariosControler.getUsersValidation,usuariosControler.getUsers);

export  {routerUser};