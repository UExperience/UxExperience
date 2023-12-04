/* eslint-disable @typescript-eslint/ban-types */
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../../shared/middlewares/Validation';

const prisma = new PrismaClient();

interface IParamsProps {
    email?: string;
}

export const getByEmailValidation = validation((getSchema) => ({
    params: getSchema<IParamsProps>(yup.object().shape({
        email: yup.string().required().email(),
    })),
}));

export const getByEmail = async (req: Request<IParamsProps, {}, {}>, res: Response) => {
    try {
        const { email } = req.params;
        const usuario = await prisma.usuario.findUnique({
            where: {
                email: email,
            },
        });

        if (!usuario) {
            return res.status(404).json({ errors: { id: 'Usuário não encontrado' } });
        }

        return res.status(200).json(usuario);
    } catch (error) {
        console.error('Error fetching user:', error);
        throw new Error('Failed to fetch user');
    }
};


