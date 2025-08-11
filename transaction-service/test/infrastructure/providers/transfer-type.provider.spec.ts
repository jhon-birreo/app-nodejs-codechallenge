import { transferTypeProviders } from '../../../src/infrastructure/providers/transfer-type.provider';
import { TYPES } from '../../../src/shared/constants/types.constant';

describe('transferTypeProviders', () => {
  it('should provide TransferTypeRepository', () => {
    const repoProvider = transferTypeProviders.find(
      (p) => typeof p === 'object' && p !== null && 'provide' in p && (p as any).provide && (p as any).provide.name === 'TransferTypeRepository'
    );
    expect(repoProvider).toBeDefined();
    expect((repoProvider as any).useClass && (repoProvider as any).useClass.name).toBe('PrismaTransferTypeRepositoryImpl');
  });

  it('should provide TYPES.GET_ALL_TRANSFER_TYPE_USECASE', () => {
    const useCaseProvider = transferTypeProviders.find(
      (p) => typeof p === 'object' && p !== null && 'provide' in p && (p as any).provide === TYPES.GET_ALL_TRANSFER_TYPE_USECASE
    );
    expect(useCaseProvider).toBeDefined();
    expect(typeof (useCaseProvider as any).useFactory).toBe('function');
    expect(Array.isArray((useCaseProvider as any).inject)).toBe(true);
  });
});
