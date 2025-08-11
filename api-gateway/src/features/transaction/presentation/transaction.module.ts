import { Module } from '@nestjs/common';
import { AxiosModule } from '../../shared/axios/axios.module';
import { LoggerModule } from '../../shared/logger/logger.module';
import { LoggerProvider } from '../../shared/logger/logger.provider';
import { KafkaModule } from '../infrastructure/messaging/kafka/kafka.module';
import { TransactionServiceProvider } from '../infrastructure/providers/transaction.provider';
import { TransactionController } from './http/controllers/transaction.controller';
import { transactionProviders } from './http/inject-providers/transaction.provider';

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
export class TransactionModule {}
