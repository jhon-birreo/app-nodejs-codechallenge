import { TYPES } from '../../../src/shared/constants/types.constant';

describe('TYPES constant', () => {
  it('should have all expected type keys and values', () => {
    expect(TYPES).toHaveProperty('CREATE_TRANSACTION_USECASE', 'CreateTransactionUseCase');
    expect(TYPES).toHaveProperty('GET_TRANSACTION_USECASE', 'GetTransactionUseCase');
    expect(TYPES).toHaveProperty('UPDATE_TRANSACTION_STATUS_USECASE', 'UpdateTransactionStatusUseCase');
    expect(TYPES).toHaveProperty('GET_ALL_TRANSFER_TYPE_USECASE', 'GetAllTransferTypeUseCase');
  });

  it('should not have unexpected keys', () => {
    const keys = Object.keys(TYPES);
    expect(keys).toEqual([
      'CREATE_TRANSACTION_USECASE',
      'GET_TRANSACTION_USECASE',
      'UPDATE_TRANSACTION_STATUS_USECASE',
      'GET_ALL_TRANSFER_TYPE_USECASE',
    ]);
  });
});
