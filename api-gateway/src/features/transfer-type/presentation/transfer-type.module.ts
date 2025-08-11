import { Module } from '@nestjs/common';
import { AxiosModule } from '../../shared/axios/axios.module';
import { LoggerModule } from '../../shared/logger/logger.module';
import { LoggerProvider } from '../../shared/logger/logger.provider';
import { TransferTypeProvider } from '../infrastructure/providers/transfer-type.provider';
import { TransferTypeController } from './http/controllers/transfer-type.controller';
import { transferTypeProviders } from './http/inject-providers/transfer-type.provider';

@Module({
  imports: [LoggerModule, AxiosModule],
  controllers: [TransferTypeController],
  providers: [...transferTypeProviders, LoggerProvider, TransferTypeProvider],
  exports: [...transferTypeProviders, LoggerModule, AxiosModule],
})
export class TransferTypeModule {}
