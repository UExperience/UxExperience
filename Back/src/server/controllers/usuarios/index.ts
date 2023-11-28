
import * as create from './create'
import * as getAll from './GetAll'
import * as login from './login'
export const usuariosControler = {
    ...create,
    ...getAll,
    ...login,
};

