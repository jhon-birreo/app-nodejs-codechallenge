import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class UpdateTransactionDto {
  @IsUUID()
  @IsNotEmpty()
  transactionExternalId: string;

  @IsString()
  @IsNotEmpty()
  status: string;
}
