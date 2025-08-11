import { CreateTransactionResponseDto } from '../../../../../src/features/transaction/presentation/http/dtos/create-transaction-response.dto';

describe('CreateTransactionResponseDto', () => {
  it('should create an instance with correct message', () => {
    const dto = new CreateTransactionResponseDto();
    dto.message = 'ok';
    expect(dto.message).toBe('ok');
  });
});
