// import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
// import { CreateTransactionUseCase } from '../../application/use-cases/create-transaction.use-case';
// import { GetTransactionUseCase } from '../../application/use-cases/get-transaction.use-case';
// import { CreateTransactionDto } from '../../application/dto/create-transaction.dto';
// import { TransactionResponseDto } from '../../application/dto/transaction-response.dto';

// @Resolver(() => TransactionResponseDto)
// export class TransactionResolver {
//   constructor(
//     private readonly createTransaction: CreateTransactionUseCase,
//     private readonly getTransaction: GetTransactionUseCase,
//   ) {}

//   @Mutation(() => String)
//   async createTransaction(@Args('data') dto: CreateTransactionDto) {
//     const result = await this.createTransaction.execute(dto);
//     return result.transactionExternalId;
//   }

//   @Query(() => TransactionResponseDto)
//   async getTransaction(@Args('id') id: string) {
//     return this.getTransaction.execute(id);
//   }
// }
