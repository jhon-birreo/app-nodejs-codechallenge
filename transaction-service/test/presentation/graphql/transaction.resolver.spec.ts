import { Test, TestingModule } from '@nestjs/testing';
import { TransactionResolver } from '../../../src/presentation/graphql/transaction.resolver';
import { PrismaTransactionRepositoryImpl } from '../../../src/infrastructure/persistence/prisma-transaction.repository.impl';
import { NotFoundException } from '@nestjs/common';

describe('TransactionResolver', () => {
  let resolver: TransactionResolver;
  let repo: any;

  beforeEach(async () => {
    repo = { findById: jest.fn() };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TransactionResolver,
        { provide: PrismaTransactionRepositoryImpl, useValue: repo },
      ],
    }).compile();
    resolver = module.get<TransactionResolver>(TransactionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should return transaction dto if found', async () => {
    const dto = { toResponseDto: jest.fn().mockReturnValue('dto') };
    repo.findById.mockResolvedValue(dto);
    const result = await resolver.getTransaction('id');
    expect(repo.findById).toHaveBeenCalledWith('id');
    expect(result).toBe('dto');
  });

  it('should throw NotFoundException if not found', async () => {
    repo.findById.mockResolvedValue(null);
    await expect(resolver.getTransaction('id')).rejects.toThrow(NotFoundException);
  });
});
