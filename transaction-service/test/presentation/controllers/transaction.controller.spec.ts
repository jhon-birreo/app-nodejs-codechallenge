import { Test, TestingModule } from '@nestjs/testing';
import { TransactionController } from '../../../src/presentation/controllers/transaction.controller';
import { TYPES } from '../../../src/shared/constants/types.constant';
import { TOPICS } from '../../../src/shared/constants/topic.constant';

describe('TransactionController', () => {
  let controller: TransactionController;
  let createTransactionUseCase: any;
  let getTransaction: any;
  let updateTransactionStatusUseCase: any;

  beforeEach(async () => {
    createTransactionUseCase = { execute: jest.fn() };
    getTransaction = { execute: jest.fn() };
    updateTransactionStatusUseCase = { execute: jest.fn() };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactionController],
      providers: [
        { provide: TYPES.CREATE_TRANSACTION_USECASE, useValue: createTransactionUseCase },
        { provide: TYPES.GET_TRANSACTION_USECASE, useValue: getTransaction },
        { provide: TYPES.UPDATE_TRANSACTION_STATUS_USECASE, useValue: updateTransactionStatusUseCase },
      ],
    }).compile();
    controller = module.get<TransactionController>(TransactionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call createTransactionUseCase.execute on createTransaction', async () => {
    const payload = {
      accountExternalIdDebit: 'uuid-1',
      accountExternalIdCredit: 'uuid-2',
      transferTypeId: 1,
      value: 100,
    };
    createTransactionUseCase.execute.mockResolvedValue('result');
    const result = await controller.createTransaction(payload);
    expect(createTransactionUseCase.execute).toHaveBeenCalledWith(payload);
    expect(result).toBe('result');
  });

  it('should call updateTransactionStatusUseCase.execute on updateTransactionStatus', async () => {
    const payload = { transactionExternalId: 'id', status: 'COMPLETED' };
    updateTransactionStatusUseCase.execute.mockResolvedValue('updated');
    const result = await controller.updateTransactionStatus(payload);
    expect(updateTransactionStatusUseCase.execute).toHaveBeenCalledWith('id', 'COMPLETED');
    expect(result).toBe('updated');
  });

  it('should call getTransaction.execute on findOne', async () => {
    getTransaction.execute.mockResolvedValue('tx');
    const params = { id: 'id' };
    const result = await controller.findOne(params);
    expect(getTransaction.execute).toHaveBeenCalledWith('id');
    expect(result).toBe('tx');
  });
});
