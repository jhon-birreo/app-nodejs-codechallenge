import type { ILoggerProvider } from '../../../shared/logger/logger.interface';
import { TransactionServiceProvider } from '../../infrastructure/providers/transaction-service.provider';
import { TransactionResponseDto } from '../dto/transaction-response.dto';

export class GetTransactionUseCase {
  constructor(
    private readonly transactionService: TransactionServiceProvider,
    private readonly logger: ILoggerProvider,
  ) {}

  async execute(id: string): Promise<TransactionResponseDto> {
    const transaction = await this.transactionService.getTransaction(id);
    this.logger.log(
      'GetTransactionUseCase.execute.result',
      JSON.stringify(transaction),
    );
    return transaction;
  }
}
