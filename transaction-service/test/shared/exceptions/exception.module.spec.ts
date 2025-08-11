import { ExceptionModule } from '../../../src/shared/exceptions/exception.module';
import { ExceptionProvider } from '../../../src/shared/exceptions/exception.provider';
import { Test, TestingModule } from '@nestjs/testing';

describe('ExceptionModule', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [ExceptionModule],
    }).compile();
  });

  it('should provide ExceptionProvider', () => {
    const provider = module.get<ExceptionProvider>(ExceptionProvider);
    expect(provider).toBeInstanceOf(ExceptionProvider);
  });
});
