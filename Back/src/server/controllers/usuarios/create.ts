/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prisma, PrismaClient } from '@prisma/client';
import { Request, RequestHandler, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares/Validation';
import isEmailUnique from '../../shared/services/isEmailUnique';
import { PasswordCrypto } from '../../shared/services';
const prisma = new PrismaClient();

interface IUsuario {
  nome: string;
  sobrenome: string;
  email: string;
  perfilDeAcesso: string;
  tipo: string;
  senha: string;
  confirmacaoDeSenha?: string;
  instituicaoParceira: string;
  telefone: string;
  areaAcademica: string;
  cargo: string;
  linkCurriculo: string;
  atividadesDeInteresse?: string[];
  revisor?: string[];
  data_hora: string;
  aprovacao: boolean;
  ativo: boolean;
}

const bodyValidation: yup.ObjectSchema<IUsuario> = yup.object().shape({
    nome: yup.string().required().min(3),
    sobrenome: yup.string().required().nonNullable(),
    email: yup.string().required().email().nonNullable(),
    perfilDeAcesso: yup
        .string()
        .oneOf(['Reitor', 'Gestor de RI', 'Docente', 'Discentes', 'Empreendedores', 'Parceiro'])
        .required().nonNullable(),
    tipo: yup.string().nonNullable().oneOf(['PJ', 'PF', 'White Label']).required(),
    senha: yup.string().nonNullable()
        .required()
        .min(8)
        .matches(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]+$/,
            '${path} deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial',),
    confirmacaoDeSenha: yup.string().required()
        .oneOf([yup.ref('senha'), null], 'senhas não são iguais'),
    instituicaoParceira: yup.string().required(),
    telefone: yup.string().nonNullable()
        .required()
        .matches(/^\(\d{3}\) \d{5}-\d{4}$/,
            '${path} deve seguir o formato (DDD) XXXXX-XXXX'),
    areaAcademica: yup.string().required(),
    cargo: yup.string().nonNullable()
        .required()
        .oneOf(['Cargo 1', 'Cargo 2', 'Cargo 3']) // Lista de cargos permitidos
        .strict(true),
    linkCurriculo: yup.string().required().nonNullable()
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
    data_hora: yup.string(),
    aprovacao: yup.boolean(),
    ativo: yup.boolean(),
});

export const createValidation = validation((getSchema) => ({
  body: getSchema<IUsuario>(bodyValidation),
}));

export const create = async (req: Request<{}, {}, IUsuario>, res: Response) => {
  if (await isEmailUnique(req.body.email)) {
    try {
      // Remove o campo de confirmação de senha do objeto req.body
      const { confirmacaoDeSenha, ...userDataWithoutConfirmation } = req.body;

      //criptografia
      const hashedPassword = await PasswordCrypto.hashPassword(req.body.senha);

      //data
      const now = new Date().toISOString();

      const userData: Prisma.UsuarioCreateInput = {
        ...userDataWithoutConfirmation, // Usa o objeto sem o campo confirmacaoDeSenha
        data_hora: now,
        senha: hashedPassword,
      };

      await prisma.usuario.create({
        data: userData,
      });
      console.log(req.body);
      return res.status(200).json(userData);
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
