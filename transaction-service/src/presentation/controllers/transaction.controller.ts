import { Controller, Get, Inject, Param } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import type { CreateTransactionUseCase } from '../../application/use-cases/create-transaction.use-case';
import { GetTransactionUseCase } from '../../application/use-cases/get-transaction.use-case';
import type { UpdateTransactionStatusUseCase } from '../../application/use-cases/update-transaction.use-case';
import { TOPICS } from '../../shared/constants/topic.constant';
import { TYPES } from '../../shared/constants/types.constant';
import type { UpdateTransactionDto } from './dtos/create-transaction-request.dto';
import type { ParamsWithId } from './dtos/get-transaction-request.dto';
import type { TransactionResponseDto } from './dtos/get-transaction-response.dto';
import type { CreateTransactionDto } from './dtos/update-transaction-request.dto';

@Controller('transactions')
export class TransactionController {
  constructor(
    @Inject(TYPES.CREATE_TRANSACTION_USECASE)
    private readonly createTransactionUseCase: CreateTransactionUseCase,
    @Inject(TYPES.GET_TRANSACTION_USECASE)
    private readonly getTransaction: GetTransactionUseCase,
    @Inject(TYPES.UPDATE_TRANSACTION_STATUS_USECASE)
    private readonly updateTransactionStatusUseCase: UpdateTransactionStatusUseCase,
  ) {}

  @MessagePattern(TOPICS.TRANSACTION_CREATE)
  async createTransaction(@Payload() payload: CreateTransactionDto) {
    return this.createTransactionUseCase.execute(payload);
  }

  @MessagePattern(TOPICS.TRANSACTION_STATUS_UPDATED)
  async updateTransactionStatus(@Payload() payload: UpdateTransactionDto) {
    const { transactionExternalId, status } = payload;
    return this.updateTransactionStatusUseCase.execute(
      transactionExternalId,
      status,
    );
  }

  @Get(':id')
  async findOne(
    @Param('id') paramsWithId: ParamsWithId,
  ): Promise<TransactionResponseDto> {
    return this.getTransaction.execute(paramsWithId.id);
  }
}
