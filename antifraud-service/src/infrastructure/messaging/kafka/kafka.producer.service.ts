import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { TransactionStatusUpdateEvent } from '../../../application/events/transaction-status-update.event';
import { TOPICS } from '../../../shared/constants/topic.constant';
import { LoggerProvider } from '../../../shared/logger/logger.provider';

@Injectable()
export class KafkaProducerService {
  constructor(
    @Inject('KAFKA_PRODUCER') private readonly kafkaClient: ClientKafka,
    private readonly logger: LoggerProvider,
  ) {}

  async emitTransactionUpdateStatus(payload: TransactionStatusUpdateEvent) {
    this.logger.log(
      'KafkaProducerService.emitTransactionUpdateStatus.payload',
      `event: ${TOPICS.TRANSACTION_STATUS_UPDATED}, message: ${payload}`,
    );
    this.kafkaClient.emit(
      TOPICS.TRANSACTION_STATUS_UPDATED,
      JSON.stringify(payload.toPayload()),
    );
  }
}
