import { GetTransactionUseCase } from '../../../../src/features/transaction/application/use-cases/get-transaction.use-case';

describe('GetTransactionUseCase', () => {
  let useCase: GetTransactionUseCase;
  let transactionService: any;
  let logger: any;

  beforeEach(() => {
    transactionService = { getTransaction: jest.fn().mockResolvedValue({ id: '1', value: 100 }) };
    logger = { log: jest.fn() };
    useCase = new GetTransactionUseCase(transactionService, logger);
  });

  it('should get transaction and log result', async () => {
    const result = await useCase.execute('1');
    expect(transactionService.getTransaction).toHaveBeenCalledWith('1');
    expect(logger.log).toHaveBeenCalledWith('GetTransactionUseCase.execute.result', JSON.stringify({ id: '1', value: 100 }));
    expect(result).toEqual({ id: '1', value: 100 });
  });
});
