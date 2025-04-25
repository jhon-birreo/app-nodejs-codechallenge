import { TransactionStatus } from '../enums/transaction-status.enum';
import type { ITransaction } from '../interfaces/transaction.interface';

export class AntiFraudEntity {
  public status: TransactionStatus;
  public transactionExternalId: string;
  public value: number;
  constructor(transactionExternalId: string, value: number) {
    this.transactionExternalId = transactionExternalId;
    this.value = value;
  }

  // static create(data: AntiFraudEntity): AntiFraudEntity {
  //   return new AntiFraudEntity(data.transactionExternalId, data.value);
  // }

  public toObject(): ITransaction {
    return {
      transactionExternalId: this.transactionExternalId,
      status: this.status,
    };
  }

  approve() {
    this.status = TransactionStatus.APPROVED;
  }

  reject() {
    this.status = TransactionStatus.REJECTED;
  }
  isHighValue(antiFraudAmountLimit: number): boolean {
    return this.value > antiFraudAmountLimit;
  }
}
