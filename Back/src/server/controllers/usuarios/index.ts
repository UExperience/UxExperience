
import * as create from './create'
import * as getAll from './GetAll'
import * as SingIn from './SignIn'
import * as getByName from './GetByName'
import * as getById from './GetById'
import * as getByEmail from './GetByEmail'
export const usuariosControler = {
    ...create,
    ...getAll,
    ...SingIn,
    ...getByName,
    ...getById,
    ...getByEmail
};

