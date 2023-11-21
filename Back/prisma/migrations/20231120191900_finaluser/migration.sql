/*
  Warnings:

  - The `revisor` column on the `Usuario` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `atividadesDeInteresse` column on the `Usuario` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "revisor",
ADD COLUMN     "revisor" TEXT[] DEFAULT ARRAY[]::TEXT[],
DROP COLUMN "atividadesDeInteresse",
ADD COLUMN     "atividadesDeInteresse" TEXT[] DEFAULT ARRAY[]::TEXT[];
