import { TransactionServiceProviderResponseDto } from '../../../../../src/features/transaction/infrastructure/providers/dtos/get-transaction-response.dto';

describe('TransactionServiceProviderResponseDto', () => {
  it('should create an instance with correct properties', () => {
    const dto = new TransactionServiceProviderResponseDto();
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
