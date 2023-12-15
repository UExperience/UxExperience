import { PrismaClient } from '@prisma/client';

import  searchByCriteria  from '../../Utils/GetbyCriteriaUser';

const prisma = new PrismaClient();
export const getUsers = async (req, res) => {
    try {
        const { q } = req.query;

        const allowedFields = ['email', 'nome', 'instituicaoParceira','sobrenome']; // Campos permitidos
        const criteria = {};

        const queryParams = q ? q.toString().split(',') : [];
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

        let result;
        if (Object.keys(criteria).length === 0 && queryParams.length > 0) {
            result = await getAll(); // Se 'q' estiver vazio, mas o parâmetro 'q' está presente, busca todos os usuários
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
        return res.status(500).json({ errors: { default: 'Erro ao buscar usuários' } });
    }
};



async function getAll() {
    return await prisma.usuario.findMany();
}
