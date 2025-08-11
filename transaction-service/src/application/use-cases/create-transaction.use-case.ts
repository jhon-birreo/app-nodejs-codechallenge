import { Injectable } from '@nestjs/common';
import { TransactionEntity } from '../../domain/entities/transaction.entity';
import { TransactionRepository } from '../../domain/repositories/transaction.repository';
import { KafkaProducerService } from '../../infrastructure/messaging/kafka/kafka.producer.service';
import { ILoggerProvider } from '../../shared/logger/logger.interface';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { TransactionCreatedEvent } from '../events/transaction-created.event';
import { TransferTypeRepository } from '../../domain/repositories/transfer-type.repository';
import { TransactionStatus } from '../../domain/enums/transaction-status.enum';

@Injectable()
export class CreateTransactionUseCase {
  constructor(
    private readonly transactionRepo: TransactionRepository,
    private readonly kafkaProducer: KafkaProducerService,
    private readonly transferTypeRepo: TransferTypeRepository,
    private readonly logger: ILoggerProvider,
  ) {}

  async execute(
    dto: CreateTransactionDto,
  ): Promise<{ transactionExternalId: string }> {
    this.logger.log(
      'CreateTransactionUseCase.execute.payload',
      JSON.stringify(dto),
    );

    const transferType = await this.transferTypeRepo.findById(
      +dto.transferTypeId,
    );
    if (!transferType) {
      this.logger.error(
        'transaction-service',
        'transfer type not found: ' + dto.transferTypeId,
      );
    }

    const transaction = TransactionEntity.create({
      accountExternalIdDebit: dto.accountExternalIdDebit,
      accountExternalIdCredit: dto.accountExternalIdCredit,
      transferTypeId: +dto.transferTypeId,
      transferTypeName: transferType?.name || null,
      value: dto.value,
      status: transferType
        ? TransactionStatus.PENDING
        : TransactionStatus.REJECTED,
    });

    const saved = await this.transactionRepo.create(transaction);
    this.logger.log('transaction-service', 'transaction created');

    const event = new TransactionCreatedEvent(saved.toObject());

    await this.kafkaProducer.emitTransactionCreated(event);

    return { transactionExternalId: saved.transactionExternalId };
  }
}
