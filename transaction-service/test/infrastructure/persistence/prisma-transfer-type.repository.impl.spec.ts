import { PrismaTransferTypeRepositoryImpl } from '../../../src/infrastructure/persistence/prisma-transfer-type.repository.impl';
import { PrismaService } from '../../../src/infrastructure/database/prisma/prisma.service';
import { PrismaTransferTypeMapper } from '../../../src/infrastructure/persistence/prisma-transfer-type.mapper';

describe('PrismaTransferTypeRepositoryImpl', () => {
  let repo: PrismaTransferTypeRepositoryImpl;
  let prisma: any;

  beforeEach(() => {
    prisma = {
      transferType: {
        findUnique: jest.fn(),
        findMany: jest.fn(),
      },
    };
    repo = new PrismaTransferTypeRepositoryImpl(prisma as any);
  });

  it('should find by id and return entity', async () => {
    const found = { id: 1 };
    jest.spyOn(prisma.transferType, 'findUnique').mockResolvedValue(found);
    jest.spyOn(PrismaTransferTypeMapper, 'toDomain').mockReturnValue('entity' as any);
    const result = await repo.findById(1);
    expect(result).toBe('entity');
  });

  it('should return null if not found', async () => {
    prisma.transferType.findUnique.mockResolvedValue(null);
    const result = await repo.findById(1);
    expect(result).toBeNull();
  });

  it('should find all and map to entities', async () => {
    const found = [{ id: 1 }, { id: 2 }];
    jest.spyOn(prisma.transferType, 'findMany').mockResolvedValue(found);
    jest.spyOn(PrismaTransferTypeMapper, 'toDomain').mockImplementation((x) => x as any);
    const result = await repo.findAll();
    expect(result).toEqual(found);
  });
});
