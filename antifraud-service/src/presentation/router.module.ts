import { Module } from '@nestjs/common';
import { LoggerProvider } from '..//shared/logger/logger.provider';
import { antiFraudProviders } from '../infrastructure/inject-providers/antifraud.provider';
import { KafkaModule } from '../infrastructure/messaging/kafka/kafka.module';
import { LoggerModule } from '../shared/logger/logger.module';
import { AntiFraudController } from './controllers/antifraud.controller';

@Module({
  imports: [KafkaModule, LoggerModule],
  controllers: [AntiFraudController],
  providers: [...antiFraudProviders, LoggerProvider],
  exports: [...antiFraudProviders, LoggerModule],
})
export class RoutesModule {}
