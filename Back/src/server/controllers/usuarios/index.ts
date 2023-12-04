
import * as create from './create'
import * as getAll from './GetAll'
import * as SingIn from './SignIn'
import * as getByName from './GetByName'
import * as getById from './GetById'
import * as getByEmail from './GetByEmail'
import * as RecoveryKey from './ForgotPassWord'
export const usuariosControler = {
    ...create,
    ...getAll,
    ...SingIn,
    ...getByName,
    ...getById,
    ...getByEmail,
    ...RecoveryKey
};

