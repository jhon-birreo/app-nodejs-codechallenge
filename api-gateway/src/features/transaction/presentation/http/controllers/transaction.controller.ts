import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import type { CreateTransactionUseCase } from '../../../../../features/transaction/application/use-cases/create-transaction.use-case';
import type { GetTransactionUseCase } from '../../../../../features/transaction/application/use-cases/get-transaction.use-case';
import { TYPES } from '../../../../../features/shared/constants/types.constant';
import type { TransactionResponseDto } from '../../../../../features/transaction/application/dto/transaction-response.dto';
import { CreateTransactionDto } from '../dtos/create-transaction-request.dto';
import type { CreateTransactionResponseDto } from '../dtos/create-transaction-response.dto';
import type { ParamsWithId } from '../dtos/get-transaction-request.dto';

@Controller('transactions')
export class TransactionController {
  constructor(
    @Inject(TYPES.CREATE_TRANSACTION_USECASE)
    private readonly createTransaction: CreateTransactionUseCase,
    @Inject(TYPES.GET_TRANSACTION_USECASE)
    private readonly getTransaction: GetTransactionUseCase,
  ) {}

  @Post()
  async create(
    @Body() dto: CreateTransactionDto,
  ): Promise<CreateTransactionResponseDto> {
    return this.createTransaction.execute(dto);
  }

  @Get(':id')
  async findOne(
    @Param('id') paramsWithId: ParamsWithId,
  ): Promise<TransactionResponseDto> {
    return this.getTransaction.execute(paramsWithId.id);
  }
}
