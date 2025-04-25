import { randomUUID } from 'node:crypto';
import type { TransactionResponseDto } from '../../application/dto/transaction-response.dto';
import { getCurrentDateTimeZone } from '../../shared/utils/date.util';
import { BaseEntity } from '../../shared/utils/entity.base';
import type { Nullable } from '../../shared/utils/types';
import { TransactionStatus } from '../enums/transaction-status.enum';
import {
  TransactionTypeId,
  TransactionTypeName,
} from '../enums/transaction-type.enum';
import type {
  ITransaction,
  ITransactionCreateRequest,
} from '../interfaces/transaction.interface';

export class TransactionEntity extends BaseEntity<ITransaction> {
  constructor(props: Partial<ITransaction>, transactionId?: Nullable<string>) {
    super(props, transactionId);
  }

  // Getters
  public get transactionId(): string {
    return this._id.toString();
  }
  public get transactionExternalId(): string {
    return this.props.transactionExternalId;
  }
  public get accountExternalIdDebit(): string | null {
    return this.props.accountExternalIdDebit;
  }
  public get accountExternalIdCredit(): string | null {
    return this.props.accountExternalIdCredit;
  }
  public get transferTypeId(): number {
    return this.props.transferTypeId;
  }

  public get transferTypeName(): string {
    return this.props.transferTypeName;
  }
  public get value(): number {
    return this.props.value;
  }
  public get status(): TransactionStatus {
    return this.props.status;
  }
  public get createdAt(): string {
    return this.props.createdAt;
  }
  public get updatedAt(): string | undefined {
    return this.props.updatedAt;
  }

  // Setters
  public setTransactionId(value: string) {
    this.props.transactionId = value;
  }
  public setTransactionExternalId(value: string) {
    this.props.transactionExternalId = value;
  }
  public setAccountExternalIdDebit(value: string | null) {
    this.props.accountExternalIdDebit = value;
  }
  public setAccountExternalIdCredit(value: string | null) {
    this.props.accountExternalIdCredit = value;
  }
  public setTransferTypeId(value: number) {
    this.props.transferTypeId = value;
  }

  public setTransferTypeName(value: string) {
    this.props.transferTypeName = value;
  }
  public setValue(value: number) {
    this.props.value = value;
  }
  public setStatus(value: TransactionStatus) {
    this.props.status = value;
  }
  public setCreatedAt(value: string) {
    this.props.createdAt = value;
  }
  public setUpdatedAt(value: string | undefined) {
    this.props.updatedAt = value;
  }

  static create(props: ITransactionCreateRequest): TransactionEntity {
    const entity = {
      transactionExternalId: randomUUID(),
      accountExternalIdDebit: props.accountExternalIdDebit || null,
      accountExternalIdCredit: props.accountExternalIdCredit || null,
      transferTypeId: props.transferTypeId,
      transferTypeName: this.getTransferTypeName(props.transferTypeId),
      value: props.value,
      status: TransactionStatus.PENDING,
      createdAt: getCurrentDateTimeZone(),
    };
    return new TransactionEntity(entity);
  }

  // static update
  static update(
    props: Partial<ITransaction>,
    transaction: TransactionEntity,
  ): TransactionEntity {
    const entity = Object.assign(transaction.props, {
      ...props,
      updatedAt: getCurrentDateTimeZone(),
    });
    return new TransactionEntity(entity);
  }

  public toObject(): ITransaction {
    return {
      ...this.props,
      transactionId: this.getId(),
    };
  }
  public toResponseDto(): TransactionResponseDto {
    return {
      transactionExternalId: this.getId(),
      transactionType: { name: this.transferTypeName },
      transactionStatus: { name: this.status },
      value: this.value,
      createdAt: this.createdAt,
    };
  }

  private static getTransferTypeName(transferTypeId: number): string {
    switch (transferTypeId) {
      case TransactionTypeId.VISA:
        return TransactionTypeName.VISA;
      case TransactionTypeId.MASTERCARD:
        return TransactionTypeName.MASTERCARD;
      case TransactionTypeId.AMERICAN_EXPRESS:
        return TransactionTypeName.AMERICAN_EXPRESS;
      case TransactionTypeId.DISCOVER:
        return TransactionTypeName.DISCOVER;
      default:
        return TransactionTypeName.UNKNOWN;
    }
  }
}
