import type { Provider } from '@nestjs/common';
import { CreateTransactionUseCase } from '../../application/use-cases/create-transaction.use-case';
import { GetTransactionUseCase } from '../../application/use-cases/get-transaction.use-case';
import { UpdateTransactionStatusUseCase } from '../../application/use-cases/update-transaction.use-case';
import { TransactionRepository } from '../../domain/repositories/transaction.repository';
import { TYPES } from '../../shared/constants/types.constant';
import { ExceptionProvider } from '../../shared/exceptions/exception.provider';
import type { IExceptionProvider } from '../../shared/exceptions/exceptions.interface';
import type { ILoggerProvider } from '../../shared/logger/logger.interface';
import { LoggerProvider } from '../../shared/logger/logger.provider';
import { KafkaProducerService } from '../messaging/kafka/kafka.producer.service';
import { PrismaTransactionRepositoryImpl } from '../persistence/prisma-transaction.repository.impl';

export const transactionProviders: Provider[] = [
  {
    provide: TransactionRepository,
    useClass: PrismaTransactionRepositoryImpl,
  },
  {
    provide: TYPES.CREATE_TRANSACTION_USECASE,
    useFactory: (
      transactionPrisma: PrismaTransactionRepositoryImpl,
      kafkaProducer: KafkaProducerService,
      logger: ILoggerProvider,
    ) => new CreateTransactionUseCase(transactionPrisma, kafkaProducer, logger),
    inject: [TransactionRepository, KafkaProducerService, LoggerProvider],
  },
  {
    provide: TYPES.GET_TRANSACTION_USECASE,
    useFactory: (
      transactionPrisma: PrismaTransactionRepositoryImpl,
      logger: ILoggerProvider,
      exception: IExceptionProvider,
    ) => new GetTransactionUseCase(transactionPrisma, logger, exception),
    inject: [TransactionRepository, LoggerProvider, ExceptionProvider],
  },
  {
    provide: TYPES.UPDATE_TRANSACTION_STATUS_USECASE,
    useFactory: (
      transactionPrisma: PrismaTransactionRepositoryImpl,
      logger: ILoggerProvider,
      exception: IExceptionProvider,
    ) =>
      new UpdateTransactionStatusUseCase(transactionPrisma, logger, exception),
    inject: [TransactionRepository, LoggerProvider, ExceptionProvider],
  },
];
