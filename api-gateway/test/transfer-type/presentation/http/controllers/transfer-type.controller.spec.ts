import { TransferTypeController } from '../../../../../src/features/transfer-type/presentation/http/controllers/transfer-type.controller';

describe('TransferTypeController', () => {
  let controller: TransferTypeController;
  let getAllTransferTypes: any;

  beforeEach(() => {
    getAllTransferTypes = { execute: jest.fn().mockResolvedValue([{ id: 1, name: 'Visa' }]) };
    controller = new TransferTypeController(getAllTransferTypes);
  });

  it('should get all transfer types', async () => {
    const result = await controller.findAll();
    expect(getAllTransferTypes.execute).toHaveBeenCalled();
    expect(result).toEqual([{ id: 1, name: 'Visa' }]);
  });
});
