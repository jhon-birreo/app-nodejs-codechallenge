import { transactionProviders } from '../../../src/infrastructure/providers/transaction.provider';
import { TYPES } from '../../../src/shared/constants/types.constant';

describe('transactionProviders', () => {
  it('should provide TransactionRepository', () => {
    const repoProvider = transactionProviders.find(
      (p) => typeof (p as any).provide !== 'undefined' && (p as any).provide?.name === 'TransactionRepository'
    );
    expect(repoProvider).toBeDefined();
    expect('useClass' in repoProvider!).toBe(true);
    expect((repoProvider! as any).useClass.name).toBe('PrismaTransactionRepositoryImpl');
  });

  it('should provide TransferTypeRepository', () => {
    const repoProvider = transactionProviders.find(
      (p) => typeof (p as any).provide !== 'undefined' && (p as any).provide?.name === 'TransferTypeRepository'
    );
    expect(repoProvider).toBeDefined();
    expect((repoProvider! as any).useClass.name).toBe('PrismaTransferTypeRepositoryImpl');
  });

  it('should provide TYPES.CREATE_TRANSACTION_USECASE', () => {
    const useCaseProvider = transactionProviders.find((p) => (p as any).provide === TYPES.CREATE_TRANSACTION_USECASE);
    expect(useCaseProvider).toBeDefined();
    expect('useFactory' in (useCaseProvider as any) && typeof (useCaseProvider as any).useFactory === 'function').toBe(true);
    expect('inject' in (useCaseProvider as any) && Array.isArray((useCaseProvider as any).inject)).toBe(true);
  });
});
