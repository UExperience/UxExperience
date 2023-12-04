/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../../shared/middlewares/Validation';
import { JWTService, PasswordCrypto } from '../../../shared/services';
import * as crypto from 'crypto'; // Corrigi o nome do pacote crypto
import * as nodemailer from 'nodemailer';


const prisma = new PrismaClient();

interface IBodyProps {
    email: string;
}

export const forgotPassWordValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        email: yup.string().required().email().nonNullable()
    })),
}));

export const forgotPassWord = async (req: Request<{}, {}, IBodyProps>, res: Response) => {
    try {
        const { email } = req.body;
        const usuario = await prisma.usuario.findFirst({
            where: {
                email: email,
            },
        });

        if (!usuario) {
            return res.status(404).json({ errors: { default: 'Email não encontrado' } });
        }

        const token = crypto.randomBytes(20).toString('hex');
        const now = new Date();
        now.setHours(now.getHours() + 1);

        // Gere o token JWT incluindo os campos de redefinição de senha no payload
        const accessToken = JWTService.recovery({
            uid: usuario.id,
            scope: 'recovery',
            passwordResetToken: token,
            passwordResetExpires: now.toString(),
        });

        if (accessToken === 'JWT_SECRET_NOT_FOUND') {
            return res.status(500).json({ errors: { default: 'Erro ao gerar token de acesso' } });
        }

        const transport = nodemailer.createTransport({
            host: 'sandbox.smtp.mailtrap.io',
            port: 2525,
            auth: {
                user: 'cbdcf2dab0ebb6',
                pass: '0ad3b017ab4902'
            }
        });

        transport.sendMail({
            from: 'System <i.e f8c98d66a6-c99ddd+1@inbox.mailtrap.io>',
            to: usuario.email,
            subject: 'Recuperação de senha',
            html: `<p> Olá, para recuperar sua senha, clique
                <a href="http://localhost:3003/esqueceu">aqui</a> </p>`

        }).then(
            () => {
                return res.status(200).json({ ok: { default: 'Email enviado', token: accessToken } });
            }
        );

    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
};
