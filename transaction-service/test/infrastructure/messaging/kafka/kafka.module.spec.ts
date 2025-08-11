import { Test, TestingModule } from '@nestjs/testing';
import { KafkaModule } from '../../../../src/infrastructure/messaging/kafka/kafka.module';
import { KafkaConsumerService } from '../../../../src/infrastructure/messaging/kafka/kafka.consumer.service';
import { KafkaProducerService } from '../../../../src/infrastructure/messaging/kafka/kafka.producer.service';

describe('KafkaModule', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [KafkaModule],
    }).compile();
  });

  it('should provide KafkaConsumerService', () => {
    const consumer = module.get<KafkaConsumerService>(KafkaConsumerService);
    expect(consumer).toBeInstanceOf(KafkaConsumerService);
  });

  it('should provide KafkaProducerService', () => {
    const producer = module.get<KafkaProducerService>(KafkaProducerService);
    expect(producer).toBeInstanceOf(KafkaProducerService);
  });
});
