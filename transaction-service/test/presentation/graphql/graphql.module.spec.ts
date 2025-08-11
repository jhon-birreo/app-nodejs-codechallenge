import { Test, TestingModule } from '@nestjs/testing';
import { GraphqlModule } from '../../../src/presentation/graphql/graphql.module';
import { TransactionResolver } from '../../../src/presentation/graphql/transaction.resolver';
import { PrismaTransactionRepositoryImpl } from '../../../src/infrastructure/persistence/prisma-transaction.repository.impl';
import { PrismaService } from '../../../src/infrastructure/database/prisma/prisma.service';

describe('GraphqlModule', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [GraphqlModule],
    }).compile();
  });

  it('should provide TransactionResolver', () => {
    const resolver = module.get<TransactionResolver>(TransactionResolver);
    expect(resolver).toBeInstanceOf(TransactionResolver);
  });

  it('should provide PrismaTransactionRepositoryImpl', () => {
    const repo = module.get<PrismaTransactionRepositoryImpl>(PrismaTransactionRepositoryImpl);
    expect(repo).toBeInstanceOf(PrismaTransactionRepositoryImpl);
  });

  it('should provide PrismaService', () => {
    const service = module.get<PrismaService>(PrismaService);
    expect(service.constructor.name).toBe('PrismaService');
  });
});
