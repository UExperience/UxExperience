/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prisma, PrismaClient } from '@prisma/client';
import { Request, RequestHandler, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares/Validation';
import isEmailUnique from '../../Utils/isEmailUnique';
import { PasswordCrypto } from '../../shared/services';
const prisma = new PrismaClient();

interface IAreaAcademica {
    descricao: string;
    ativo: boolean;
}

const bodyValidation: yup.ObjectSchema<IAreaAcademica> = yup.object().shape({
    descricao: yup.string().required(),
    ativo: yup.boolean().required(),
});

export const areaAcademicaValidation = validation((getSchema) => ({
    body: getSchema<IAreaAcademica>(bodyValidation),
}));

export const create = async (req: Request<{}, {}, IAreaAcademica>, res: Response) => {
    try {
        const { descricao, ativo } = req.body;
        const areaAcademica = await prisma.areaAcademica.create({
            data: {
                descricao,
                ativo,
            },
        });
        res.json(areaAcademica);
    } catch (error) {
        console.error('Erro ao cadastrar Área Acadêmica:', error);
        res.status(500).send('Erro interno do servidor');
    }
};
