import type { Provider } from '@nestjs/common';
import { GetAllTransferTypeUseCase } from '../../application/use-cases/get-all-transfer-type.user-case';
import { TYPES } from '../../shared/constants/types.constant';
import { ExceptionProvider } from '../../shared/exceptions/exception.provider';
import type { IExceptionProvider } from '../../shared/exceptions/exceptions.interface';
import type { ILoggerProvider } from '../../shared/logger/logger.interface';
import { LoggerProvider } from '../../shared/logger/logger.provider';
import { PrismaTransferTypeRepositoryImpl } from '../persistence/prisma-transfer-type.repository.impl';
import { TransferTypeRepository } from '../../domain/repositories/transfer-type.repository';

export const transferTypeProviders: Provider[] = [
  {
    provide: TransferTypeRepository,
    useClass: PrismaTransferTypeRepositoryImpl,
  },

  {
    provide: TYPES.GET_ALL_TRANSFER_TYPE_USECASE,
    useFactory: (
      transferType: PrismaTransferTypeRepositoryImpl,
      logger: ILoggerProvider,
      exception: IExceptionProvider,
    ) => new GetAllTransferTypeUseCase(transferType, logger, exception),
    inject: [TransferTypeRepository, LoggerProvider, ExceptionProvider],
  },
];
