import type { ITransaction } from '../..//domain/interfaces/transaction.interface';

export class TransactionCreatedEvent {
  constructor(public readonly transaction: ITransaction) {}

  toPayload() {
    return {
      transactionExternalId: this.transaction.transactionExternalId,
      value: this.transaction.value,
    };
  }
}
