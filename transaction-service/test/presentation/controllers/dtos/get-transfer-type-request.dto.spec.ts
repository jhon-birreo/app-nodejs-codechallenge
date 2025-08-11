import { ParamsWithIdNumber } from '../../../../src/presentation/controllers/dtos/get-transfer-type-request.dto';
import { validate } from 'class-validator';

describe('ParamsWithIdNumber', () => {
  it('should validate a correct id', async () => {
    const dto = new ParamsWithIdNumber();
    dto.id = 123;
    const errors = await validate(dto);
    expect(errors.length).toBe(0);
  });

  it('should fail if id is missing or not a number', async () => {
    const dto = new ParamsWithIdNumber();
    let errors = await validate(dto);
    expect(errors.length).toBeGreaterThan(0);
    (dto as any).id = 'not-a-number';
    errors = await validate(dto);
    expect(errors.length).toBeGreaterThan(0);
  });
});
