import { Test, TestingModule } from '@nestjs/testing';
import { TransactionModule } from '../../../src/features/transaction/presentation/transaction.module';

describe('TransactionModule', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [TransactionModule],
    }).compile();
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });
});
