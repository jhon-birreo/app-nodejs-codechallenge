import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { PrismaTransactionRepositoryImpl } from '../../infrastructure/persistence/prisma-transaction.repository.impl';
import { GetTransactionResponseDto } from './dtos/get-transaction-response.dto';

@Resolver(() => GetTransactionResponseDto)
export class TransactionResolver {
  constructor(
    private readonly transactionRepository: PrismaTransactionRepositoryImpl,
  ) {}

  @Query(() => GetTransactionResponseDto)
  async getTransaction(@Args('id') id: string) {
    const transaction = await this.transactionRepository.findById(id);

    if (!transaction) {
      throw new NotFoundException('Transaction not found');
    }

    return transaction.toResponseDto();
  }
}
