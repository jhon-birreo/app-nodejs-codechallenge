import { Injectable } from '@nestjs/common';
import { TransactionEntity } from '../../domain/entities/transaction.entity';
import { TransactionStatus } from '../../domain/enums/transaction-status.enum';
import { TransactionRepository } from '../../domain/repositories/transaction.repository';
import type { IExceptionProvider } from '../../shared/exceptions/exceptions.interface';
import type { ILoggerProvider } from '../../shared/logger/logger.interface';

@Injectable()
export class UpdateTransactionStatusUseCase {
  constructor(
    private readonly transactionRepo: TransactionRepository,
    private readonly logger: ILoggerProvider,
    private readonly exception: IExceptionProvider,
  ) {}

  async execute(id: string, status: string): Promise<void> {
    this.logger.log(
      'UpdateTransactionStatusUseCase.execute.payload',
      JSON.stringify({ id, status }),
    );
    const transaction = await this.transactionRepo.findById(id);
    if (!transaction) {
      this.logger.error('transaction-service', 'transaction not found');
      throw new this.exception.badRequestException({
        message: 'Transaction not found',
      });
    }

    const updatedTransaction = TransactionEntity.update(
      { status: status as TransactionStatus },
      transaction,
    );

    await this.transactionRepo.updateStatus(id, updatedTransaction);
    this.logger.log(
      'UpdateTransactionStatusUseCase.execute',
      'transaction status updated',
    );
  }
}
