import type { AntiFraudEntity } from '../entities/antifraud.entity';
import { TransactionStatus } from '../enums/transaction-status.enum';

export class AntiFraudServices {
  constructor(private readonly antiFraudAmountLimit: number) {}

  evaluateTransaction(transaction: AntiFraudEntity): TransactionStatus {
    if (transaction.isHighValue(this.antiFraudAmountLimit)) {
      return TransactionStatus.REJECTED;
    }
    return TransactionStatus.APPROVED;
  }
}
