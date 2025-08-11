import { GetAllTransferTypeUseCase } from '../../../../src/features/transfer-type/application/use-cases/get-all-transfer-type.use-case';

describe('GetAllTransferTypeUseCase', () => {
  let useCase: GetAllTransferTypeUseCase;
  let transferTypeProvider: any;
  let logger: any;

  beforeEach(() => {
    transferTypeProvider = { getAllTransferTypes: jest.fn().mockResolvedValue([{ id: 1, name: 'Visa' }]) };
    logger = { log: jest.fn() };
    useCase = new GetAllTransferTypeUseCase(transferTypeProvider, logger);
  });

  it('should get all transfer types and log result', async () => {
    const result = await useCase.execute();
    expect(transferTypeProvider.getAllTransferTypes).toHaveBeenCalled();
    expect(logger.log).toHaveBeenCalledWith(
      'GetAllTransferTypeUseCase.execute.result',
      JSON.stringify([{ id: 1, name: 'Visa' }]),
    );
    expect(result).toEqual([{ id: 1, name: 'Visa' }]);
  });
});
