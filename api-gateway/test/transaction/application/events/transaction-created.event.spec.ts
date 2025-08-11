import { TransactionCreatedEvent } from '../../../../src/features/transaction/application/events/transaction-created.event';

describe('TransactionCreatedEvent', () => {
  it('should create an event with a transaction', () => {
    const transaction = {
      accountExternalIdDebit: 'debit',
      accountExternalIdCredit: 'credit',
      transferTypeId: 1,
      value: 100,
    };
    const event = new TransactionCreatedEvent(transaction as any);
    expect(event.transaction).toEqual(transaction);
  });

  it('should return correct payload', () => {
    const transaction = {
      accountExternalIdDebit: 'debit',
      accountExternalIdCredit: 'credit',
      transferTypeId: 1,
      value: 100,
    };
    const event = new TransactionCreatedEvent(transaction as any);
    expect(event.toPayload()).toEqual(transaction);
  });
});
