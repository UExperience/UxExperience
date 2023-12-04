import { getAll } from './getUsers/GetAll';
import { getByEmail } from './getUsers/GetByEmail';
import { getByName } from './getUsers/GetByName';

export const getUsers = async (req, res) => {
    try {
        const { email, nome, sobrenome } = req.query;

        let result;

        if (email) {
            result = await getByEmail(req, res);
        } else if (nome && sobrenome) {
            result = await getByName(req, res);
        } else {
            result = await getAll(req, res);
        }

        // Aqui você pode manipular 'result' antes de enviar como resposta
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao buscar usuários');
    }
};
