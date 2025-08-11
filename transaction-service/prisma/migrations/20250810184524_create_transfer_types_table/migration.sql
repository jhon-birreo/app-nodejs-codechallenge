-- CreateTable
CREATE TABLE "public"."transfer_types" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ,

    CONSTRAINT "transfer_types_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "transfer_types_name_key" ON "public"."transfer_types"("name");

-- AddForeignKey
ALTER TABLE "public"."transactions" ADD CONSTRAINT "transactions_transferTypeId_fkey" FOREIGN KEY ("transferTypeId") REFERENCES "public"."transfer_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
