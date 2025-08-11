import { IsValidTransactionTypeId } from '../../../../src/presentation/controllers/validations/is-valid-transaction-type-id';
import { validate, registerDecorator } from 'class-validator';
import { TransactionTypeId } from '../../../../src/domain/enums/transaction-type.enum';

describe('IsValidTransactionTypeId', () => {
  class TestDto {
    @IsValidTransactionTypeId()
    typeId: number;
  }

  it('should validate a correct transaction type id', async () => {
    for (const valid of Object.values(TransactionTypeId)) {
      const dto = new TestDto();
      dto.typeId = valid as number;
      const errors = await validate(dto);
      expect(errors.length).toBe(0);
    }
  });

  it('should fail for an invalid transaction type id', async () => {
    const dto = new TestDto();
    dto.typeId = 999;
    const errors = await validate(dto);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].constraints).toBeDefined();
  });
});
