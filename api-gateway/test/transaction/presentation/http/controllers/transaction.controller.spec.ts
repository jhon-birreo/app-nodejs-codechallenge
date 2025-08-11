import { TransactionController } from '../../../../../src/features/transaction/presentation/http/controllers/transaction.controller';

describe('TransactionController', () => {
  let controller: TransactionController;
  let createTransaction: any;
  let getTransaction: any;

  beforeEach(() => {
    createTransaction = {
      execute: jest.fn().mockResolvedValue({ transactionExternalId: 'tx-id' }),
    };
    getTransaction = {
      execute: jest.fn().mockResolvedValue({ id: '1', value: 100 }),
    };
    controller = new TransactionController(createTransaction, getTransaction);
  });

  it('should create a transaction', async () => {
    const dto = { value: 100 } as any;
    const result = await controller.create(dto);
    expect(createTransaction.execute).toHaveBeenCalledWith(dto);
    expect(result).toEqual({ transactionExternalId: 'tx-id' });
  });

  it('should get a transaction by id', async () => {
    const params = { id: '1' };
    const result = await controller.findOne(params);
    expect(getTransaction.execute).toHaveBeenCalledWith('1');
    expect(result).toEqual({ id: '1', value: 100 });
  });
});
