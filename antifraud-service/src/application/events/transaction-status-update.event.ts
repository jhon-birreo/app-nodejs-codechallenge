import { ITransaction } from '../../domain/interfaces/transaction.interface';

export class TransactionStatusUpdateEvent {
  constructor(public readonly transaction: ITransaction) {}

  toPayload() {
    return {
      transactionExternalId: this.transaction.transactionExternalId,
      status: this.transaction.status,
    };
  }
}
