import { PrismaTransferTypeMapper } from '../../../src/infrastructure/persistence/prisma-transfer-type.mapper';

describe('PrismaTransferTypeMapper', () => {
  it('should map to domain', () => {
    const transferType = {
      id: 1,
      name: 'type',
      description: 'desc',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const entity = PrismaTransferTypeMapper.toDomain(transferType as any);
    expect(entity).toBeInstanceOf(Object);
  });
});
