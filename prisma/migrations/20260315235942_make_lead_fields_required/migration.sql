/*
  Warnings:

  - Made the column `phone` on table `AuditLead` required. This step will fail if there are existing NULL values in that column.
  - Made the column `companyName` on table `AuditLead` required. This step will fail if there are existing NULL values in that column.
  - Made the column `position` on table `AuditLead` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "AuditLead" ALTER COLUMN "phone" SET NOT NULL,
ALTER COLUMN "companyName" SET NOT NULL,
ALTER COLUMN "position" SET NOT NULL;
