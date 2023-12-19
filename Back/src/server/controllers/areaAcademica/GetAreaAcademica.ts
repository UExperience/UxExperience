import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import * as yup from 'yup';
import searchByCriteria from '../../Utils/GetbyCriteriaUser';
import { validation } from '../../shared/middlewares';

interface IQueryProps {
    q?: string;
    page?: number;
    limit?: number;
}

export const getAreaAcademicaValidation = validation((getSchema) => ({
    query: getSchema<IQueryProps>(yup.object().shape({
        q: yup.string(),
        page: yup.number().moreThan(-1),
        limit: yup.number().moreThan(0),
    })),
}));

const prisma = new PrismaClient();
export const getAreasAcademica = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
    try {
        let { q, limit, page } = req.query;

        if (!limit) {
            limit = 10;
        }
        if (!page) {
            page = 1;
        }

        let result;

        if (q) {
            const queryParams = q.toString().split(',');

            let descricaoSearch = '';
            let ativoSearch;

            queryParams.forEach((param) => {
                const [key, value] = param.split('=');

                if (key === 'descricao') {
                    descricaoSearch = value;
                } else if (key === 'ativo') {
                    ativoSearch = value === 'true';
                }
            });

            let conditions: any = {};

            if (descricaoSearch) {
                conditions.descricao = { contains: descricaoSearch };
            }

            if (ativoSearch !== undefined) {
                conditions.ativo = ativoSearch;
            }

            result = await prisma.areaAcademica.findMany({
                where: conditions,
                select: {
                    id: true,
                    descricao: true,
                    ativo: true,
                    // Adicione outros campos que deseja retornar
                },
                take: Number(limit),
                skip: (Number(page) - 1) * Number(limit),
            });

            if (result.length > 0) {
                res.status(200).json({ areaAcademica: result });
            } else {
                res.status(404).json({ errors: { default: 'Nenhuma área acadêmica encontrada' } });
            }
        } else {
            result = await prisma.areaAcademica.findMany({
                select: {
                    descricao: true,
                    ativo: true,
                    // Adicione outros campos que deseja retornar
                },
                take: Number(limit),
                skip: (Number(page) - 1) * Number(limit),
            });

            if (result.length > 0) {
                res.status(200).json({ areaAcademica: result });
            } else {
                res.status(404).json({ errors: { default: 'Nenhuma área acadêmica encontrada' } });
            }
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ errors: { default: 'Erro ao buscar áreas acadêmicas' } });
    }
};
