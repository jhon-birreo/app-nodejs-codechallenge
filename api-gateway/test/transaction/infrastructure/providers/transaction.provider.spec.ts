import { TransactionServiceProvider } from '../../../../src/features/transaction/infrastructure/providers/transaction.provider';

describe('TransactionServiceProvider', () => {
  let provider: TransactionServiceProvider;
  let axios: any;
  let logger: any;

  beforeEach(() => {
    axios = { get: jest.fn() };
    logger = { error: jest.fn() };
    provider = new TransactionServiceProvider(axios, logger);
  });

  it('should return transaction data on success', async () => {
    const data = { id: '1', value: 100 };
    axios.get.mockResolvedValue({ data });
    const result = await provider.getTransaction('1');
    expect(result).toEqual(data);
    expect(axios.get).toHaveBeenCalledWith('/transactions/1');
  });

  it('should log and throw error on failure', async () => {
    const error = new Error('fail');
    axios.get.mockRejectedValue(error);
    await expect(provider.getTransaction('1')).rejects.toThrow('fail');
    expect(logger.error).toHaveBeenCalledWith(
      'TransactionServiceProvider.getTransaction.error',
      error,
    );
  });
});
