import { Module } from '@nestjs/common';
import { PrismaTransactionRepositoryImpl } from '../..//infrastructure/persistence/prisma-transaction.repository.impl';
import { PrismaModule } from '../../infrastructure/database/prisma/prisma.module';
import { PrismaService } from '../../infrastructure/database/prisma/prisma.service';
import { KafkaModule } from '../../infrastructure/messaging/kafka/kafka.module';
import { ExceptionModule } from '../../shared/exceptions/exception.module';
import { LoggerModule } from '../../shared/logger/logger.module';
import { TransactionResolver } from './transaction.resolver';

@Module({
  imports: [PrismaModule, LoggerModule, ExceptionModule, KafkaModule],
  providers: [
    TransactionResolver,
    PrismaService,
    PrismaTransactionRepositoryImpl,
  ],
  exports: [GraphqlModule],
})
export class GraphqlModule {}
