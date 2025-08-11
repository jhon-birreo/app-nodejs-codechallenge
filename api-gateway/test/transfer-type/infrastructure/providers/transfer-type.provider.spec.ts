import { TransferTypeProvider } from '../../../../src/features/transfer-type/infrastructure/providers/transfer-type.provider';

describe('TransferTypeProvider', () => {
  let provider: TransferTypeProvider;
  let axios: any;
  let logger: any;

  beforeEach(() => {
    axios = { get: jest.fn() };
    logger = { error: jest.fn() };
    provider = new TransferTypeProvider(axios, logger);
  });

  it('should return transfer type data on success', async () => {
    const data = { id: 1, name: 'Visa' };
    axios.get.mockResolvedValue({ data });
    const result = await provider.getTransferType('1');
    expect(result).toEqual(data);
    expect(axios.get).toHaveBeenCalledWith('/transfer-types/1');
  });

  it('should log and throw error on getTransferType failure', async () => {
    const error = new Error('fail');
    axios.get.mockRejectedValue(error);
    await expect(provider.getTransferType('1')).rejects.toThrow('fail');
    expect(logger.error).toHaveBeenCalledWith(
      'TransactionServiceProvider.getTransferType.error',
      error,
    );
  });

  it('should return all transfer types on success', async () => {
    const data = [{ id: 1, name: 'Visa' }];
    axios.get.mockResolvedValue({ data });
    const result = await provider.getAllTransferTypes();
    expect(result).toEqual(data);
    expect(axios.get).toHaveBeenCalledWith('/transfer-types');
  });

  it('should log and throw error on getAllTransferTypes failure', async () => {
    const error = new Error('fail');
    axios.get.mockRejectedValue(error);
    await expect(provider.getAllTransferTypes()).rejects.toThrow('fail');
    expect(logger.error).toHaveBeenCalledWith(
      'TransactionServiceProvider.getAllTransferTypes.error',
      error,
    );
  });
});
