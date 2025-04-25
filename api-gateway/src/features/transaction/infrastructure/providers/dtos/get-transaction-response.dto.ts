export class TransactionServiceProviderResponseDto {
  transactionExternalId: string;
  transactionType: TransactionType;
  transactionStatus: TransactionStatus;
  value: number;
  createdAt: string;
}

interface TransactionType {
  name: string;
}
interface TransactionStatus {
  name: string;
}
