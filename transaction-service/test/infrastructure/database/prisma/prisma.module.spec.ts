import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../../../../src/infrastructure/database/prisma/prisma.module';
import { PrismaService } from '../../../../src/infrastructure/database/prisma/prisma.service';

describe('PrismaModule', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [PrismaModule],
    }).compile();
  });

  it('should provide PrismaService', () => {
    const service = module.get<PrismaService>(PrismaService);
    expect(service.constructor.name).toBe('PrismaService');
  });
});
