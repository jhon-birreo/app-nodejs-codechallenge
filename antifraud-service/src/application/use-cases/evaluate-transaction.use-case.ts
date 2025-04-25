import { Injectable } from '@nestjs/common';
import type { CreatedTransactionDto } from '../dto/created-transaction.dto';
import { TransactionStatusUpdateEvent } from '../events/transaction-status-update.event';
// import { KafkaProducerService } from '../../infrastructure/messaging/kafka/kafka.producer';
import { AntiFraudEntity } from '../../domain/entities/antifraud.entity';
import { AntiFraudServices } from '../../domain/services/antifraud.services';
import { KafkaProducerService } from '../../infrastructure/messaging/kafka/kafka.producer.service';
import { ILoggerProvider } from '../../shared/logger/logger.interface';

@Injectable()
export class EvaluateTransactionUseCase {
  antiFraudService: AntiFraudServices;
  constructor(
    private readonly kafkaProducer: KafkaProducerService,
    private readonly logger: ILoggerProvider,
  ) {
    const antiFraudAmountLimit = Number(
      process.env.ANTI_FRAUD_AMOUNT_LIMIT || 0,
    );
    this.antiFraudService = new AntiFraudServices(antiFraudAmountLimit);
  }

  async execute(dto: CreatedTransactionDto): Promise<void> {
    this.logger.log(
      'EvaluateTransactionUseCase.execute.payload',
      JSON.stringify(dto),
    );
    const transaction = new AntiFraudEntity(
      dto.transactionExternalId,
      dto.value,
    );
    const validateStatus =
      this.antiFraudService.evaluateTransaction(transaction);

    const event = new TransactionStatusUpdateEvent({
      transactionExternalId: transaction.transactionExternalId,
      status: validateStatus,
    });

    await this.kafkaProducer.emitTransactionUpdateStatus(event);
  }
}
