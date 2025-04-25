import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { LoggerModule } from '../../../../shared/logger/logger.module';
import { LoggerProvider } from '../../../../shared/logger/logger.provider';
import { KafkaProducerService } from './kafka.producer.service';

@Module({
  imports: [
    LoggerModule,

    ClientsModule.register([
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
  ],
  providers: [KafkaProducerService, LoggerProvider],
  exports: [KafkaProducerService, LoggerProvider],
})
export class KafkaModule {}
