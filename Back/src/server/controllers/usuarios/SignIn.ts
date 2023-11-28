import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from "../../shared/middlewares/Validation";


const prisma = new PrismaClient();

interface IBodyProps {
    senha: string;
    email: string;
}

export const singInValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        email: yup.string().required().email().nonNullable(),
        senha: yup.string().nonNullable()
            .required()
            .min(8)
            .matches(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]+$/,
                '${path} deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial',),
    })),
}));

export const singIn = async (req: Request<{}, {}, IBodyProps>, res: Response) => {
    try {
        const { email, senha } = req.body;
        const usuario = await prisma.usuario.findFirst({
            where: {
                email: email,
            },
        });

        if (!usuario) {
            return res.status(404).json({ errors:  'Email ou senha inválidos'  });
        };

        if (usuario.senha !== senha) {
            return res.status(404).json({ errors:  'Email ou senha inválidos'  });
        } else {
            return res.status(200).json({ acesssToken: 'teste.teste.teste' });
        }
    } catch (error) {
        console.error("Error fetching user:", error);
        throw new Error("Failed to fetch user");
    }
};


