import { Injectable } from '@nestjs/common';
import type { TransferTypeEntity } from 'src/domain/entities/transfer-type.entity';
import type { TransferTypeRepository } from 'src/domain/repositories/transfer-type.repository';
import { PrismaService } from '../database/prisma/prisma.service';
import { PrismaTransferTypeMapper } from './prisma-transfer-type.mapper';

@Injectable()
export class PrismaTransferTypeRepositoryImpl
  implements TransferTypeRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: number): Promise<TransferTypeEntity | null> {
    const transferType = await this.prisma.transferType.findUnique({
      where: { id },
    });
    return transferType
      ? PrismaTransferTypeMapper.toDomain(transferType)
      : null;
  }

  async findAll(): Promise<TransferTypeEntity[]> {
    const transferTypes = await this.prisma.transferType.findMany();
    return transferTypes.map(PrismaTransferTypeMapper.toDomain);
  }
}
