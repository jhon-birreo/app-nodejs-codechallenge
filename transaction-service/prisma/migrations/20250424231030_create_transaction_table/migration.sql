-- CreateTable
CREATE TABLE "transactions" (
    "transactionId" TEXT NOT NULL,
    "transactionExternalId" TEXT NOT NULL,
    "accountExternalIdDebit" TEXT,
    "accountExternalIdCredit" TEXT,
    "transferTypeId" INTEGER NOT NULL,
    "transferTypeName" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL,
    "updatedAt" TIMESTAMPTZ,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("transactionId")
);

-- CreateIndex
CREATE UNIQUE INDEX "transactions_transactionExternalId_key" ON "transactions"("transactionExternalId");

-- CreateIndex
CREATE INDEX "transactions_transactionExternalId_idx" ON "transactions"("transactionExternalId");
