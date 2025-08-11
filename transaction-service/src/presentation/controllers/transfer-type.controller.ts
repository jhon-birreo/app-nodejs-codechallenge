import { Controller, Get, Inject } from '@nestjs/common';
import type { TransferTypeResponseDto } from 'src/application/dto/transfer-type.response.dto';
import { GetAllTransferTypeUseCase } from '../../application/use-cases/get-all-transfer-type.user-case';
import { TYPES } from '../../shared/constants/types.constant';

@Controller('transfer-types')
export class TransferTypeController {
  constructor(
    @Inject(TYPES.GET_ALL_TRANSFER_TYPE_USECASE)
    private readonly getTransferType: GetAllTransferTypeUseCase,
  ) {}

  @Get('')
  async findAll(): Promise<TransferTypeResponseDto[]> {
    return this.getTransferType.execute();
  }
}
