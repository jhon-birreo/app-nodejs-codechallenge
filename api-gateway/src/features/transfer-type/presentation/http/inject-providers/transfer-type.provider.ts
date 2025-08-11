import type { Provider } from '@nestjs/common';
import { TYPES } from '../../../../shared/constants/types.constant';
import type { ILoggerProvider } from '../../../../shared/logger/logger.interface';
import { LoggerProvider } from '../../../../shared/logger/logger.provider';
import { GetAllTransferTypeUseCase } from '../../../application/use-cases/get-all-transfer-type.use-case';
import { TransferTypeProvider } from '../../../infrastructure/providers/transfer-type.provider';

export const transferTypeProviders: Provider[] = [
  {
    provide: TYPES.GET_ALL_TRANSFER_TYPE_USECASE,
    useFactory: (
      transferTypeProvider: TransferTypeProvider,
      logger: ILoggerProvider,
    ) => new GetAllTransferTypeUseCase(transferTypeProvider, logger),
    inject: [TransferTypeProvider, LoggerProvider],
  },
];
