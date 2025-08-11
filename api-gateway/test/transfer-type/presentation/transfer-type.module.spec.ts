import { Test, TestingModule } from '@nestjs/testing';
import { TransferTypeModule } from '../../../src/features/transfer-type/presentation/transfer-type.module';

describe('TransferTypeModule', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [TransferTypeModule],
    }).compile();
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });
});
