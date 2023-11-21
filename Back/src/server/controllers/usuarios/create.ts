import { PrismaClient } from '@prisma/client';
import { Request, RequestHandler, Response } from 'express';
import * as yup from 'yup';
import { validation } from "../../shared/middlewares/Validation";
import isEmailUnique from "../../shared/services/isEmailUnique";
const prisma = new PrismaClient();

interface IUsuario {
    nome: string;
    sobrenome: string;
    email: string;
    perfilDeAcesso: string;
    tipo: string;
    senha: string;
    instituicaoParceira: string;
    telefone: string;
    areaAcademica: string;
    cargo: string;
    linkCurriculo: string;
    atividadesDeInteresse?: string[];
    revisor?: string[];
    data: string;
    hora: string;
    aprovacao: boolean;
    ativo: boolean;
}


const bodyValidation: yup.ObjectSchema<IUsuario> = yup.object().shape({
    nome: yup.string().required().min(3),
    sobrenome: yup.string().required(),
    email: yup.string().required().email(),
    perfilDeAcesso: yup
        .string()
        .oneOf(['Reitor', 'Gestor de RI', 'Docente', 'Discentes', 'Empreendedores', 'Parceiro'])
        .required(),
    tipo: yup.string().oneOf(['PJ', 'PF', 'White Label']).required(),
    senha: yup.string()
        .required()
        .min(8)
        .matches(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]+$/),
    instituicaoParceira: yup.string().required(),
    telefone: yup.string()
        .required()
        .matches(/^\(\d{2}\) \d-\d{4}-\d{4}$/),
    areaAcademica: yup.string().required(),
    cargo: yup.string()
        .required()
        .oneOf(['Cargo 1', 'Cargo 2', 'Cargo 3']) // Lista de cargos permitidos
        .strict(true),
    linkCurriculo: yup.string().required()
        .url('Formato de URL inválido')
        .matches(/^(http:\/\/lattes.cnpq.br\/|https:\/\/orcid.org\/)/),

    atividadesDeInteresse: yup.array().of(
        yup.string().oneOf([
            'Atividade 1',
            'Atividade 2',
            'Atividade 3',
            // Adicionar outras atividades conforme necessário
        ])
    ),
    revisor: yup.array().of(
        yup.string().oneOf([
            'Revisor de revistas acadêmicas',
            'Coordenador de mesa em eventos',
            'Avaliador de artigos científicos em eventos',
            'Palestrante em eventos técnico-científicos',
            // Adicionar outras opções de revisor conforme necessário
        ])
    ),
    data: yup.string().required().matches(/^\d{4}-\d{2}-\d{2}$/),
    hora: yup.string().required().matches(/^([01]\d|2[0-3]):([0-5]\d)$/),
    aprovacao: yup.boolean().required(),
    ativo: yup.boolean().required(),
});
 
//export const createBodyValidation = validation({
body: bodyValidation
//});
export const createValidation = validation((getSchema) => ({
    body: getSchema<IUsuario>(bodyValidation),
}));

export const create = async (req: Request<{}, {}, IUsuario>, res: Response) => {
    if (await isEmailUnique(req.body.email)) {
        try {
            await prisma.usuario.create({
                data: req.body,
            });
            console.log(req.body);
            return res.send('Create!');
        } catch (error) {
            console.error(error);
            return res.status(500).send('Error creating user');
        }
    } else {
        return res.status(400).send("Email já em uso");
    }

};