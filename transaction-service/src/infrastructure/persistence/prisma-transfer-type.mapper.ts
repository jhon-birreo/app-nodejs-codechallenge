import { TransferType as PrismaTransferType } from '@prisma/client';
import { convertDateToString } from '../../shared/utils/date.util';
import { TransferTypeEntity } from '../../domain/entities/transfer-type.entity';
export class PrismaTransferTypeMapper {
  static toDomain(transferType: PrismaTransferType): TransferTypeEntity {
    const transferTypeModel = new TransferTypeEntity(
      {
        name: transferType.name,
        description: transferType.description || undefined,
        createdAt: convertDateToString(transferType.createdAt),
        updatedAt: transferType.updatedAt ? convertDateToString(
          transferType.updatedAt,
        ) : undefined,
      },
      transferType.id.toString(),
    );
    return transferTypeModel;
  }
}
