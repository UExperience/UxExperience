/* eslint-disable @typescript-eslint/ban-types */
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../../shared/middlewares/Validation';

const prisma = new PrismaClient();

interface IParamsProps {
    id?: number;
}

export const getByIdValidation = validation((getSchema) => ({
    params: getSchema<IParamsProps>(yup.object().shape({
        id: yup.number().required().integer().moreThan(0),
    })),
}));

export const getById = async (req: Request<IParamsProps, {}, {}>, res: Response) => {
    try {
        const { id } = req.params;
        const usuario = await prisma.usuario.findUnique({
            where: {
                id: Number(id),
            },
        });

        if (!usuario) {
            return res.status(200).status(404).json({ errors: { id: 'Usuário não encontrado' } });
        }

        return res.json(usuario);
    } catch (error) {
        console.error('Error fetching user:', error);
        throw new Error('Failed to fetch user');
    }
};


