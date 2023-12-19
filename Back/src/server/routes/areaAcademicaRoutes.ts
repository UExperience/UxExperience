import { Router } from 'express';
import { areaAcademicaController } from '../controllers';
import { ensureAuthenticated} from '../shared/middlewares';
import { areaAcademicaValidation } from '../controllers/areaAcademica/create';

const routerAreaAcademica = Router();

routerAreaAcademica.post('/cadastrarAreaAcademica', ensureAuthenticated, areaAcademicaController.areaAcademicaValidation, areaAcademicaController.create);

routerAreaAcademica.put('/atualizarAreaAcademica', ensureAuthenticated , areaAcademicaController.updateAreaAcademica, areaAcademicaController.updateAreaAcademica);


routerAreaAcademica.get('/areaAcademica', areaAcademicaController.getAreasAcademica);

export  {routerAreaAcademica};