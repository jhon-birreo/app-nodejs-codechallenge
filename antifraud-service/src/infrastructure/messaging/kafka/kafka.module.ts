import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { LoggerProvider } from '../../../shared/logger/logger.provider';
import { antiFraudProviders } from '../../../infrastructure/inject-providers/antifraud.provider';
import { LoggerModule } from '../../../shared/logger/logger.module';
import { KafkaConsumerService } from './kafka.consumer.service';
import { KafkaProducerService } from './kafka.producer.service';

@Module({
  imports: [
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
  ],
  providers: [
    LoggerProvider,
    KafkaConsumerService,
    KafkaProducerService,
    ...antiFraudProviders,
  ],
  exports: [KafkaProducerService, LoggerProvider],
})
export class KafkaModule {}
