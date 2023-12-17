import { Router } from 'express';
import { areaAcademicaController } from '../controllers';
import { ensureAuthenticated} from '../shared/middlewares';

const routerAreaAcademica = Router();

routerAreaAcademica.post('/cadastrarAreaAcademica', areaAcademicaController.areaAcademicaValidation, areaAcademicaController.create);

routerAreaAcademica.get('/areaAcademica', ensureAuthenticated);

export  {routerAreaAcademica};