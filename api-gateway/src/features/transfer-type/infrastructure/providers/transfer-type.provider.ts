import { Injectable } from '@nestjs/common';
import { AxiosProvider } from '../../../shared/axios/axios.provider';
import { LoggerProvider } from '../../../shared/logger/logger.provider';
import type { TransferTypeProviderResponseDto } from './dtos/get-transfer-type-response.dto';

@Injectable()
export class TransferTypeProvider {
  constructor(
    private readonly axios: AxiosProvider,
    private readonly logger: LoggerProvider,
  ) {}

  async getTransferType(id: string): Promise<TransferTypeProviderResponseDto> {
    try {
      const result = await this.axios.get<TransferTypeProviderResponseDto>(
        `/transfer-types/${id}`,
      );
      return result.data;
    } catch (error) {
      this.logger.error(
        'TransactionServiceProvider.getTransferType.error',
        error,
      );
      throw error;
    }
  }

  async getAllTransferTypes(): Promise<TransferTypeProviderResponseDto[]> {
    try {
      const result =
        await this.axios.get<TransferTypeProviderResponseDto[]>(
          `/transfer-types`,
        );
      return result.data;
    } catch (error) {
      this.logger.error(
        'TransactionServiceProvider.getAllTransferTypes.error',
        error,
      );
      throw error;
    }
  }
}
