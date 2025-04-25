import type { CreateTransactionDto } from '../dto/create-transaction.dto';

export class TransactionCreatedEvent {
  constructor(public readonly transaction: CreateTransactionDto) {}

  toPayload() {
    return {
      accountExternalIdDebit: this.transaction.accountExternalIdDebit,
      accountExternalIdCredit: this.transaction.accountExternalIdCredit,
      transferTypeId: this.transaction.transferTypeId,
      value: this.transaction.value,
    };
  }
}
