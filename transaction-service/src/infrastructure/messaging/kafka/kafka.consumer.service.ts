import { Inject, Injectable, type OnModuleInit } from '@nestjs/common';
import { EventPattern, Payload, type ClientKafka } from '@nestjs/microservices';
import { UpdateTransactionStatusUseCase } from '../../../application/use-cases/update-transaction.use-case';
import { TransactionStatus } from '../../../domain/enums/transaction-status.enum';
import { TYPES } from '../../../shared/constants/types.constant';
import { LoggerProvider } from '../../../shared/logger/logger.provider';

@Injectable()
export class KafkaConsumerService implements OnModuleInit {
  constructor(
    @Inject('KAFKA_CONSUMER') private readonly kafkaClient: ClientKafka,
  ) {}

  async onModuleInit() {
    await this.kafkaClient.connect();
  }
}
