import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from "../../shared/middlewares/Validation";

const prisma = new PrismaClient();

interface IParamsProps {
    nome?: string;
    sobrenome?: string;
}

export const getByNameValidation = validation((getSchema) => ({
    params: getSchema< IParamsProps>(yup.object().shape({
        nome: yup.string().required().min(1),
        sobrenome: yup.string(),
    })),
}));

export const getByName = async (req: Request<IParamsProps, {}, {}>, res: Response) => {
    try {
        const { nome , sobrenome} = req.params;
        let usuario;

        if (sobrenome) {
            // Fazer a busca considerando nome e sobrenome
            usuario = await prisma.usuario.findMany({
                where: {
                    nome: {
                        startsWith: nome,
                    },
                    sobrenome: {
                        startsWith: sobrenome,
                    },
                },
            });
        } else {
            // Fazer a busca considerando apenas o nome
            usuario = await prisma.usuario.findMany({
                where: {
                    nome: {
                        startsWith: nome,
                    },
                },
            });
        }
        if (!usuario) {
            return res.status(404).json({ errors: { id: 'Usuário não encontrado' } });
        }

        return res.status(200).json(usuario);
    } catch (error) {
        console.error("Error fetching user:", error);
        throw new Error("Failed to fetch user");
    }
};


