import { PrismaTransactionRepositoryImpl } from '../../../src/infrastructure/persistence/prisma-transaction.repository.impl';
import { PrismaService } from '../../../src/infrastructure/database/prisma/prisma.service';
import { PrismaTransactionMapper } from '../../../src/infrastructure/persistence/prisma-transaction.mapper';
import { TransactionEntity } from '../../../src/domain/entities/transaction.entity';

describe('PrismaTransactionRepositoryImpl', () => {
  let repo: PrismaTransactionRepositoryImpl;
  let prisma: any;

  beforeEach(() => {
    prisma = {
      transaction: {
        create: jest.fn(),
        update: jest.fn(),
        findFirst: jest.fn(),
      },
    };
    repo = new PrismaTransactionRepositoryImpl(prisma as any);
  });

  it('should create a transaction', async () => {
    const entity = {} as TransactionEntity;
    const persistence = { id: 1 };
    jest.spyOn(PrismaTransactionMapper, 'toPersistence').mockReturnValue(persistence as any);
    jest.spyOn(prisma.transaction, 'create').mockResolvedValue(persistence);
    jest.spyOn(PrismaTransactionMapper, 'toDomain').mockReturnValue(entity);
    const result = await repo.create(entity);
    expect(result).toBe(entity);
  });

  it('should throw on create error', async () => {
    jest.spyOn(PrismaTransactionMapper, 'toPersistence').mockReturnValue({} as any);
    jest.spyOn(prisma.transaction, 'create').mockRejectedValue(new Error('fail'));
    await expect(repo.create({} as any)).rejects.toThrow("Couldn't create transaction");
  });

  it('should update status', async () => {
    prisma.transaction.update.mockResolvedValue({});
    await expect(repo.updateStatus('id', {} as any)).resolves.toBeUndefined();
    expect(prisma.transaction.update).toHaveBeenCalled();
  });

  it('should throw on update error', async () => {
    prisma.transaction.update.mockRejectedValue(new Error('fail'));
    await expect(repo.updateStatus('id', {} as any)).rejects.toThrow("Couldn't update transaction status");
  });

  it('should find by id and return entity', async () => {
    const found = { id: 1 };
    jest.spyOn(prisma.transaction, 'findFirst').mockResolvedValue(found);
    jest.spyOn(PrismaTransactionMapper, 'toDomain').mockReturnValue('entity' as any);
    const result = await repo.findById('id');
    expect(result).toBe('entity');
  });

  it('should return null if not found', async () => {
    prisma.transaction.findFirst.mockResolvedValue(null);
    const result = await repo.findById('id');
    expect(result).toBeNull();
  });

  it('should throw on find error', async () => {
    prisma.transaction.findFirst.mockRejectedValue(new Error('fail'));
    await expect(repo.findById('id')).rejects.toThrow("Couldn't find transaction with id: id");
  });
});
