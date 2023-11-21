import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const isEmailUnique = async (email: string): Promise<boolean> => {
    const userEmail = await prisma.usuario.findFirst({
        where: {
            email: email,
        },
    });

    return userEmail === null || userEmail === undefined; // Verifica se o userEmail não está presente
};

export default isEmailUnique;
