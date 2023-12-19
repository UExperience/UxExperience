/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from '@prisma/client';
import { Request, RequestHandler, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares/Validation';


const prisma = new PrismaClient();


interface IBodyAreaAcademica {
    id: number;
    descricao?: string;
    ativo?: boolean;
}

const updateValidation: yup.ObjectSchema<IBodyAreaAcademica> = yup.object().shape({
    id : yup.number().required(),
    descricao: yup.string(),
    ativo: yup.boolean(),
});



export const updateAreaAcademica: RequestHandler<{}, {}, IBodyAreaAcademica> = async (req, res) => {
    try {
        const { descricao, ativo, id } = req.body;

        if (!id) {
            return res.status(400).json({ error: 'ID da área acadêmica não fornecido' });
        }

        const areaAcademica = await prisma.areaAcademica.findUnique({
            where: {
                id: Number(id)
            }
        });

        if (!areaAcademica) {
            return res.status(404).json({ error: 'Área acadêmica não encontrada' });
        }

        const userDataToUpdate: Partial<IBodyAreaAcademica> = {};

        // Verifica se a descrição foi fornecida e se é diferente da atual antes de atualizá-la
        if (descricao !== undefined && descricao !== areaAcademica.descricao) {
            userDataToUpdate.descricao = descricao;
        }

        // Verifica se o status ativo foi fornecido e se é diferente do atual antes de atualizá-lo
        if (ativo !== undefined && ativo !== areaAcademica.ativo) {
            userDataToUpdate.ativo = ativo;
        }

        if (Object.keys(userDataToUpdate).length === 0) {
            return res.status(400).json({ error: 'Nenhum campo para atualizar foi fornecido ou os valores são os mesmos' });
        }

        const updatedAreaAcademica = await prisma.areaAcademica.update({
            where: {
                id: Number(id)
            },
            data: userDataToUpdate,
        });

        return res.status(200).json({ message: 'Área acadêmica atualizada com sucesso', updatedAreaAcademica });
    } catch (error) {
        console.error('Erro ao atualizar a área acadêmica:', error);
        return res.status(500).json({ error: 'Erro ao atualizar a área acadêmica' });
    }
};
