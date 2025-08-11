import { TOPICS } from '../../../src/shared/constants/topic.constant';

describe('TOPICS constant', () => {
  it('should have all expected topic keys and values', () => {
    expect(TOPICS).toHaveProperty('TRANSACTION_CREATED', 'topic-transaction-created');
    expect(TOPICS).toHaveProperty('TRANSACTION_CREATE', 'topic-transaction-create');
    expect(TOPICS).toHaveProperty('TRANSACTION_UPDATED', 'topic-transaction-updated');
    expect(TOPICS).toHaveProperty('TRANSACTION_STATUS_UPDATED', 'topic-transaction-status-updated');
  });

  it('should not have unexpected keys', () => {
    const keys = Object.keys(TOPICS);
    expect(keys).toEqual([
      'TRANSACTION_CREATED',
      'TRANSACTION_CREATE',
      'TRANSACTION_UPDATED',
      'TRANSACTION_STATUS_UPDATED',
    ]);
  });
});
