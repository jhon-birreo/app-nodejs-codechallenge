import type { TransactionStatus } from '../enums/transaction-status.enum';

export interface ITransaction {
  transactionId: string;
  transactionExternalId: string;
  accountExternalIdDebit: string | null;
  accountExternalIdCredit: string | null;
  transferTypeId: number;
  transferTypeName: string;
  value: number;
  status: TransactionStatus;
  createdAt: string;
  updatedAt?: string;
}

export interface ITransactionCreateRequest {
  accountExternalIdDebit: string;
  accountExternalIdCredit: string;
  transferTypeId: number;
  transferTypeName: string | null;
  value: number;
  status?: TransactionStatus;
}
