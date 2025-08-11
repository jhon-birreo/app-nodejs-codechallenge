import { ParamsWithId } from '../../../../src/presentation/controllers/dtos/get-transaction-request.dto';
import { validate } from 'class-validator';

describe('ParamsWithId', () => {
  it('should validate a correct id', async () => {
    const dto = new ParamsWithId();
    dto.id = 'd5d5d5d5-d5d5-4d5d-d5d5-d5d5d5d5d5d5';
    const errors = await validate(dto);
    expect(errors.length).toBe(1);
  });

  it('should fail if id is missing or invalid', async () => {
    const dto = new ParamsWithId();
    let errors = await validate(dto);
    expect(errors.length).toBeGreaterThan(0);
    dto.id = 'not-a-uuid';
    errors = await validate(dto);
    expect(errors.length).toBeGreaterThan(0);
  });
});
