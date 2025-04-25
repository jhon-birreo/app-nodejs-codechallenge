import type { TransactionStatus } from '../enums/transaction-status.enum';

export interface ITransaction {
  transactionExternalId: string;
  status: TransactionStatus;
}
