
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function searchByCriteria(criteria, skip, take) {


    const [users, totalUsers] = await prisma.$transaction([
        prisma.usuario.findMany({
            where: {
                AND: Object.entries(criteria).map(([key, value]) => ({ [key]: value })),
            },
            select: {
                nome: true,
                sobrenome: true,
                email: true,
                instituicaoParceira: true,
                // adicionar cnpj da instituição parceira no futuro
            },
            take: Number(take),
            skip: (Number(skip) - 1) * Number(take),
        }),
        prisma.usuario.count({
            where: {
                AND: Object.entries(criteria).map(([key, value]) => ({ [key]: value })),
            },
        }),
    ]);

    const totalPages = Math.ceil(totalUsers / take);

    return {totalUsers, totalPages, users  };
}

export default searchByCriteria;