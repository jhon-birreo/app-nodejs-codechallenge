import { ApolloDriver, type ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { transactionProviders } from '../infrastructure/providers/transaction.provider';
import { ExceptionModule } from '../shared/exceptions/exception.module';
import { ExceptionProvider } from '../shared/exceptions/exception.provider';
import { LoggerProvider } from '..//shared/logger/logger.provider';
import { PrismaModule } from '../infrastructure/database/prisma/prisma.module';
import { KafkaModule } from '../infrastructure/messaging/kafka/kafka.module';
import { LoggerModule } from '../shared/logger/logger.module';
import { TransactionController } from './controllers/transaction.controller';
import { GraphqlModule } from './graphql/graphql.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), '../schema.gql'),
      playground: process.env.NODE_ENV === 'development',
      context: ({ req }) => ({ request: req }),
    }),
    PrismaModule,
    KafkaModule,
    LoggerModule,
    ExceptionModule,
    GraphqlModule,
  ],
  controllers: [TransactionController],
  providers: [...transactionProviders, LoggerProvider, ExceptionProvider],
  exports: [
    ...transactionProviders,
    LoggerModule,
    ExceptionModule,
    KafkaModule,
  ],
})
export class RoutesModule {}
