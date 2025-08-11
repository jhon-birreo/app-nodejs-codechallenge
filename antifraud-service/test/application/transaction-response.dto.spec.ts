import { TransactionResponseDto } from '../../src/application/dto/transaction-response.dto';

describe('TransactionResponseDto', () => {
  it('should create an instance with all properties', () => {
    const dto: TransactionResponseDto = {
      transactionExternalId: 'id1',
      transactionType: { name: 'type' },
      transactionStatus: { name: 'status' },
      value: 200,
      createdAt: '2025-08-10T00:00:00Z',
    };
    expect(dto.transactionExternalId).toBe('id1');
    expect(dto.transactionType.name).toBe('type');
    expect(dto.transactionStatus.name).toBe('status');
    expect(dto.value).toBe(200);
    expect(dto.createdAt).toBe('2025-08-10T00:00:00Z');
  });
});
