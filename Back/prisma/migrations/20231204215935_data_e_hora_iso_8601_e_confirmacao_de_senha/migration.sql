/*
  Warnings:

  - You are about to drop the column `data` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `hora` on the `Usuario` table. All the data in the column will be lost.
  - Added the required column `confirmacaoDeSenha` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data_hora` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "data",
DROP COLUMN "hora",
ADD COLUMN     "confirmacaoDeSenha" TEXT NOT NULL,
ADD COLUMN     "data_hora" TEXT NOT NULL;
