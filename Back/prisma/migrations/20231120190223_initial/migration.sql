-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "instituicaoParceira" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "perfilDeAcesso" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "linkCurriculo" TEXT NOT NULL,
    "aprovacao" BOOLEAN NOT NULL,
    "ativo" BOOLEAN NOT NULL,
    "cargo" TEXT NOT NULL,
    "revisor" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "hora" TEXT NOT NULL,
    "areaAcademica" TEXT NOT NULL,
    "areaInteresse" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

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

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
