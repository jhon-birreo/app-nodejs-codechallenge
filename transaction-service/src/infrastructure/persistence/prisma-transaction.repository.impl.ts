import { Injectable } from '@nestjs/common';
import { TransactionEntity } from '../../domain/entities/transaction.entity';
import { TransactionRepository } from '../../domain/repositories/transaction.repository';
import { PrismaService } from '../database/prisma/prisma.service';
import { PrismaTransactionMapper } from './prisma-transaction.mapper';

@Injectable()
export class PrismaTransactionRepositoryImpl implements TransactionRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(transaction: TransactionEntity): Promise<TransactionEntity> {
    try {
      const transactionData =
        PrismaTransactionMapper.toPersistence(transaction);
      const transactionCreated = await this.prisma.transaction.create({
        data: transactionData,
      });

      return PrismaTransactionMapper.toDomain(transactionCreated);
    } catch (error) {
      throw new Error("Couldn't create transaction");
    }
  }

  async updateStatus(
    transactionExternalId: string,
    transaction: TransactionEntity,
  ): Promise<void> {
    try {
      await this.prisma.transaction.update({
        where: { transactionExternalId },
        data: { status: transaction.status, updatedAt: transaction.updatedAt },
      });
    } catch (error) {
      throw new Error("Couldn't update transaction status");
    }
  }

  async findById(
    transactionExternalId: string,
  ): Promise<TransactionEntity | null> {
    try {
      const found = await this.prisma.transaction.findFirst({
        where: { transactionExternalId },
      });
      if (!found) return null;
      return PrismaTransactionMapper.toDomain(found);
    } catch (error) {
      throw new Error(
        "Couldn't find transaction with id: " + transactionExternalId,
      );
    }
  }
}
