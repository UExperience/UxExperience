import * as create from './create';
import * as updateAreaAcademica from './Update';
import * as getAreaAcademica from './GetAreaAcademica';
export const areaAcademicaController = {
    ...create,
    ...updateAreaAcademica,
    ...getAreaAcademica,
};