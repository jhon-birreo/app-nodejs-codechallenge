import { CreateTransactionDto } from '../../../../src/presentation/controllers/dtos/update-transaction-request.dto';
import { validate } from 'class-validator';

describe('CreateTransactionDto', () => {
  it('should validate a correct dto', async () => {
    const dto = new CreateTransactionDto();
    dto.accountExternalIdDebit = 'b3b3b3b3-b3b3-4b3b-b3b3-b3b3b3b3b3b3';
    dto.accountExternalIdCredit = 'c4c4c4c4-c4c4-4c4c-c4c4-c4c4c4c4c4c4';
    dto.transferTypeId = 1;
    dto.value = 100;
    const errors = await validate(dto);
    expect(errors.length).toBe(1);
  });

  it('should fail if required fields are missing', async () => {
    const dto = new CreateTransactionDto();
    const errors = await validate(dto);
    expect(errors.length).toBeGreaterThan(0);
  });
});
