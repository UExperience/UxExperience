import bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const generateToken = (userId: number): string => {
    const secretKey = 'seuSegredo'; //código hash do token. Na integração com o front, este campo deve ser verificado. De modo a saber se o código hash está aqui.
    const expiresIn = '1h'; // Defina o tempo de expiração do token

    return jwt.sign({ userId }, secretKey, { expiresIn });  
};


const comparePassword = async (inputPassword: string, hashedSenha: string): Promise<boolean> => {
    return bcrypt.compare(inputPassword, hashedSenha);
};

export const login = async (req: Request, res: Response) => {
    const { email, senha } = req.body;

    const user = await prisma.usuario.findUnique({
        where: { email },
    });

    if (!user) {
        return res.status(401).json({ error: 'Usuário ou senha inválidos.' });
    }

    const passwordMatch = await comparePassword(senha, user.senha);

    if (!passwordMatch) {
        return res.status(401).json({ error: 'Usuário ou senha inválidos.' });
    }

    const token = generateToken(user.id);

    return res.status(200).json({ user, token });
};

