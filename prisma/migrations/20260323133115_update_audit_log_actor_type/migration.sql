/*
  Warnings:

  - You are about to drop the column `fullName` on the `AdminUser` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "AdminAuditLog" DROP CONSTRAINT "AdminAuditLog_adminId_fkey";

-- AlterTable
ALTER TABLE "AdminAuditLog" ADD COLUMN     "actorType" TEXT NOT NULL DEFAULT 'ADMIN',
ALTER COLUMN "adminId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "AdminUser" DROP COLUMN "fullName";

-- CreateIndex
CREATE INDEX "AdminAuditLog_actorType_idx" ON "AdminAuditLog"("actorType");

-- AddForeignKey
ALTER TABLE "AdminAuditLog" ADD CONSTRAINT "AdminAuditLog_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "AdminUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;
