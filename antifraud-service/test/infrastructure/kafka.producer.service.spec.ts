import { KafkaProducerService } from '../../src/infrastructure/messaging/kafka/kafka.producer.service';
import { TransactionStatusUpdateEvent } from '../../src/application/events/transaction-status-update.event';
import { TOPICS } from '../../src/shared/constants/topic.constant';

describe('KafkaProducerService', () => {
  let service: KafkaProducerService;
  let kafkaClient: any;
  let logger: any;

  beforeEach(() => {
    kafkaClient = { emit: jest.fn() };
    logger = { log: jest.fn() };
    service = new KafkaProducerService(kafkaClient, logger);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should emit transaction update status and log', async () => {
    const payload = {
      toPayload: () => ({ transactionExternalId: 'id', status: 'APPROVED' }),
    } as unknown as TransactionStatusUpdateEvent;
    await service.emitTransactionUpdateStatus(payload);
    expect(logger.log).toHaveBeenCalledWith(
      'KafkaProducerService.emitTransactionUpdateStatus.payload',
      expect.stringContaining('event: ' + TOPICS.TRANSACTION_STATUS_UPDATED),
    );
    expect(kafkaClient.emit).toHaveBeenCalledWith(
      TOPICS.TRANSACTION_STATUS_UPDATED,
      JSON.stringify(payload.toPayload()),
    );
  });
});
