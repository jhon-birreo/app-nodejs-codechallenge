import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import type { TransactionCreatedEvent } from '../../../application/events/transaction-created.event';
import { TOPICS } from '../../../shared/constants/topic.constant';
import { LoggerProvider } from '../../../shared/logger/logger.provider';

@Injectable()
export class KafkaProducerService {
  constructor(
    @Inject('KAFKA_PRODUCER') private readonly kafkaClient: ClientKafka,
    private readonly logger: LoggerProvider,
  ) {}

  async emitTransactionCreated(payload: TransactionCreatedEvent) {
    this.logger.log(
      'KafkaProducerService.emitTransactionCreated',
      `event: ${TOPICS.TRANSACTION_CREATED}, message: ${payload}`,
    );
    this.kafkaClient.emit(
      TOPICS.TRANSACTION_CREATED,
      JSON.stringify(payload.toPayload()),
    );
  }
}
