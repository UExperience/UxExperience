-- AlterTable
ALTER TABLE "Usuario" ALTER COLUMN "revisor" DROP NOT NULL,
ALTER COLUMN "revisor" SET DATA TYPE TEXT,
ALTER COLUMN "atividadesDeInteresse" DROP NOT NULL,
ALTER COLUMN "atividadesDeInteresse" SET DATA TYPE TEXT;
