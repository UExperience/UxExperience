import { RequestHandler } from 'express';

import { JWTService } from '../services';


export const recoveryAuthenticated: RequestHandler = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({
            errors: { default: 'Não autenticado' }
        });
    }

    const [type, token] = authorization.split(' ');

    if (type !== 'Bearer') {
        return res.status(401).json({
            errors: { default: 'Não autenticado' }
        });
    }

    const jwtData = JWTService.verify(token);
    if (jwtData === 'JWT_SECRET_NOT_FOUND') {
        return res.status(403).json({
            errors: { default: 'Erro ao verificar o token' }
        });
    } else if (jwtData === 'INVALID_TOKEN') {
        return res.status(401).json({
            errors: { default: 'Não autenticado' }
        });
    }

    if (jwtData.scope !== 'recovery') {
        return res.status(401).json({
            errors: { default: 'Escopo inválido' }
        });
    }

    req.headers.idUsuario = jwtData.uid.toString();
    req.headers.passwordResetExpires = jwtData.passwordResetExpires.toString();
    req.headers.passwordResetToken = jwtData.passwordResetToken.toString();

    return next();
};