import { LoggerModule } from '../../../src/shared/logger/logger.module';
import { LoggerProvider } from '../../../src/shared/logger/logger.provider';
import { Test, TestingModule } from '@nestjs/testing';

describe('LoggerModule', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [LoggerModule],
    }).compile();
  });

  it('should provide LoggerProvider', () => {
    const provider = module.get<LoggerProvider>(LoggerProvider);
    expect(provider).toBeInstanceOf(LoggerProvider);
  });
});
