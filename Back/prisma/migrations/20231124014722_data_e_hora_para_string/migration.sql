/*
  Warnings:

  - Made the column `data` on table `Usuario` required. This step will fail if there are existing NULL values in that column.
  - Made the column `hora` on table `Usuario` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Usuario" ALTER COLUMN "data" SET NOT NULL,
ALTER COLUMN "data" SET DATA TYPE TEXT,
ALTER COLUMN "hora" SET NOT NULL,
ALTER COLUMN "hora" SET DATA TYPE TEXT;
