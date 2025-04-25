import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
class TransactionTypeDto {
  @Field()
  name: string;
}

@ObjectType()
class TransactionStatusDto {
  @Field()
  name: string;
}

@ObjectType()
export class GetTransactionResponseDto {
  @Field(() => ID)
  transactionExternalId: string;

  @Field(() => TransactionTypeDto, { nullable: true })
  transactionType: TransactionTypeDto;

  @Field(() => TransactionStatusDto, { nullable: true })
  transactionStatus: TransactionStatusDto;

  @Field()
  value: number;

  @Field()
  createdAt: string;
}
