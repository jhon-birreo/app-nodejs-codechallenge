import { TransactionResponseDto } from '../../../../../src/features/transaction/application/dto/transaction-response.dto';

describe('TransactionResponseDto (HTTP)', () => {
  it('should create an instance with correct properties', () => {
    const dto = new TransactionResponseDto();
    dto.transactionExternalId = 'tx-id';
    dto.transactionType = { name: 'type' };
    dto.transactionStatus = { name: 'status' };
    dto.value = 123;
    dto.createdAt = '2025-08-10T00:00:00Z';

    expect(dto.transactionExternalId).toBe('tx-id');
    expect(dto.transactionType).toEqual({ name: 'type' });
    expect(dto.transactionStatus).toEqual({ name: 'status' });
    expect(dto.value).toBe(123);
    expect(dto.createdAt).toBe('2025-08-10T00:00:00Z');
  });
});
