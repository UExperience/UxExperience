
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function searchByCriteria(criteria) {
    const result = await prisma.usuario.findMany({
        where: {
            AND: Object.entries(criteria).map(([key, value]) => ({ [key]: value })),
        },
        select: {
            nome: true,
            sobrenome: true,
            email: true,
            instituicaoParceira: true,
            //adicionar cnpj da instituição parceira no futuro
        },
    });

    return result;
}

export default searchByCriteria;
;