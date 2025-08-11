import { KafkaProducerService } from '../../../../src/infrastructure/messaging/kafka/kafka.producer.service';
import { LoggerProvider } from '../../../../src/shared/logger/logger.provider';
import { TOPICS } from '../../../../src/shared/constants/topic.constant';

describe('KafkaProducerService', () => {
  let kafkaClient: any;
  let logger: any;
  let service: KafkaProducerService;

  beforeEach(() => {
    kafkaClient = { emit: jest.fn() };
    logger = { log: jest.fn() };
    service = new KafkaProducerService(kafkaClient, logger);
  });

  it('should log and emit transaction created', async () => {
    const payload = { toPayload: () => ({ foo: 'bar' }) };
    await service.emitTransactionCreated(payload as any);
    expect(logger.log).toHaveBeenCalledWith(
      'KafkaProducerService.emitTransactionCreated',
      expect.stringContaining(TOPICS.TRANSACTION_CREATED),
    );
    expect(kafkaClient.emit).toHaveBeenCalledWith(
      TOPICS.TRANSACTION_CREATED,
      JSON.stringify({ foo: 'bar' }),
    );
  });
});
