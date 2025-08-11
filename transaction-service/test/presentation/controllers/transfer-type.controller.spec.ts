import { Test, TestingModule } from '@nestjs/testing';
import { TransferTypeController } from '../../../src/presentation/controllers/transfer-type.controller';
import { TYPES } from '../../../src/shared/constants/types.constant';

describe('TransferTypeController', () => {
  let controller: TransferTypeController;
  let getTransferType: any;

  beforeEach(async () => {
    getTransferType = { execute: jest.fn() };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransferTypeController],
      providers: [
        { provide: TYPES.GET_ALL_TRANSFER_TYPE_USECASE, useValue: getTransferType },
      ],
    }).compile();
    controller = module.get<TransferTypeController>(TransferTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call getTransferType.execute on findAll', async () => {
    getTransferType.execute.mockResolvedValue(['type1', 'type2']);
    const result = await controller.findAll();
    expect(getTransferType.execute).toHaveBeenCalled();
    expect(result).toEqual(['type1', 'type2']);
  });
});
