import { GetTransactionResponseDto } from '../../../../src/presentation/graphql/dtos/get-transaction-response.dto';

describe('GetTransactionResponseDto', () => {
  it('should create an instance with all properties', () => {
    const dto = new GetTransactionResponseDto();
    dto.transactionExternalId = 'id';
    dto.transactionType = { name: 'type' } as any;
    dto.transactionStatus = { name: 'status' } as any;
    dto.value = 100;
    dto.createdAt = '2023-01-01T00:00:00Z';
    expect(dto.transactionExternalId).toBe('id');
    expect(dto.transactionType).toEqual({ name: 'type' });
    expect(dto.transactionStatus).toEqual({ name: 'status' });
    expect(dto.value).toBe(100);
    expect(dto.createdAt).toBe('2023-01-01T00:00:00Z');
  });
});
