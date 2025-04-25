import { Prisma, Transaction as PrismaTransaction } from '@prisma/client';
import { TransactionEntity } from '../../domain/entities/transaction.entity';
import { TransactionStatus } from '../../domain/enums/transaction-status.enum';
import { convertDateToString } from '../../shared/utils/date.util';

export class PrismaTransactionMapper {
  static toDomain(transaction: PrismaTransaction): TransactionEntity {
    const transactionModel = new TransactionEntity(
      {
        transactionExternalId: transaction.transactionExternalId,
        accountExternalIdDebit: transaction.accountExternalIdDebit,
        accountExternalIdCredit: transaction.accountExternalIdCredit,
        transferTypeId: transaction.transferTypeId,
        transferTypeName: transaction.transferTypeName,
        value: transaction.value,
        status: transaction.status as TransactionStatus,
        createdAt: convertDateToString(transaction.createdAt),
      },
      transaction.transactionId,
    );
    return transactionModel;
  }
  static toPersistence(
    transaction: any,
  ): Prisma.TransactionUncheckedCreateInput {
    return {
      transactionExternalId: transaction.transactionExternalId,
      accountExternalIdDebit: transaction.accountExternalIdDebit,
      accountExternalIdCredit: transaction.accountExternalIdCredit,
      transferTypeId: transaction.transferTypeId,
      transferTypeName: transaction.transferTypeName,
      value: transaction.value,
      status: transaction.status,
      createdAt: transaction.createdAt,
    };
  }
}
