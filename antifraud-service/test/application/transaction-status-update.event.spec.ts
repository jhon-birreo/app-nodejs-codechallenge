import { TransactionStatusUpdateEvent } from '../../src/application/events/transaction-status-update.event';
import { TransactionStatus } from '../../src/domain/enums/transaction-status.enum';

describe('TransactionStatusUpdateEvent', () => {
  it('should create an event and return correct payload', () => {
    const transaction = {
      transactionExternalId: 'id2',
      status: TransactionStatus.APPROVED,
    };
    const event = new TransactionStatusUpdateEvent(transaction);
    expect(event.transaction).toEqual(transaction);
    expect(event.toPayload()).toEqual({
      transactionExternalId: 'id2',
      status: TransactionStatus.APPROVED,
    });
  });
});
