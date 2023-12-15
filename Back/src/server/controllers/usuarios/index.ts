
import * as create from './create';
import * as SingIn from './SignIn';
import * as getUsers from './GetUsers';
import * as RecoveryKey from './recoveryKey/ForgotPassWord';
import * as UpdateKey from './recoveryKey/UpdateKey';
export const usuariosControler = {
    ...create,
    ...SingIn,
    ...getUsers,
    ...RecoveryKey,
    ...UpdateKey,
};

