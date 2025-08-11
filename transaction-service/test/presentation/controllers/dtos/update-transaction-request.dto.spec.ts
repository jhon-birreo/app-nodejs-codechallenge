import { UpdateTransactionDto } from '../../../../src/presentation/controllers/dtos/create-transaction-request.dto';
import { validate } from 'class-validator';

describe('UpdateTransactionDto', () => {
  it('should validate a correct dto', async () => {
    const dto = new UpdateTransactionDto();
    dto.transactionExternalId = 'a1a1a1a1-a1a1-4a1a-a1a1-a1a1a1a1a1a1';
    dto.status = 'COMPLETED';
    const errors = await validate(dto);
    expect(errors.length).toBe(0);
  });

  it('should fail if required fields are missing', async () => {
    const dto = new UpdateTransactionDto();
    const errors = await validate(dto);
    expect(errors.length).toBeGreaterThan(0);
  });
});
