/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from '@prisma/client';
import { Request, RequestHandler, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../../shared/middlewares/Validation';

const prisma = new PrismaClient();

interface IQueryProps {
    page?: number;
    limit?: number;
    filter?: string;
}


export const getAllValidation = validation((getSchema) => ({
    query: getSchema<IQueryProps>(yup.object().shape({
        page: yup.number().moreThan(0),
        limit: yup.number().moreThan(0),
        filter: yup.string(),
    })),
}));

export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {

    console.log('idUsuario', req.headers.idUsuario);
    try {
        const usuarios = await prisma.usuario.findMany();
        return res.json(usuarios);
    } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error('Failed to fetch users');
    }

};