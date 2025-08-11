import { CreatedTransactionDto } from '../../src/application/dto/created-transaction.dto';

describe('CreatedTransactionDto', () => {
  it('should create an instance with correct properties', () => {
    const dto: CreatedTransactionDto = {
      transactionExternalId: 'abc123',
      value: 100,
    };
    expect(dto.transactionExternalId).toBe('abc123');
    expect(dto.value).toBe(100);
  });
});
