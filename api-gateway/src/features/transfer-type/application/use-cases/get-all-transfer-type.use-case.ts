import type { ILoggerProvider } from '../../../shared/logger/logger.interface';
import type { TransferTypeProviderResponseDto } from '../../infrastructure/providers/dtos/get-transfer-type-response.dto';
import type { TransferTypeProvider } from '../../infrastructure/providers/transfer-type.provider';

export class GetAllTransferTypeUseCase {
  constructor(
    private readonly transactionService: TransferTypeProvider,
    private readonly logger: ILoggerProvider,
  ) {}

  async execute(): Promise<TransferTypeProviderResponseDto[]> {
    const transaction = await this.transactionService.getAllTransferTypes();
    this.logger.log(
      'GetAllTransferTypeUseCase.execute.result',
      JSON.stringify(transaction),
    );
    return transaction;
  }
}
