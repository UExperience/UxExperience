/*
  Warnings:

  - You are about to drop the column `atividadesDeInterresse` on the `Usuario` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "atividadesDeInterresse",
ADD COLUMN     "atividadesDeInteresse" TEXT[];
