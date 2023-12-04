/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from '@prisma/client';
import { Request, RequestHandler, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../../shared/middlewares/Validation';
import { PasswordCrypto } from '../../../shared/services';

const prisma = new PrismaClient();

interface IBodyProps {
    senha: string;
    confirmacaoDeSenha: string;
}



export const putKeyValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        senha: yup.string().nonNullable()
            .required()
            .min(8)
            .matches(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]+$/,
                '${path} deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial',),
        confirmacaoDeSenha: yup.string().required()
            .oneOf([yup.ref('senha'), null],'senhas não são iguais'),
    })),
}));

export const putKey = async (req: Request<{}, {}, IBodyProps>, res: Response) => {

    try {
        const { idUsuario } = req.headers;

        const hashedPassword = await PasswordCrypto.hashPassword(req.body.senha);

        await prisma.usuario.update({
            where: {
                id: Number(idUsuario),
            },
            data: {
                senha: hashedPassword,
            },
        });

        return res.status(200).json({ message: 'Senha atualizada com sucesso' });
    } catch (error) {
        console.error('Erro ao atualizar a senha do usuário:', error);
        return res.status(500).json({ error: 'Erro ao atualizar a senha do usuário' });
    }

};