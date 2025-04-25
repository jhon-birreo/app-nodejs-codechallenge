import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { TOPICS } from '../../../../shared/constants/topic.constant';
import { LoggerProvider } from '../../../../shared/logger/logger.provider';
import { TransactionCreatedEvent } from '../../../application/events/transaction-created.event';

@Injectable()
export class KafkaProducerService {
  constructor(
    @Inject('KAFKA_PRODUCER') private readonly kafkaClient: ClientKafka,
    private readonly logger: LoggerProvider,
  ) {}

  async emitTransactionCreated(payload: TransactionCreatedEvent) {
    this.logger.log(
      'kafka-producer',
      `event: topic.transaction.create, message: ${payload}`,
    );
    this.kafkaClient.emit(TOPICS.TRANSACTION_CREATE, {
      key: 'transaction.create',
      value: JSON.stringify(payload.toPayload()),
    });
  }
}
