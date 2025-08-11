import { CreatedTransactionDto } from '../../src/presentation/dtos/created-transaction-request.dto';
import { validate } from 'class-validator';

describe('CreatedTransactionDto', () => {
  it('should fail validation if fields are missing or invalid', async () => {
    const dto = new CreatedTransactionDto();
    let errors = await validate(dto);
    expect(errors.length).toBeGreaterThan(0);

    dto.transactionExternalId = 'not-a-uuid';
    dto.value = NaN;
    errors = await validate(dto);
    expect(errors.length).toBeGreaterThan(0);
  });

  it('should pass validation with valid fields', async () => {
    const dto = new CreatedTransactionDto();
    dto.transactionExternalId = '123e4567-e89b-12d3-a456-426614174000';
    dto.value = 100;
    const errors = await validate(dto);
    expect(errors.length).toBe(0);
  });
});
