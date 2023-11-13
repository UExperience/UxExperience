-- CreateTable
CREATE TABLE "AreaAcademica" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL,

    CONSTRAINT "AreaAcademica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AreaInteresse" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL,

    CONSTRAINT "AreaInteresse_pkey" PRIMARY KEY ("id")
);
