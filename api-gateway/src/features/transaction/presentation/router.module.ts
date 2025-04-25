import { Module } from '@nestjs/common';
import { LoggerModule } from '../../shared/logger/logger.module';
import { LoggerProvider } from '../../shared/logger/logger.provider';
import { KafkaModule } from '../infrastructure/messaging/kafka/kafka.module';
import { TransactionController } from './http/controllers/transaction.controller';
import { transactionProviders } from './http/inject-providers/transaction.provider';
import { AxiosModule } from '../../shared/axios/axios.module';
import { TransactionServiceProvider } from '../infrastructure/providers/transaction-service.provider';

@Module({
  imports: [KafkaModule, LoggerModule, AxiosModule],
  controllers: [TransactionController],
  providers: [
    ...transactionProviders,
    LoggerProvider,
    TransactionServiceProvider,
  ],
  exports: [...transactionProviders, LoggerModule, AxiosModule],
})
export class RoutesModule {}
