import { TransactionCreatedEvent } from '../../../../src/features/transaction/application/events/transaction-created.event';
import { CreateTransactionUseCase } from '../../../../src/features/transaction/application/use-cases/create-transaction.use-case';

describe('CreateTransactionUseCase', () => {
  let useCase: CreateTransactionUseCase;
  let kafkaProducer: any;
  let logger: any;

  beforeEach(() => {
    kafkaProducer = {
      emitTransactionCreated: jest.fn().mockResolvedValue(undefined),
    };
    logger = { log: jest.fn() };
    useCase = new CreateTransactionUseCase(kafkaProducer, logger);
  });

  it('should log and emit event, then return message', async () => {
    const dto = {
      accountExternalIdDebit: 'debit',
      accountExternalIdCredit: 'credit',
      transferTypeId: 1,
      value: 100,
    };
    const result = await useCase.execute(dto);
    expect(logger.log).toHaveBeenCalledWith(
      'transaction-service',
      'transaction created',
    );
    expect(kafkaProducer.emitTransactionCreated).toHaveBeenCalledWith(
      expect.any(TransactionCreatedEvent),
    );
    expect(result).toEqual({ message: 'Transaction created' });
  });
});
