import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export class CreatedTransactionDto {
  @IsUUID()
  @IsNotEmpty()
  transactionExternalId: string;

  @IsNumber()
  @IsNotEmpty()
  value: number;
}
