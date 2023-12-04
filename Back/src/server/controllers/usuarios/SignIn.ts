import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares/Validation';
import { JWTService, PasswordCrypto } from '../../shared/services';


const prisma = new PrismaClient();

interface IBodyProps {
    senha: string;
    email: string;
}

export const singInValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        email: yup.string().required().email().nonNullable(),
        senha: yup.string().nonNullable()
            .required()
            .min(8)
            .matches(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]+$/,
                '${path} deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial',),
    })),
}));

// eslint-disable-next-line @typescript-eslint/ban-types
export const singIn = async (req: Request<{}, {}, IBodyProps>, res: Response) => {
    try {
        const { email, senha } = req.body;
        const usuario = await prisma.usuario.findFirst({
            where: {
                email: email,
            },
        });

        if (!usuario) {
            return res.status(404).json({ errors: { default: 'Email ou senha inválidos' } });
        }

        const passwordMatch = await PasswordCrypto.verifyPassword(senha, usuario.senha);

        if (!passwordMatch) {
            return res.status(404).json({ errors: { default: 'Email ou senha inválidos' } });
        } else {
            const acessToken = JWTService.sign({ uid: usuario.id, scope: 'login'});
            if (acessToken === 'JWT_SECRET_NOT_FOUND') {
                return res.status(500).json({ errors: { default: 'Erro ao gerar token de acesso' } });
            }

            return res.status(200).json({ acessToken: acessToken });
        }
    } catch (error) {
        console.error('Error fetching user:', error);
        throw new Error('Failed to fetch user');
    }
};


