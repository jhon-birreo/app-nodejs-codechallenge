import type { Provider } from '@nestjs/common';
import { TYPES } from '../../../../shared/constants/types.constant';
import type { ILoggerProvider } from '../../../../shared/logger/logger.interface';
import { LoggerProvider } from '../../../../shared/logger/logger.provider';
import { CreateTransactionUseCase } from '../../../application/use-cases/create-transaction.use-case';
import { GetTransactionUseCase } from '../../../application/use-cases/get-transaction.use-case';
import { KafkaProducerService } from '../../../infrastructure/messaging/kafka/kafka.producer.service';
import { TransactionServiceProvider } from '../../../infrastructure/providers/transaction.provider';

export const transactionProviders: Provider[] = [
  {
    provide: TYPES.CREATE_TRANSACTION_USECASE,
    useFactory: (
      kafkaProducer: KafkaProducerService,
      logger: ILoggerProvider,
    ) => new CreateTransactionUseCase(kafkaProducer, logger),
    inject: [KafkaProducerService, LoggerProvider],
  },
  {
    provide: TYPES.GET_TRANSACTION_USECASE,
    useFactory: (
      transactionServiceProvider: TransactionServiceProvider,
      logger: ILoggerProvider,
    ) => new GetTransactionUseCase(transactionServiceProvider, logger),
    inject: [TransactionServiceProvider, LoggerProvider],
  },
];
