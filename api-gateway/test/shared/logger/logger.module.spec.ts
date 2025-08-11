import { LoggerModule } from '../../../src/features/shared/logger/logger.module';
import { Test, TestingModule } from '@nestjs/testing';

describe('LoggerModule', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [LoggerModule],
    }).compile();
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });
});
