import { TransactionRepository } from '../../domain/repositories/transaction.repository';
import type { IExceptionProvider } from '../../shared/exceptions/exceptions.interface';
import type { ILoggerProvider } from '../../shared/logger/logger.interface';
import { TransactionResponseDto } from '../dto/transaction-response.dto';

export class GetTransactionUseCase {
  constructor(
    private readonly transactionRepo: TransactionRepository,
    private readonly logger: ILoggerProvider,
    private readonly exception: IExceptionProvider,
  ) {}

  async execute(id: string): Promise<TransactionResponseDto> {
    const transaction = await this.transactionRepo.findById(id);

    if (!transaction) {
      this.logger.error('transaction-service', 'transaction not found');
      throw this.exception.notFoundException({
        message: 'Transaction not found',
      });
    }
    const toObject = transaction.toResponseDto();
    return toObject;
  }
}
