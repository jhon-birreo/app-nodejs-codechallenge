import { Injectable } from '@nestjs/common';
import { AxiosProvider } from '../../../shared/axios/axios.provider';
import { LoggerProvider } from '../../../shared/logger/logger.provider';
import type { TransactionServiceProviderResponseDto } from './dtos/get-transaction-response.dto';

@Injectable()
export class TransactionServiceProvider {
  constructor(
    private readonly axios: AxiosProvider,
    private readonly logger: LoggerProvider,
  ) {}

  async getTransaction(
    id: string,
  ): Promise<TransactionServiceProviderResponseDto> {
    try {
      const result =
        await this.axios.get<TransactionServiceProviderResponseDto>(
          `/transactions/${id}`,
        );
      return result.data;
    } catch (error) {
      this.logger.error(
        'TransactionServiceProvider.getTransaction.error',
        error,
      );
      throw error;
    }
  }
}
