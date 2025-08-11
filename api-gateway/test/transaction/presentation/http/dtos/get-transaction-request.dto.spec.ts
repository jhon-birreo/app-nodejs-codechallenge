import { ParamsWithId } from '../../../../../src/features/transaction/presentation/http/dtos/get-transaction-request.dto';

describe('ParamsWithId', () => {
  it('should create an instance with correct id', () => {
    const dto = new ParamsWithId();
    dto.id = 'uuid';
    expect(dto.id).toBe('uuid');
  });
});
