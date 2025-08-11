import { CreateTransactionDto } from '../../../../../src/features/transaction/presentation/http/dtos/create-transaction-request.dto';

describe('CreateTransactionDto (HTTP)', () => {
  it('should create an instance with correct properties', () => {
    const dto = new CreateTransactionDto();
    dto.accountExternalIdDebit = 'debit-id';
    dto.accountExternalIdCredit = 'credit-id';
    dto.transferTypeId = 1;
    dto.value = 100;

    expect(dto.accountExternalIdDebit).toBe('debit-id');
    expect(dto.accountExternalIdCredit).toBe('credit-id');
    expect(dto.transferTypeId).toBe(1);
    expect(dto.value).toBe(100);
  });
});
