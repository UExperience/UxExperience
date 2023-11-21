/*
  Warnings:

  - The `revisor` column on the `Usuario` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "atividadesDeInterresse" TEXT[],
DROP COLUMN "revisor",
ADD COLUMN     "revisor" TEXT[];
