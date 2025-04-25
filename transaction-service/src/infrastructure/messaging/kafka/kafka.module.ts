import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { transactionProviders } from '../../../infrastructure/providers/transaction.provider';
import { ExceptionModule } from '../../../shared/exceptions/exception.module';
import { LoggerModule } from '../../../shared/logger/logger.module';
import { LoggerProvider } from '../../../shared/logger/logger.provider';
import { PrismaModule } from '../../database/prisma/prisma.module';
import { KafkaConsumerService } from './kafka.consumer.service';
import { KafkaProducerService } from './kafka.producer.service';

@Module({
  imports: [
    PrismaModule,
    // ClientsModule.register([
    //   {
    //     name: 'KAFKA_SERVICE',
    //     transport: Transport.KAFKA,
    //     options: {
    //       client: {
    //         // clientId: 'transaction-client',
    //         brokers: ['localhost:9092'],
    //       },
    //       consumer: {
    //         groupId: 'transaction-consumer',
    //       },
    //       serializer: {
    //         serialize: (value) => Buffer.from(JSON.stringify(value)),
    //       },
    //       deserializer: {
    //         deserialize: (value) => JSON.parse(value.toString()),
    //       },
    //     },
    //   },
    // ]),
    ClientsModule.register([
      {
        name: 'KAFKA_CONSUMER',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: [process.env.KAFKA_BROKER || 'localhost:9092'],
            retry: {
              initialRetryTime: 3000,
              retries: 10,
            },
          },
          consumer: {
            groupId: 'transaction-consumer',
          },
          serializer: {
            serialize: (value) => Buffer.from(JSON.stringify(value)),
          },
          deserializer: {
            deserialize: (value) => JSON.parse(value.toString()),
          },
        },
      },
      {
        name: 'KAFKA_PRODUCER',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: [process.env.KAFKA_BROKER || 'localhost:9092'],
          },
          producerOnlyMode: true,
        },
      },
    ]),
    LoggerModule,
    ExceptionModule,
  ],
  providers: [
    LoggerProvider,
    KafkaConsumerService,
    KafkaProducerService,
    ...transactionProviders,
  ],
  exports: [KafkaProducerService, KafkaConsumerService, LoggerProvider],
})
export class KafkaModule {}
