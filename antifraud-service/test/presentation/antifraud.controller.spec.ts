import { AntiFraudController } from '../../src/presentation/controllers/antifraud.controller';
import { EvaluateTransactionUseCase } from '../../src/application/use-cases/evaluate-transaction.use-case';
import { TOPICS } from '../../src/shared/constants/topic.constant';

describe('AntiFraudController', () => {
  let controller: AntiFraudController;
  let useCase: EvaluateTransactionUseCase;

  beforeEach(() => {
    useCase = { execute: jest.fn() } as any;
    controller = new AntiFraudController(useCase);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call useCase.execute on handleAntiFraudValidation', async () => {
    const payload = { transactionExternalId: 'id', value: 100 };
    await controller.handleAntiFraudValidation(payload);
    expect(useCase.execute).toHaveBeenCalledWith(payload);
  });
});
