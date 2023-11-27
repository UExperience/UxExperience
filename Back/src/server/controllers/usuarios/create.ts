import { Prisma, PrismaClient } from '@prisma/client';
import { Request, RequestHandler, Response } from 'express';
import * as yup from 'yup';
import { validation } from "../../shared/middlewares/Validation";
import isEmailUnique from "../../shared/services/isEmailUnique";
import bcrypt from 'bcrypt'
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
        .matches(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]+$/,
        '${path} deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial',),
    instituicaoParceira: yup.string().required(),
    telefone: yup.string()
        .required()
        .matches(/^\(\d{3}\) \d{5}-\d{4}$/,
        '${path} deve seguir o formato (DDD) XXXXX-XXXX'),
    areaAcademica: yup.string().required(),
    cargo: yup.string()
        .required()
        .oneOf(['Cargo 1', 'Cargo 2', 'Cargo 3']) // Lista de cargos permitidos
        .strict(true),
    linkCurriculo: yup.string().required()
        .url('Formato de URL inválido')
        .matches(/^(https?:\/\/(?:lattes\.cnpq\.br|orcid\.org)\/[\d-]+)$/i,
        'A url deve ser do lattes ou do orcid'),

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
    data: yup.string(),
    hora: yup.string(),
    aprovacao: yup.boolean().required(),
    ativo: yup.boolean().required(),
});


export const createValidation = validation((getSchema) => ({
    body: getSchema<IUsuario>(bodyValidation),
}));


export const create = async (req: Request<{}, {}, IUsuario>, res: Response) => {
    
    const hashedSenha = await bcrypt.hash(req.body.senha, 8); //Fazendo a criptografia da senha

    if (await isEmailUnique(req.body.email)) {
        try {
            const now = new Date();
            const day = String(now.getDate()).padStart(2, '0'); // Obtém o dia com zero à esquerda se necessário
            const month = String(now.getMonth() + 1).padStart(2, '0'); // Obtém o mês com zero à esquerda se necessário
            const year = now.getFullYear(); // Obtém o ano no formato YYYY

            const formattedDate = `${day}/${month}/${year}`;

            const userData: Prisma.UsuarioCreateInput = {
                ...req.body,
                data: formattedDate, // Obtém a data no formato 'YYYY-MM-DD'
                hora: now.toTimeString().split(' ')[0], // Obtém a hora no formato 'HH:MM:SS'
                senha: hashedSenha, //Armazenando a senha criptografa
            };

            await prisma.usuario.create({
                data: userData,
            })
            console.log(req.body);
            return res.status(201).send('Create!');
        } catch (error) {
            console.error(error);
            return res.status(500).send('Error creating user');
        }
    } else {
        return res.status(400).json({
            errors: {
                body: {
                    email: 'E-mail já em uso'
                }
            }
        });
    }
};
