import { TransactionStatus } from '../../../src/features/transaction/domain/enums/transaction-status.enum';

describe('TransactionStatus Enum', () => {
  it('should have correct enum values', () => {
    expect(TransactionStatus.PENDING).toBe('PENDING');
    expect(TransactionStatus.APPROVED).toBe('APPROVED');
    expect(TransactionStatus.REJECTED).toBe('REJECTED');
  });

  it('should not have extra values', () => {
    expect(Object.keys(TransactionStatus)).toHaveLength(3);
  });
});
