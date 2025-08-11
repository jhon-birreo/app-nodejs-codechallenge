import { KafkaConsumerService } from '../../src/infrastructure/messaging/kafka/kafka.consumer.service';

describe('KafkaConsumerService', () => {
  let service: KafkaConsumerService;
  let kafkaClient: any;

  beforeEach(() => {
    kafkaClient = { connect: jest.fn().mockResolvedValue(undefined) };
    service = new KafkaConsumerService(kafkaClient);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call connect on onModuleInit', async () => {
    await service.onModuleInit();
    expect(kafkaClient.connect).toHaveBeenCalled();
  });
});
