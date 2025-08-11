import type { TransferTypeRepository } from 'src/domain/repositories/transfer-type.repository';
import type { IExceptionProvider } from '../../shared/exceptions/exceptions.interface';
import type { ILoggerProvider } from '../../shared/logger/logger.interface';
import type { TransferTypeResponseDto } from '../dto/transfer-type.response.dto';

export class GetAllTransferTypeUseCase {
  constructor(
    private readonly transferTypeRepo: TransferTypeRepository,
    private readonly logger: ILoggerProvider,
    private readonly exception: IExceptionProvider,
  ) {}

  async execute(): Promise<TransferTypeResponseDto[]> {
    const transferTypes = await this.transferTypeRepo.findAll();

    if (!transferTypes || transferTypes.length === 0) {
      this.logger.error('transaction-service', 'no transfer types found');
      throw this.exception.notFoundException({
        message: 'Transfer types not found',
      });
    }
    const toObject = transferTypes.map((type) => type.toResponseDto());
    return toObject;
  }
}
