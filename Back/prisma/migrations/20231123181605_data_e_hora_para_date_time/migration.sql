/*
  Warnings:

  - Changed the type of `data` on the `Usuario` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `hora` on the `Usuario` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "data",
ADD COLUMN     "data" TIMESTAMP(3) NOT NULL,
DROP COLUMN "hora",
ADD COLUMN     "hora" TIMESTAMP(3) NOT NULL;
