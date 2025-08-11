import { Test, TestingModule } from '@nestjs/testing';
import { KafkaModule } from '../../../../../src/features/transaction/infrastructure/messaging/kafka/kafka.module';

describe('KafkaModule', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [KafkaModule],
    }).compile();
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });
});
