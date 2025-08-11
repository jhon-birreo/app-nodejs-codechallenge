import { Controller, Get, Inject } from '@nestjs/common';
import type { GetAllTransferTypeUseCase } from '../../../../../features/transfer-type/application/use-cases/get-all-transfer-type.use-case';
import { TYPES } from '../../../../shared/constants/types.constant';
import type { TransferTypeResponseDto } from '../dtos/get-all-transfer-type-response.dto';

@Controller('transfer-types')
export class TransferTypeController {
  constructor(
    @Inject(TYPES.GET_ALL_TRANSFER_TYPE_USECASE)
    private readonly getAllTransferTypes: GetAllTransferTypeUseCase,
  ) {}

  @Get('')
  async findAll(): Promise<TransferTypeResponseDto[]> {
    return this.getAllTransferTypes.execute();
  }
}
