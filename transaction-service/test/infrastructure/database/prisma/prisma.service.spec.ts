import { PrismaService } from '../../../../src/infrastructure/database/prisma/prisma.service';

describe('PrismaService', () => {
  let service: PrismaService;

  beforeEach(() => {
    service = new PrismaService();
  });

  it('should be defined', () => {
    expect(service.constructor.name).toBe('PrismaService');
  });

  it('should connect and disconnect', async () => {
    service.$connect = jest.fn();
    service.$disconnect = jest.fn();
    await service.onModuleInit();
    await service.onModuleDestroy();
    expect(service.$connect).toHaveBeenCalled();
    expect(service.$disconnect).toHaveBeenCalled();
  });
});
