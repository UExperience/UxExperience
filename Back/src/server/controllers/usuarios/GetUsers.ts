import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getUsers = async (req, res) => {
    try {
        const { q } = req.query;

        const criteria = {};
        const queryParams = q.toString().split(',');
        queryParams.forEach((param) => {
            const [key, value] = param.split('=');
            criteria[key] = value;
        });

        let result;
        if (Object.keys(criteria).length ===0) {
            result = await getAll();
        } else {
            result = await searchByCriteria(criteria);

            if (result.length > 0) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ errors: { default: 'Nenhum usuário encontrado' } });
            }
        }
    } catch (error) {
        console.error(error);
        return res.status(404).json({ errors: { default: 'Erro ao buscar usuários' } });
    }
};


async function searchByCriteria(criteria) {
    const result = await prisma.usuario.findMany({
        where: {
            AND: Object.entries(criteria).map(([key, value]) => ({ [key]: value })),
        },
        select: {
            nome: true,
            email: true,
            instituicaoParceira: true,
            //adicionar cnpj da instituição parceira no futuro
        },
    });

    return result;
}

async function getAll() {
    return await prisma.usuario.findMany();
}
