
import * as create from './create';
import * as getAll from './getUsers/GetAll';
import * as SingIn from './SignIn';
import * as getUsers from './GetUsers';
import * as RecoveryKey from './recoveryKey/ForgotPassWord';
import * as UpdateKey from './recoveryKey/UpdateKey';
export const usuariosControler = {
    ...create,
    ...getAll,
    ...SingIn,
    ...getUsers,
    ...RecoveryKey,
    ...UpdateKey,
};

