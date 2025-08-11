import { TransactionStatus } from '../../src/domain/enums/transaction-status.enum';

describe('TransactionStatus Enum', () => {
  it('should be defined', () => {
    expect(TransactionStatus).toBeDefined();
  });
});
