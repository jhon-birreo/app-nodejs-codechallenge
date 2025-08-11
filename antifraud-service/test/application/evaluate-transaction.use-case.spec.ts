import type { LoggerProvider } from 'src/shared/logger/logger.provider';
import { CreatedTransactionDto } from '../../src/application/dto/created-transaction.dto';
import { EvaluateTransactionUseCase } from '../../src/application/use-cases/evaluate-transaction.use-case';
import { KafkaProducerService } from '../../src/infrastructure/messaging/kafka/kafka.producer.service';

jest.mock('../../src/infrastructure/messaging/kafka/kafka.producer.service');

const mockLogger: LoggerProvider = {
  log: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
  verbose: jest.fn(),
  debug: jest.fn(),
  fatal: jest.fn(),
  options: {},
  registerLocalInstanceRef: jest.fn(),
} as any;

describe('EvaluateTransactionUseCase', () => {
  let useCase: EvaluateTransactionUseCase;
  let kafkaProducer: KafkaProducerService;

  beforeEach(() => {
    const mockKafkaClient = { emit: jest.fn() };
    kafkaProducer = new KafkaProducerService(
      mockKafkaClient as any,
      mockLogger,
    );
    kafkaProducer.emitTransactionUpdateStatus = jest.fn();
    useCase = new EvaluateTransactionUseCase(kafkaProducer, mockLogger);
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('should execute and emit event', async () => {
    const dto: CreatedTransactionDto = {
      transactionExternalId: 'id3',
      value: 500,
    };
    await useCase.execute(dto);
    expect(mockLogger.log).toHaveBeenCalled();
    expect(kafkaProducer.emitTransactionUpdateStatus).toHaveBeenCalled();
  });
});
