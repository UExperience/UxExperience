import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import * as yup from 'yup';
import  searchByCriteria  from '../../Utils/GetbyCriteriaUser';
import { validation } from '../../shared/middlewares';

interface IQueryProps{
    q?: string;
    page?: number;
    limit?: number;
}

export const getUsersValidation = validation((getSchema) => ({
    query: getSchema<IQueryProps>(yup.object().shape({
        q: yup.string(),
        page: yup.number().moreThan(-1),
        limit: yup.number().moreThan(0),
    })),
}));

const prisma = new PrismaClient();
export const getUsers =async (req: Request<{}, {}, {},IQueryProps>, res: Response) => {
    try {
        let { q, limit, page } = req.query;

        const allowedFields = ['email', 'nome', 'instituicaoParceira', 'sobrenome'];
        const criteria = {};

        if(!limit){
            limit = 10;
        }
        if(!page){
            page = 1;
        }

        if (q) {
            const queryParams = q.toString().split(',');
            let hasInvalidField = false;

            queryParams.forEach((param) => {
                const [key, value] = param.split('=');
                if (allowedFields.includes(key)) {
                    criteria[key] = value;
                } else {
                    hasInvalidField = true;
                }
            });

            if (hasInvalidField) {
                return res.status(400).json({ errors: { default: 'Campos inválidos na busca' } });
            }
        }

        let result;
        if (Object.keys(criteria).length === 0 && q) {

            result = await searchByCriteria(criteria,Number(page), Number(limit));
            // Se 'q' estiver vazio, mas o parâmetro 'q' está presente, busca todos os usuários
        } else {
            result = await searchByCriteria(criteria,Number(page), Number(limit));


            if (result.users.length > 0) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ errors: { default: 'Nenhum usuário encontrado' } });
            }
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ errors: { default: 'Erro ao buscar usuários' } });
    }
};
