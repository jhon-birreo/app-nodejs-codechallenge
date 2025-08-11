import { KafkaConsumerService } from '../../../../src/infrastructure/messaging/kafka/kafka.consumer.service';

describe('KafkaConsumerService', () => {
  it('should be defined', () => {
    const service = new KafkaConsumerService({ connect: jest.fn() } as any);
    expect(service).toBeInstanceOf(KafkaConsumerService);
  });

  it('should connect on module init', async () => {
    const kafkaClient = { connect: jest.fn() };
    const service = new KafkaConsumerService(kafkaClient as any);
    await service.onModuleInit();
    expect(kafkaClient.connect).toHaveBeenCalled();
  });
});
