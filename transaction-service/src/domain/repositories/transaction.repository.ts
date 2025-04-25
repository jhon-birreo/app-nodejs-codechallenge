import { TransactionEntity } from '../entities/transaction.entity';

export abstract class TransactionRepository {
  abstract create(transaction: TransactionEntity): Promise<TransactionEntity>;
  abstract updateStatus(id: string, transaction: TransactionEntity): Promise<void>;
  abstract findById(id: string): Promise<TransactionEntity | null>;
}
