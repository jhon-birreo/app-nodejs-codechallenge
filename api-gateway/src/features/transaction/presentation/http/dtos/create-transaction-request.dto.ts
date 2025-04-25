import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';
import { IsValidTransactionTypeId } from '../validations/is-valid-transaction-type-id';

export class CreateTransactionDto {
  @IsUUID()
  @IsNotEmpty()
  accountExternalIdDebit: string;

  @IsUUID()
  @IsNotEmpty()
  accountExternalIdCredit: string;

  @IsNumber()
  @IsNotEmpty()
  @IsValidTransactionTypeId({
    message:
      'El tipo de transacción debe ser uno de los valores válidos: 1 = Visa, 2 = Mastercard, 3 = American Express, 4 = Discover',
  })
  transferTypeId: number;

  @IsNumber()
  @IsNotEmpty()
  value: number;
}
