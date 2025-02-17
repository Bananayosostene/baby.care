-- AlterTable
ALTER TABLE "User" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'active';

-- CreateTable
CREATE TABLE "Invitations" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "isUsed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "inviterId" TEXT NOT NULL,

    CONSTRAINT "Invitations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Invitations_email_key" ON "Invitations"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Invitations_token_key" ON "Invitations"("token");

-- CreateIndex
CREATE INDEX "Invitations_inviterId_idx" ON "Invitations"("inviterId");

-- AddForeignKey
ALTER TABLE "Invitations" ADD CONSTRAINT "Invitations_inviterId_fkey" FOREIGN KEY ("inviterId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
