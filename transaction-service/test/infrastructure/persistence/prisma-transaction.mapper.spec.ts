import { PrismaTransactionMapper } from '../../../src/infrastructure/persistence/prisma-transaction.mapper';

describe('PrismaTransactionMapper', () => {
  it('should map to domain', () => {
    const transaction = {
      transactionExternalId: 'id',
      accountExternalIdDebit: 'debit',
      accountExternalIdCredit: 'credit',
      transferTypeId: 1,
      transferTypeName: 'Visa',
      value: 100,
      status: 'PENDING',
      createdAt: new Date(),
      transactionId: 1,
    };
    const entity = PrismaTransactionMapper.toDomain(transaction as any);
    expect(entity).toBeInstanceOf(Object);
  });

  it('should map to persistence', () => {
    const transaction = {
      transactionExternalId: 'id',
      accountExternalIdDebit: 'debit',
      accountExternalIdCredit: 'credit',
      transferTypeId: 1,
      transferTypeName: 'Visa',
      value: 100,
      status: 'PENDING',
      createdAt: new Date(),
    };
    const result = PrismaTransactionMapper.toPersistence(transaction);
    expect(result).toMatchObject(transaction);
  });
});
