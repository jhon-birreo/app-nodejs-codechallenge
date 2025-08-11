import { KafkaProducerService } from '../../../../../src/features/transaction/infrastructure/messaging/kafka/kafka.producer.service';

describe('KafkaProducerService', () => {
  let service: KafkaProducerService;
  let kafkaClient: any;
  let logger: any;

  beforeEach(() => {
    kafkaClient = { emit: jest.fn() };
    logger = { log: jest.fn() };
    service = new KafkaProducerService(kafkaClient, logger);
  });

  it('should log and emit transaction created event', async () => {
    const payload = { toPayload: () => ({ foo: 'bar' }) } as any;
    await service.emitTransactionCreated(payload);
    expect(logger.log).toHaveBeenCalledWith(
      'kafka-producer',
      expect.stringContaining('event: topic.transaction.create'),
    );
    expect(kafkaClient.emit).toHaveBeenCalled();
  });
});
