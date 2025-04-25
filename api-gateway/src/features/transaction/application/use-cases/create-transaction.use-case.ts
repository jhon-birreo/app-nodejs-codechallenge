import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { TransactionCreatedEvent } from '../events/transaction-created.event';
// import { KafkaProducerService } from '../../infrastructure/messaging/kafka/kafka.producer';
import { ILoggerProvider } from '../../../shared/logger/logger.interface';
import { KafkaProducerService } from '../../infrastructure/messaging/kafka/kafka.producer.service';

@Injectable()
export class CreateTransactionUseCase {
  constructor(
    private readonly kafkaProducer: KafkaProducerService,
    private readonly logger: ILoggerProvider,
  ) {}

  async execute(dto: CreateTransactionDto): Promise<{ message: string }> {
    const event = new TransactionCreatedEvent(dto);
    this.logger.log('transaction-service', 'transaction created');
    await this.kafkaProducer.emitTransactionCreated(event);

    return { message: 'Transaction created' };
  }
}
