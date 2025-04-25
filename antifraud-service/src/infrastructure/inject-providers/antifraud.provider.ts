import type { Provider } from '@nestjs/common';
import { EvaluateTransactionUseCase } from '../../application/use-cases/evaluate-transaction.use-case';
import { TYPES } from '../../shared/constants/types.constant';
import type { ILoggerProvider } from '../../shared/logger/logger.interface';
import { LoggerProvider } from '../../shared/logger/logger.provider';
import { KafkaProducerService } from '../messaging/kafka/kafka.producer.service';

export const antiFraudProviders: Provider[] = [
  {
    provide: TYPES.EVALUATE_TRANSACTION_USECASE,
    useFactory: (
      kafkaProducer: KafkaProducerService,
      logger: ILoggerProvider,
    ) => new EvaluateTransactionUseCase(kafkaProducer, logger),
    inject: [KafkaProducerService, LoggerProvider],
  },
];
